// src/components/layout/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, ExternalLink, Sparkles, MapPin, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { astralPortfolioData } from '@/data/astral.data';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = astralPortfolioData;
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    { icon: Github, url: personal.contact.github, label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Linkedin, url: personal.contact.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Mail, url: `mailto:${personal.contact.email}`, label: 'Email', color: 'hover:bg-red-600' },
    { icon: Globe, url: personal.contact.portfolio, label: 'Portfolio', color: 'hover:bg-green-600' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Education', href: '#education' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-black">
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-secondary/70 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [null, '-100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>


      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section with Parallax Image */}
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Logo with Parallax Background */}
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-4 shadow-2xl shadow-primary/20">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/parallax-4.png')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl tracking-tighter">
                    tAP0
                  </span>
                </div>
                
                {/* Sparkle Effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="absolute -top-2 -left-2 w-4 h-4 text-primary/50" />
                  <Sparkles className="absolute -bottom-2 -right-2 w-4 h-4 text-secondary/50" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
                  theAstralProgrammer0
                </h3>
                <p className="text-zinc-400 text-sm">
                  Building cosmic digital experiences
                </p>
              </div>
            </motion.div>

            <p className="text-zinc-300 text-sm leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mb-4"
            >
              Quick Links
            </motion.h3>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="group flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors w-full text-left p-2 rounded-lg hover:bg-white/5"
                  >
                    <motion.div
                      className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                      animate={hoveredSocial === item.label ? { scale: 2 } : { scale: 1 }}
                    />
                    <span className="text-sm">{item.label}</span>
                    <ArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mb-4"
            >
              Contact Info
            </motion.h3>
            <div className="space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 group p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Location</p>
                  <p className="text-white">{personal.contact.location}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 group p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <a
                    href={`mailto:${personal.contact.email}`}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {personal.contact.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 group p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Phone</p>
                  <a
                    href={personal.contact.phoneLink}
                    className="text-white hover:text-accent transition-colors"
                  >
                    {personal.contact.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social & Connect */}
          <div className="space-y-6">
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-white mb-4"
            >
              Connect With Me
            </motion.h3>
            
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredSocial(link.label)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  className={`relative p-3 rounded-xl bg-white/5 ${link.color} transition-all duration-300 group`}
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"
                    style={{ background: 'currentColor' }}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Blog Link */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href={personal.contact.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary hover:from-primary/20 hover:to-secondary/20 transition-all group"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Technical Blog</span>
                <ArrowUp className="w-3 h-3 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8 bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-sm text-center sm:text-left"
          >
            © {currentYear} <span className="text-primary">Temitayo Daisi-Oso</span>. All rights reserved.
            <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">
              Crafted with passion from Lagos, Nigeria.
            </span>
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button
              onClick={scrollToTop}
              className="group relative overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20 border border-accent/10 hover:border-primary/50 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2 text-white">
                Back to Top
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Floating Sparkles */}
      <div className="absolute bottom-4 right-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -20, opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
