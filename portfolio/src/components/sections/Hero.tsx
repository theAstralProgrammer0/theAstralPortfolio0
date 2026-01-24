// ============================================
// src/components/sections/Hero.tsx
// ============================================
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Download, ArrowDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { astralPortfolioData } from '@/data/astral.data';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations';

export default function Hero() {
  const { personal } = astralPortfolioData;

  const socialLinks = [
    { icon: Github, url: personal.contact.github, label: 'GitHub' },
    { icon: Linkedin, url: personal.contact.linkedin, label: 'LinkedIn' },
    { icon: ExternalLink, url: personal.contact.blog, label: 'Blog' },
    { icon: Mail, url: `mailto:${personal.contact.email}`, label: 'Email' },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
      >
        {/* Status Badge */}
        <motion.div variants={fadeInUp}>
          <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50 bg-primary/10">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-text-primary mb-2">
              Hey, I'm
            </span>
            <span className="block text-gradient">
              {personal.name}
            </span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeInUp}
          className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-light max-w-3xl mx-auto"
        >
          {personal.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-text-secondary/80 max-w-2xl mx-auto leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <Button
            size="lg"
            className="group bg-gradient-cosmic hover:shadow-lg hover:shadow-primary/50 transition-all"
            asChild
          >
            <a href="#contact">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href={astralPortfolioData.resumeUrl} download>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="hover:bg-surface/50"
            asChild
          >
            <a href={astralPortfolioData.cvUrl} download>
              <FileText className="w-5 h-5 mr-2" />
              View CV
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={scaleIn}
          className="flex justify-center gap-4 pt-8"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 glass hover:glass-hover rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors" />
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface border border-white/10 text-text-primary text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => {
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-text-secondary text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
