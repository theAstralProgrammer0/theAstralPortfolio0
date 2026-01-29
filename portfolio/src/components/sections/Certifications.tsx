"use client";

import { motion } from "framer-motion";
import { astralPortfolioData } from "@/data/astral.data";
import { FiExternalLink, FiCalendar, FiCheckCircle } from "react-icons/fi";

export default function Certifications() {
  const { certifications } = astralPortfolioData;

  // Group certifications by category
  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, any[]>);

  const categories = ["technical", "professional", "installation"];

  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent/10 text-accent rounded-full mb-4">
            <FiCheckCircle />
            <span>Certified Professional</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="text-gradient">Badges</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Industry-recognized credentials validating expertise
          </p>
        </motion.div>

        {/* Certification Grid */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-8 capitalize">
                {category} Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedCerts[category]?.map((cert, index) => (
                  <CertificationCard key={cert.id} certification={cert} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </section>
  );
}

function CertificationCard({ certification, index }: { certification: any; index: number }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all"
    >
      {/* Badge Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
          <FiCheckCircle className="text-primary text-2xl" />
        </div>
        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm capitalize">
          {certification.category}
        </span>
      </div>

      {/* Certification Details */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{certification.name}</h3>
        <p className="text-zinc-300 mb-4">{certification.issuer}</p>
        
        {certification.date && (
          <div className="flex items-center gap-2 text-zinc-400 mb-3">
            <FiCalendar />
            <span className="text-sm">Issued: {certification.date}</span>
          </div>
        )}
      </div>

      {/* Action */}
      {certification.url && (
        <a
          href={certification.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          Verify Credential
          <FiExternalLink />
        </a>
      )}
    </motion.div>
  );
}

