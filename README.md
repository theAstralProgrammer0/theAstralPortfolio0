# 24-Hour Portfolio Website Build Plan

## ⏰ Time Breakdown (Total: 16 hours of focused work)

### **Hour 0-2: Setup & Foundation** ✅
**Goal**: Get the project running with all dependencies

```bash
# Create project
npx create-next-app@latest portfolio \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*"

cd portfolio

# Install dependencies
npm install framer-motion lucide-react clsx tailwind-merge class-variance-authority

# Optional but recommended
npm install @tailwindcss/typography @tailwindcss/forms
```

**Tasks**:
- [x] Initialize Next.js project
- [x] Install dependencies
- [ ] Configure Tailwind (copy custom config from artifacts)
- [ ] Set up folder structure
- [ ] Add custom CSS animations
- [ ] Test that everything runs

**Checkpoint**: `npm run dev` works, you see default page

---

### **Hour 2-4: Data Layer & Type System** 📊
**Goal**: Convert your CV/Resume into structured data

**Tasks**:
- [ ] Copy the TypeScript types from artifact
- [ ] Create `data/portfolio.ts`
- [ ] Populate ALL your work experiences
- [ ] Add all education entries
- [ ] List all certifications with URLs
- [ ] Add all publications
- [ ] Add awards and activities
- [ ] Test data structure (no errors)

**Tips**:
- Copy from your updated CV/Resume HTML
- Mark `featured: true` for top 2-3 roles
- Double-check all URLs work
- Keep data clean and well-formatted

**Checkpoint**: Import data in a test component, logs correctly

---

### **Hour 4-7: Core UI Components** 🎨
**Goal**: Build reusable components

**Priority Order**:
1. **Button** (15 min) - Use artifact code
2. **Card** (20 min)
3. **Badge** (15 min)
4. **Icon wrapper** (10 min)
5. **Section container** (10 min)

```tsx
// components/ui/Card.tsx
interface CardProps {
  featured?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ featured, children, className }: CardProps) => (
  <div className={cn(
    "rounded-xl p-6 backdrop-blur-sm transition-all",
    featured 
      ? "bg-slate-800/50 border-2 border-blue-500/30" 
      : "bg-slate-800/30 border border-slate-700",
    className
  )}>
    {children}
  </div>
);
```

**Checkpoint**: All UI components render correctly in Storybook/test page

---

### **Hour 7-9: Hero Section** 🚀
**Goal**: Create stunning first impression

**Tasks**:
- [ ] Copy Hero component from artifact
- [ ] Customize colors to your preference
- [ ] Add your actual data
- [ ] Test animations
- [ ] Make it responsive
- [ ] Add resume/CV download links

**Customization Ideas**:
- Change gradient colors
- Adjust blob animation colors
- Modify text sizes
- Add custom background pattern
- Use different fonts

**Checkpoint**: Hero looks amazing on desktop AND mobile

---

### **Hour 9-12: Experience Section** 💼
**Goal**: Showcase your work history with featured logic

**Tasks**:
- [ ] Copy Experience components from artifact
- [ ] Wire up your actual data
- [ ] Test featured vs non-featured display
- [ ] Implement expand/collapse
- [ ] Add filter by technology (optional)
- [ ] Make responsive
- [ ] Test "Show More" functionality

**Enhancement**: Add company logos if you have them

**Checkpoint**: All experiences display, featured ones stand out, expand works

---

### **Hour 12-14: Remaining Sections** 📚

#### **Skills Section** (45 min)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {skills.map(category => (
    <SkillCard key={category.category} {...category} />
  ))}
</div>
```

#### **Publications Section** (45 min)
- Grid layout
- External link indicators
- Topic tags
- Featured post highlight

#### **Education Timeline** (30 min)
- Vertical timeline
- Institutional logos (optional)
- Highlights list

#### **Certifications Grid** (30 min)
- Badge-style display
- Clickable certificates
- Grouped by category

**Checkpoint**: All sections display your complete data

---

### **Hour 14-15: Navigation & Footer** 🧭

#### **Header/Navigation** (30 min)
```tsx
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' }
];
```

Features:
- Sticky on scroll
- Active section highlighting
- Mobile hamburger menu
- Smooth scroll

#### **Footer** (30 min)
- Social links
- Copyright
- Quick links
- Back to top button

**Checkpoint**: Can navigate entire site smoothly

---

### **Hour 15-16: Polish & Responsiveness** ✨

**Tasks**:
- [ ] Test on mobile (Chrome DevTools)
- [ ] Test on tablet
- [ ] Fix any overflow issues
- [ ] Adjust font sizes for mobile
- [ ] Test all animations
- [ ] Check all links work
- [ ] Optimize images
- [ ] Add meta tags for SEO
- [ ] Test loading speed
- [ ] Final visual tweaks

**SEO Checklist**:
```tsx
// app/layout.tsx
export const metadata = {
  title: 'Temitayo Daisi-Oso | Software Engineer & PM',
  description: 'Full-stack developer with 7+ years experience...',
  openGraph: {
    images: ['/og-image.png']
  }
}
```

---

### **Hour 16: Deploy** 🚀

```bash
# Push to GitHub
git add .
git commit -m "Initial portfolio build"
git push origin main

