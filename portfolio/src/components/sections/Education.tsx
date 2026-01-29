"use client";

import { motion } from "framer-motion";
import { astralPortfolioData } from "@/data/astral.data";
import { FiCalendar, FiMapPin, FiAward } from "react-icons/fi";

export default function Education() {
  const { education } = astralPortfolioData;

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Formal education and continuous learning journey
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
          
          {education.map((edu, index) => (
            <EducationTimelineItem key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </section>
  );
}

function EducationTimelineItem({ education, index }: { education: any; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ x: isEven ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`relative flex items-center mb-12 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Timeline Dot */}
      <div className="xs:hidden absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 rounded-full bg-card border-4 border-primary z-10" />

      {/* Content */}
      <div className={`lg:w-5/12 ${isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12"} pl-12 lg:pl-0`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-card rounded-2xl p-8 border border-border"
        >
          {/* Institution & Degree */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">{education.institution}</h3>
            <p className="text-lg text-primary mb-3">{education.degree}</p>
            {education.field && (
              <p className="text-zinc-300 mb-4">{education.field}</p>
            )}
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-4 text-zinc-400 mb-6">
            <div className="flex items-center gap-2">
              <FiCalendar />
              <span>
                {education.startDate} - {education.endDate}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            {education.highlights.map((highlight: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <FiAward className="text-accent mt-1 flex-shrink-0" />
                <span className="text-zinc-300">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

