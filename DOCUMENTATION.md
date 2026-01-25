# QUE-0:
<blockquote>
From this snippet of code:

```
'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisWrapperProps {
  children: ReactNode;
}

export default function LenisWrapper({ children }: LenisWrapperProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

Explain what this part is all about wrt the useEffect, the Lenis Wrapper being
built, and any other thing it affects?

```
 // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
```

Also, clarify why the dependency array is empty.
</blockquote>

# ANS-0:
<blockquote>
This chunk is doing one job, and doing it obsessively: **keeping Lenis alive and fed with animation frames until the component dies**. Let’s break it down without pretending this is mystical frontend magic.

---

## What this part is actually doing

```ts
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

### 1. The RAF loop (aka “please keep scrolling smooth forever”)

* `requestAnimationFrame` (RAF) is the browser’s way of saying:
  “Call me right before the next repaint so animations don’t look like trash.”

* Lenis **does not scroll by itself**.
  It needs to be updated every frame so it can:

  * interpolate scroll positions
  * apply easing
  * simulate inertia
  * override native scroll behavior smoothly

* `lenis.raf(time)`:

  * Feeds Lenis the current frame timestamp
  * Lets it compute how far the scroll should progress based on easing and duration

* The recursion:

  ```ts
  requestAnimationFrame(raf);
  ```

  This keeps the loop alive.
  One frame finishes → schedules the next → repeat until the universe ends or React unmounts the component.

So effectively, this is:

> “As long as this component exists, Lenis owns the scroll timing.”

No loop, no smooth scrolling. Just sad native scroll.

---

## Why this lives inside `useEffect`

Because:

* You **must not** start animation loops during render
* You need access to browser APIs (`window`, `requestAnimationFrame`)
* You want this to run **after** the component mounts

`useEffect` is React’s way of saying:

> “Okay, DOM exists now. You may touch the browser.”

---

## Cleanup: preventing browser abuse

```ts
return () => {
  lenis.destroy();
};
```

This runs when:

* The component unmounts
* The effect is re-run (not happening here, but React still insists on rules)

What `lenis.destroy()` does:

* Removes event listeners
* Stops scroll hijacking
* Cleans internal state

Without this:

* You leak memory
* You may get double scroll handlers
* Your page starts behaving like it’s haunted

This is basic hygiene. Frontend equivalent of washing your hands.

---

## Why the dependency array is empty: `[]`

This is intentional and correct.

### Empty dependency array means:

* Run **once** on mount
* Clean up **once** on unmount
* Never re-run

Which is exactly what you want because:

1. Lenis should be initialized **one time**

2. Starting multiple RAF loops would:

   * Stack animation loops
   * Destroy performance
   * Make scrolling feel drunk

3. None of the values inside the effect change:

   * `Lenis` config is static
   * `lenisRef` doesn’t need to trigger reruns
   * `children` are irrelevant to scroll physics

If this dependency array wasn’t empty, you’d be:

* Recreating Lenis
* Restarting the RAF loop
* Fighting yourself every render

That’s how jank is born.

---

## What this wrapper affects globally

Even though it looks innocent:

```tsx
return <>{children}</>;
```

This component:

* Hijacks scrolling for **everything inside it**
* Replaces native scroll timing with Lenis-controlled scroll
* Affects:

  * Mouse wheel behavior
  * Scroll inertia
  * Scroll velocity
  * Touch scroll behavior (partially, based on config)

It’s basically saying:

> “Anything inside me scrolls on my terms.”

That’s why it’s a **wrapper**, not a hook.

---

## Mental model (keep this, it helps)

* `useEffect` = lifecycle control
* `Lenis` = scroll physics engine
* `requestAnimationFrame` = heartbeat
* Cleanup = stop haunting the browser
* Empty dependency array = “do not touch this again”

This is one of the rare cases where the code is doing exactly what it should,
no more, no less. Minimal. Correct. Slightly power-hungry, but that’s smooth
scrolling for you.
</blockquote>

