"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { astralPortfolioData } from "@/data/astral.data";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { featuredProjects } = astralPortfolioData;

  return (
    <section id="projects" ref={containerRef} className="relative py-32 bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Static Header that won't disappear */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Showcasing innovative solutions and creative implementations
          </motion.p>
        </div>

        {/* Card Stack Container - Modified for top stacking */}
        <div className="flex flex-col gap-4"> {/* Extra padding ensures last card scrolls fully */}
          {featuredProjects.map((project, index) => {
            const targetScale = 1 - (featuredProjects.length - index) * 0.05;
            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
        <div className="h-[20vh]" />
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: any;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function ProjectCard({ project, index, progress, range, targetScale }: ProjectCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  
  return (
    <div 
      ref={container} 
      className="flex items-center justify-center sticky top-0 h-screen"
    >
      <motion.div
        style={{ 
          scale,
          opacity,
          top: `calc(10% + ${index * 25}px)`
        }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="w-full max-w-5xl bg-zinc-900/90 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:overflow-visible"
      >
        <div className="p-7 md:p-13 h-full flex flex-col">
          {/* Aesthetic Gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          {/* Header Section */}
          <div className="mb-8 border-b border-white/5 pb-6">
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium uppercase tracking-wider">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                  Featured
                </span>
              )}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
            
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-5 gap-8 flex-1">
            <div className="md:col-span-3 space-y-6">
              {/* Tags */}
              <div>
                <h4 className="font-semibold mb-4 text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg text-sm hover:border-primary/50 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors"
                  >
                    <FiGithub />
                    View Code
                  </a>
                )}
              </div>
            </div>

            {/* Image Section - Sticky within card on desktop */}
            <div className="md:col-span-2">
              <div className="md:sticky md:top-0">
                <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
/*
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { astralPortfolioData } from "@/data/astral.data";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { featuredProjects } = astralPortfolioData;

  return (
    <section id="projects" ref={containerRef} className="relative py-32">
      //Bg
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </motion.div>

        <div className="relative">
          {featuredProjects.map((project, i) => {
            const targetScale = 1 - (featuredProjects.length - i) * 0.05;
            return (
              <ProjectCard
                key={project.id}
                i={i}
                project={project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  i: number;
  project: any;
  progress: any;
  range: [number, number];
  targetScale: number;
}

function ProjectCard({ i, project, progress, range, targetScale }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          backgroundColor: "hsl(var(--card))",
          borderColor: "hsl(var(--border))"
        }}
        className="relative rounded-3xl p-8 w-full max-w-5xl mx-auto border shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          // Left Content
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                {project.category}
              </span>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-zinc-300 text-lg mb-6">{project.description}</p>
            </div>

            // Tags
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            // Links
            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors"
                >
                  <FiGithub />
                  View Code
                </a>
              )}
            </div>
          </div>

          // Right Image
          <div className="lg:w-1/2 relative h-64 lg:h-96 rounded-2xl overflow-hidden">
            <motion.div
              style={{ scale: imageScale }}
              className="absolute inset-0"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
              // Overlay Gradient
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
*/
