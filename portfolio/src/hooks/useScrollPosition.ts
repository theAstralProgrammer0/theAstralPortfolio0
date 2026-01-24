// ============================================
// src/hooks/useScrollPosition.ts
// ============================================
'use client';

import { useState, useEffect } from 'react';
import { debounce } from '@/lib/utils';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;
      
      setScrollPosition(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    }, 10);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return {
    scrollPosition,
    scrollDirection,
    isAtTop: scrollPosition < 50,
    isScrolled: scrollPosition > 100,
  };
}
