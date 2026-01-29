'use client';
// src/components/layout/Header.tsx

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, FileText, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { astralPortfolioData } from '@/data/astral.data';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolledEnough, setIsScrolledEnough] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle Scroll Effects & Active Section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Background Blur Check
      const currentScrollY = window.scrollY;
      setIsScrolledEnough(currentScrollY > 50);

      // 2. Active Section Detection
      const sections = navItems.map(item => document.querySelector(item.href));
      let currentSection = '';
      
      sections.forEach((section) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).clientHeight;
          // Offset of 150px accounts for the header height + some buffer
          if (currentScrollY >= sectionTop - 150 && currentScrollY < sectionTop + sectionHeight - 150) {
            currentSection = section.id;
          }
        }
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Offset for the fixed header height
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          // Changed background logic to be darker/more solid when scrolled for readability
          isScrolledEnough || isMenuOpen
            ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
           {/* Logo with Parallax Image */}

            <motion.div
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToTop()}
            >

              {/* Logo Container with Parallax Background */}
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                {/* Parallax Image Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: "url('/images/parallax-4.png')",
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
                {/* Logo Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg tracking-tighter">
                    tAP0
                  </span>
                </div>
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm lg:text-base group-hover:text-primary transition-colors duration-300">
                  theAstralProgrammer0
                </span>
                <motion.span
                  className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300"
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{ delay: 0.5 }}
                >
                  Software Engineer
                </motion.span>
              </div>
            </motion.div> 

            {/* Desktop Navigation - Hidden on LG, Visible on XL */}
            <div className="hidden xl:flex items-center space-x-1 bg-white/5 p-1 rounded-2xl border border-white/5 backdrop-blur-sm">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300',
                    activeSection === item.href.slice(1)
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  )}
                >
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/20 rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Desktop Buttons - Hidden on LG, Visible on XL */}
            <div className="hidden xl:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href={astralPortfolioData.resumeUrl} download>
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
              <Button
                size="sm"
                className="border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-white"
                asChild
              >
                <a href={astralPortfolioData.cvUrl} download>
                  <FileText className="w-4 h-4 mr-2" />
                  CV
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle - Visible on LG and below */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-zinc-300 hover:text-white relative z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="xl:hidden fixed inset-x-0 top-20 bg-zinc-950/95 backdrop-blur-2xl border-t border-white/10 z-40"
              ref={menuRef}
            >
              <div className="flex flex-col h-[calc(100vh-80px)] p-6">
                
                {/* Top Half: Navigation Links - Now with proper scrolling */}
                <div className="flex-1 overflow-y-auto overscroll-contain touch-pan-y pb-10 pr-4 custom-scrollbar">
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 px-2 sticky top-0 bg-zinc-950/95 py-2">
                    Navigation
                  </h3>
                  <div className="space-y-2">
                    {navItems.map((item, idx) => (
                      <motion.button
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => scrollToSection(item.href)}
                        className={cn(
                          'w-full flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all border border-transparent',
                          activeSection === item.href.slice(1)
                            ? 'bg-primary/10 border-primary/20 text-primary'
                            : 'hover:bg-white/5 text-zinc-300'
                        )}
                      >
                        {item.label}
                        {activeSection === item.href.slice(1) && (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Bottom Half: Actions - Fixed at bottom */}
                <div className="pt-6 mt-6 border-t border-white/10 shrink-0 bg-zinc-950">
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    Downloads
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="w-full justify-center h-12 text-base border-white/10 hover:bg-white/5"
                      asChild
                    >
                      <a href={astralPortfolioData.resumeUrl} download>
                        <Download className="w-4 h-4 mr-2" />
                        Resume
                      </a>
                    </Button>
                    <Button
                      className="w-full justify-center h-12 text-base bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={astralPortfolioData.cvUrl} download>
                        <FileText className="w-4 h-4 mr-2" />
                        CV
                      </a>
                    </Button>
                  </div>
                </div>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
