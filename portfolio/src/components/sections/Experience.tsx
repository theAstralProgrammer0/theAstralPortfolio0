"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { astralPortfolioData } from "@/data/astral.data";
import { FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";
import { useRef } from "react";

export default function Experience() {
  const { workExperience } = astralPortfolioData;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="experience" ref={containerRef} className="relative py-32 bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Building innovative solutions across various industries
          </p>
        </motion.div>

        {/* Card Stack Container */}
        <div className="relative min-h-[200vh]">
          {workExperience.map((exp, index) => {
            // Calculate targetScale based on index and totalCards
            const totalCards = workExperience.length;
            const targetScale = 1 - ((totalCards - index - 1) * 0.03); // Reduced scale difference
            
            return (
              <Card 
                key={exp.id} 
                exp={exp} 
                index={index} 
                progress={scrollYProgress}
                range={[
                  (index / totalCards) * 0.5, // Start point
                  ((index + 1) / totalCards) * 1.5 // End point
                ]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
        <div className="h-[50vh]" />
      </div>
    </section>
  );
}

interface CardProps {
  exp: any;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({ exp, index, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  
  return (
    <div 
      ref={container} 
      className=""
      style={{ 
        marginTop: `${index * 60}px`, 
      }} 
    >
      <motion.div
        style={{ 
          scale,
          opacity,
        }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.7, 
          ease: "easeOut",
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-3xl mx-auto bg-zinc-900/90 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
      >
        <div className="p-8 md:p-12">
          {/* Aesthetic Gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          {/* Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 mb-8 pb-8 border-b border-white/5">
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{exp.title}</h3>
                {exp.featured && (
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium uppercase tracking-wider">
                    Featured
                  </span>
                )}
              </div>
              
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary hover:text-primary/80 transition-colors flex items-center gap-2 w-fit"
              >
                {exp.company}
                <FiExternalLink className="text-sm" />
              </a>
            </div>

            {/* Meta Data */}
            <div className="flex flex-col gap-3 text-zinc-400">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-primary shrink-0" />
                <span className="text-sm">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-primary shrink-0" />
                <span className="text-sm">{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-8">
              <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                {exp.overview}
              </p>
              
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-4 text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-400">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Tech Stack */}
            <div className="md:col-span-2">
              <h4 className="font-semibold mb-4 text-white">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm hover:border-primary/50 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
