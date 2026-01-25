// src/components/sections/Hero.tsx
'use client';

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { Github, Linkedin, Mail, FileText, Download, ExternalLink } from "lucide-react";
import { astralPortfolioData } from "@/data/astral.data";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const SECTION_HEIGHT = 1500;

export default function Hero() {
  const { personal } = astralPortfolioData;
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const socialLinks = [
    { icon: Github, url: personal.contact.github, label: 'GitHub' },
    { icon: Linkedin, url: personal.contact.linkedin, label: 'LinkedIn' },
    { icon: ExternalLink, url: personal.contact.blog, label: 'Blog' },
    { icon: Mail, url: `mailto:${personal.contact.email}`, label: 'Email' },
  ];

  return (
    <div
      ref={containerRef}
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute bottom-1/5 left-1/4 w-64 h-64 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          scale: [0.07, 0.077, 0.07],
          x: [0, 70, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/2 right-1/7 w-64 h-64 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          scale: [0.07, 0.077, 0.07],
          x: [0, 70, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
     <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/30 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          scale: [0.07, 0.077, 0.07],
          x: [0, 70, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />


      {/* Main Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={fadeInUp}>
            <Badge
              variant="outline"
              className="inline-flex items-center px-4 py-2 text-accent text-sm border-primary/50 bg-primary/10"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-gradient mb-2">
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
            className="text-xl sm:text-2xl md:text-3xl text-gradient font-light max-w-3xl mx-auto"
          >
            {personal.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gradient max-w-2xl mx-auto leading-relaxed"
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
              className="group border-primary/70 bg-gradient-cosmic hover:shadow-lg hover:shadow-secondary/70 transition-all"
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
              className="border-primary/50 hover:bg-primary/10 transition-all duration-250 ease-in-out hover:glow-accent hover:text-accent"
              asChild
            >
              <a href={astralPortfolioData.resumeUrl} download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-250 ease-in-out hover:glow-accent hover:text-accent"
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

          {/* Scroll Hint */}
          <div className="flex items-center justify-center gap-2 pt-6 text-secondary/80 animate-bounce">
            <span>Scroll <FiArrowDown className="inline" /> to explore</span>
          </div>
        </motion.div>
      </div>

      {/* Parallax Background Image */}
      <motion.div
        className="sticky top-0 h-screen w-full"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage: "url('https://images.unsplash.com/photo-1460186136353-977e9d6085a1')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Parallax Images */}
      <div className="absolute inset-0 z-0">
        <div className="mx-auto max-w-7xl px-4 pt-[300px]">
          <ParallaxImage
            src="/images/parallax-1.png"
            alt="Code interface"
            start={-200}
            end={200}
            className="w-1/3"
          />
          <ParallaxImage
            src="/images/parallax-2.png"
            alt="Development setup"
            start={200}
            end={-250}
            className="mx-auto w-1/2 opacity-20"
          />
          <ParallaxImage
            src="/images/parallax-3.jpg"
            alt="UI Design"
            start={-200}
            end={200}
            className="ml-auto w-1/6"
          />
        </div>
      </div>

      {/* Gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
}

// Parallax Image Component
interface ParallaxImageProps {
  src: string;
  alt: string;
  start: number;
  end: number;
  className: string;
}

function ParallaxImage({ src, alt, start, end, className }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`rounded-2xl shadow-2xl ${className}`}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
}