# QUE-1:
<blockquote>
From the snippet of code below, why are we lazy loading (unpack what "for
better performance" means), and why the use of the 'dynamic' keyword in the
import statements?
```
// src/app/page.tsx
import dynamic from 'next/dynamic';

// Lazy load sections for better performance
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <div className="min-h-screen" />,
});

const About = dynamic(() => import('@/components/sections/About'));
const Experience = dynamic(() => import('@/components/sections/Experience'));
const Skills = dynamic(() => import('@/components/sections/Skills'));
const Publications = dynamic(() => import('@/components/sections/Publications'));
const Education = dynamic(() => import('@/components/sections/Education'));
const Certifications = dynamic(() => import('@/components/sections/Certifications'));
const Pricing = dynamic(() => import('@/components/sections/Pricing'));
const Contact = dynamic(() => import('@/components/sections/Contact'));

export default function Home() {
  return (
    <>
      <Hero />
{/*
      <About />
      <Experience />
      <Skills />
      <Publications />
      <Education />
      <Certifications />
      <Contact />
*/}
    </>
  );
}
```
</blockquote>

# ANS-1:
<blockquote>
This is one of those places where frontend people say “performance” and mean
five very specific, very practical things. So let’s decode the lies.

---

## Why lazy-load these sections at all

When Next.js builds a page **without** `dynamic()`, it does this:

* Bundles **every imported component**
* Ships that JS to the browser **upfront**
* Browser parses it
* Browser executes it
* Then your page becomes interactive

That’s fine if your page is a button and a dream.
Your page is a portfolio with sections that contain animations, charts, icons,
images, timelines, and probably a library or three that thought `300kb` was a
vibe.

Lazy loading changes the deal.

### What “for better performance” actually means here

Lazy loading means:

1. **Smaller initial JS bundle**

   * Only `Hero` is required to render the first screen
   * Everything else stays on disk until needed
   * Less JS = faster download, parse, and execution

2. **Faster First Contentful Paint (FCP)**

   * The hero section shows up faster
   * User sees something immediately
   * No blank screen staring contest

3. **Faster Time To Interactive (TTI)**

   * Browser isn’t choking on code for sections the user hasn’t scrolled to
   * Main thread stays free
   * Scroll and clicks feel responsive instead of sticky

4. **Deferred cost**

   * About, Experience, Skills, etc are only loaded when React actually tries to render them
   * You pay the JS cost *later*, not at page load

5. **Less wasted work**

   * If the user bounces after the hero, the rest of the JS never loads
   * Congrats, you just saved bandwidth and battery life

So “better performance” means:

> Less JS upfront, faster paint, faster interaction, and less pointless computation.

No marketing fluff. Just physics.

---

## Why `dynamic()` instead of a normal `import`

This line is the entire trick:

```ts
const About = dynamic(() => import('@/components/sections/About'));
```

### What `dynamic()` actually does

* Tells Next.js:
  “This import is **not required immediately**.”
* Creates a **separate JavaScript chunk** for that component
* Loads it **on demand** instead of at build time

Without `dynamic()`:

```ts
import About from '@/components/sections/About';
```

Next.js goes:

> Cool, throwing this into the main bundle whether you need it now or not.

With `dynamic()`:

> I’ll split this out and fetch it later when React renders it.

That’s important because React itself **does not lazy-load imports**.
Next.js does. `dynamic()` is the hook into that system.

---

## Why the Hero has a `loading` fallback

```ts
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <div className="min-h-screen" />,
});
```

This exists because:

* Even lazy-loaded components take time to download
* Without a fallback, React would render **nothing** briefly
* That causes layout shifts and visual jank

The placeholder:

* Preserves layout height
* Prevents content jumping
* Keeps the page feeling stable

Hero is special because:

* It’s above the fold
* It defines the first visual impression
* You really don’t want it popping in late like an uninvited guest

---

## Why this makes sense for *sections* specifically

Sections are perfect lazy-load candidates because:

* They’re **not needed immediately**
* They’re usually heavy
* They’re often visually isolated
* They load naturally as the user scrolls

You’re basically telling the browser:

> Deal with this page in chapters, not all at once.

Which is how humans read anyway.

---

## One important subtlety

Even though you commented most sections out:

```tsx
{/*
  <About />
  <Experience />
  ...
*/}
```

Those components **will not load at all** until:

* They’re rendered
* React actually tries to mount them

So right now:

* Only `Hero`’s JS chunk is downloaded
* Everything else is dead weight… politely ignored

That’s exactly what you want during iteration.

---

## TL;DR (since attention spans are illegal now)

* Lazy loading = smaller initial JS + faster page startup
* `dynamic()` = Next.js code splitting + on-demand loading
* Sections are lazy-loaded because users don’t see them immediately
* Hero gets a fallback to avoid layout shift
* Empty screen bad, smooth load good

This is not premature optimization.
This is baseline competence in 2026.

</blockquote>
