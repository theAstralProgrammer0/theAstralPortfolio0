// ============================================
// src/components/layout/Footer.tsx
// ============================================
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { astralPortfolioData } from '@/data/astral.data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact } = astralPortfolioData.personal;

  const socialLinks = [
    { icon: Github, url: contact.github, label: 'GitHub' },
    { icon: Linkedin, url: contact.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${contact.email}`, label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-surface/30 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-cosmic flex items-center justify-center font-bold text-white">
                TD
              </div>
              <span className="text-text-primary font-semibold">
                theAstralProgrammer
              </span>
            </div>
            <p className="text-text-secondary text-sm">
              Building scalable solutions across blockchain, health-tech, and government sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-text-primary font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Publications', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-text-primary font-semibold">Connect</h3>
            <div className="space-y-2">
              <p className="text-text-secondary text-sm">{contact.location}</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-text-secondary hover:text-primary transition-colors text-sm block"
              >
                {contact.email}
              </a>
              <a
                href={contact.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors text-sm flex items-center gap-1"
              >
                Technical Blog
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface hover:bg-primary/20 hover:text-primary transition-all duration-200 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © {currentYear} Temitayo Daisi-Oso. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
}

