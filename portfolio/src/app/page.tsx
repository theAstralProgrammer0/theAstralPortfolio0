// ============================================
// src/app/page.tsx
// ============================================
import dynamic from 'next/dynamic';
import LenisWrapper from '@/components/LenisWrapper';

/* Hero gets loading fallback 4 beta perf.*/
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <div className="min-h-screen" />,
});

/* Others !viewed immediately, lazy loaded without fallback */
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
    <LenisWrapper>
      <Hero />
{/*
      <About />
      <Experience />
      <Skills />
      <Publications />
      <Education />
      <Certifications />
      <Pricing />
      <Contact />
*/}
    </LenisWrapper>
  );
}

