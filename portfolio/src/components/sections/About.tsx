"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { astralPortfolioData } from "@/data/astral.data";
import { FiDownload } from "react-icons/fi";

export default function About() {
  const { personal } = astralPortfolioData;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative min-h-screen py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      {/* Floating Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">{personal.name}</h3>
              <p className="text-xl text-primary mb-4">{personal.title}</p>
              <p className="text-zinc-300 text-lg leading-relaxed">
                {personal.summary}
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoItem label="Location" value={personal.contact.location} />
              <InfoItem label="Email" value={personal.contact.email} />
              <InfoItem label="Phone" value={personal.contact.phone} />
              <InfoItem label="Status" value="Available for work" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={personal.resumeUrl}
                download
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full flex items-center gap-2 hover:bg-primary/90 transition-colors"
              >
                <FiDownload />
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Right Column - Stats/Cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <StatCard
              number="7+"
              label="Years Experience"
              description="Building scalable solutions"
              color="primary"
            />
            <StatCard
              number="50+"
              label="Projects Completed"
              description="Across multiple industries"
              color="secondary"
            />
            <StatCard
              number="100%"
              label="Client Satisfaction"
              description="Focus on quality delivery"
              color="accent"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-xl bg-card border border-border">
      <p className="text-sm text-zinc-400 mb-1">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

function StatCard({ number, label, description, color }: StatCardProps) {
  const colorClasses = {
    primary: "border-primary/30 bg-primary/5",
    secondary: "border-secondary/30 bg-secondary/5",
    accent: "border-accent/30 bg-accent/5"
  };

  return (
    <div className={`p-6 rounded-2xl border ${colorClasses[color]} backdrop-blur-sm`}>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-4xl font-bold">{number}</span>
        <span className="text-xl font-semibold">{label}</span>
      </div>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}
