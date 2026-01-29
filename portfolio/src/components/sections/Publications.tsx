"use client";

import { motion } from "framer-motion";
import { astralPortfolioData } from "@/data/astral.data";
import { FiExternalLink, FiCalendar, FiBook } from "react-icons/fi";

export default function Publications() {
  const { publications } = astralPortfolioData;

  return (
    <section id="publications" className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <FiBook />
            <span>Thought Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Publications & <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Sharing knowledge and insights on modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <PublicationCard key={pub.id} publication={pub} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </section>
  );
}

function PublicationCard({ publication, index }: { publication: any; index: number }) {
  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all"
    >
      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-sm text-zinc-400">Technical Article</span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
        {publication.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-300 mb-6 line-clamp-3">
        {publication.description}
      </p>

      {/* Topics */}
      <div className="flex flex-wrap gap-2 mb-6">
        {publication.topics.map((topic: string) => (
          <span
            key={topic}
            className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <div className="flex items-center gap-2 text-zinc-400">
          <FiCalendar />
          <span className="text-sm">{publication.publishDate || "2024"}</span>
        </div>
        <a
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          Read Article
          <FiExternalLink />
        </a>
      </div>
    </motion.article>
  );
}

