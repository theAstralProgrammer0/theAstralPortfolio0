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
        {/* Header */}
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

        {/* Card Stack Container */}
        <div className="flex flex-col gap-4">
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
        {/* Spacer for scroll depth */}
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
        className="w-full max-w-5xl bg-zinc-900/90 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:overflow-visible"
      >
        <div className="p-8 md:p-12 h-full flex flex-col">
          {/* Aesthetic Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:opacity-90 transition-all"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-all"
                  >
                    <FiGithub /> Code
                  </a>
                )}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-2">
              <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden border border-white/5 shadow-inner">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

