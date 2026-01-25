"use client";

import { motion } from "framer-motion";
import { astralPortfolioData } from "@/data/astral.data";
import PricingCard from '@/components/features/PricingCard';

export default function Pricing() {
  const { pricingPlans } = astralPortfolioData;

  return (
    <section id="pricing" className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/50 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Collaboration Style</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Flexible engagement models to match your project needs and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