# Deploy to Vercel
vercel deploy --prod

# Or use Vercel dashboard
# 1. Import GitHub repo
# 2. Deploy (automatic)
# 3. Done in 2 minutes
```

**Final Tasks**:
- [ ] Test production site
- [ ] Check mobile on real device
- [ ] Share with 2-3 friends for feedback
- [ ] Make quick fixes if needed
- [ ] Add custom domain (optional)

---

## 🎯 Success Metrics

By end of 24 hours you should have:
- ✅ Fully responsive portfolio
- ✅ All your data displayed
- ✅ Featured work highlighted
- ✅ Smooth animations
- ✅ Fast load time (<2s)
- ✅ Live on Vercel
- ✅ Mobile-optimized
- ✅ SEO-ready

---

## 🚨 Time-Saving Tips

1. **Don't overthink design** - Use the artifacts as-is first
2. **Copy-paste is your friend** - Don't reinvent patterns
3. **Skip optional features** - Add later if needed
4. **Use Tailwind classes** - Faster than custom CSS
5. **Test as you build** - Don't wait till the end
6. **Mobile-first** - Saves responsive debugging time
7. **One section at a time** - Complete before moving on
8. **Keep it simple** - Fancy features can wait

---

## 🔥 Pro Speed Hacks

### Use AI for repetitive work:
```
Prompt: "Convert this list into TypeScript array format: [paste your data]"
```

### Use Tailwind IntelliSense:
- Install VSCode extension
- Get autocomplete
- See class previews

### Use keyboard shortcuts:
- Cmd/Ctrl + D: Multi-cursor select
- Cmd/Ctrl + Shift + L: Select all occurrences
- Cmd/Ctrl + /: Comment/uncomment

### Preview changes live:
- Keep browser and editor side-by-side
- Hot reload shows changes instantly
- Use Chrome DevTools for quick CSS tweaks

---

## 📱 Mobile Testing Checklist

- [ ] Navigation works
- [ ] Text is readable (min 16px)
- [ ] Buttons are tappable (min 44px)
- [ ] No horizontal scroll
- [ ] Images load properly
- [ ] Animations don't lag
- [ ] Forms work (if any)
- [ ] Links open correctly

---

## 🎨 Customization Quick Wins

### Change color scheme (5 min):
```css
/* tailwind.config.js */
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

### Change fonts (10 min):
```tsx
// app/layout.tsx
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const mono = JetBrains_Mono({ subsets: ['latin'] });
```

### Add dark mode toggle (30 min):
- Use `next-themes`
- Add toggle button
- Test both modes

---

## ✅ Final Pre-Launch Checklist

- [ ] All sections complete
- [ ] All links tested
- [ ] Resume/CV downloads work
- [ ] Contact info correct
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast load time
- [ ] SEO meta tags added
- [ ] Analytics added (optional)
- [ ] Favicon added
- [ ] Social share image added
- [ ] Deployed successfully
- [ ] Custom domain connected (optional)

---

## 🚀 Post-Launch (Optional - Can do later)

- [ ] Add contact form
- [ ] Add Google Analytics
- [ ] Add blog section
- [ ] Add project showcase
- [ ] Add testimonials
- [ ] Add dark/light mode
- [ ] Add language toggle
- [ ] Add animations polish
- [ ] Add micro-interactions
- [ ] Get feedback and iterate

---

## 💪 Motivation Reminders

- **Hour 4**: "Hero section done! Looking good!"
- **Hour 8**: "Halfway there! Experience section rocks!"
- **Hour 12**: "Almost done! Just polish remaining!"
- **Hour 16**: "SHIP IT! You did it! 🎉"

Remember: **Done is better than perfect**. Ship it in 24 hours, iterate later!

Good luck! You've got this! 🚀
