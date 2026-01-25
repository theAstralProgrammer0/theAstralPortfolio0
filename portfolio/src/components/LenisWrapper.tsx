'use client';

{/*
import { ReactLenis } from 'lenis/dist/lenis-react';
import { ReactNode } from 'react';

interface LenisWrapperProps {
  children: ReactNode;
}

export default function LenisWrapper({ children }: LenisWrapperProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.01,
        duration:1.5,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
*/}







import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisWrapperProps {
  children: ReactNode;
}

export default function LenisWrapper({ children }: LenisWrapperProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Init Lenis
    const lenis = new Lenis({
      lerp: 0.06,
      wheelMultiplier: 1.3,
      touchMultiplier: 2,
      smoothWheel: true,
      smoothTouch: false,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Recurs smooth scroll animation 4eva
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

