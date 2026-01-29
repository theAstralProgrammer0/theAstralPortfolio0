"use client";

import { motion } from "framer-motion";
import { astralPortfolioData } from "@/data/astral.data";
import { useState } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

export default function Skills() {
  const { skills } = astralPortfolioData;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skills.map((skill, index) => (
            <button
              key={skill.category}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full border transition-all ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {skill.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory].items.map((skill, index) => (
            <SkillItem
              key={skill}
              skill={skill}
              index={index}
              totalItems={skills[activeCategory].items.length}
            />
          ))}
        </div>

        {/* All Categories Accordion */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">All Skill Categories</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {skills.map((skillCategory, catIndex) => (
              <SkillCategoryAccordion
                key={skillCategory.category}
                category={skillCategory}
                index={catIndex}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </section>
  );
}

function SkillItem({ skill, index, totalItems }: { skill: string; index: number; totalItems: number }) {
  const delay = (index / totalItems) * 0.5;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="p-6 rounded-2xl bg-card border border-border backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <FiCheck className="text-primary text-xl" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">{skill}</h4>
          <div className="w-full h-1 bg-border rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: `${85 + (index % 3) * 5}%` }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.2, duration: 1 }}
              className="h-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SkillCategoryAccordion({ category, index }: { category: any; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-border rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between bg-card/50 hover:bg-card transition-colors"
      >
        <h4 className="text-xl font-bold">{category.category}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0">
          <div className="flex flex-wrap gap-3">
            {category.items.map((item: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

