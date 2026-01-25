import { motion } from "framer-motion";
import { PricingCardProps } from '@/types/pricing';
import { FiCheck, FiStar } from "react-icons/fi";

export default function PricingCard({ plan, index }: PricingCardProps) {
  const colorClasses = {
    primary: "border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-transparent",
    secondary: "border-purple-500/30 bg-gradient-to-b from-purple-500/10 to-transparent",
    accent: "border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-transparent",
  };

  const buttonClasses = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-purple-500 hover:bg-purple-600",
    accent: "bg-cyan-500 hover:bg-cyan-600",
  };

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative rounded-3xl border ${colorClasses[plan.color]} p-8 backdrop-blur-sm ${
        plan.highlighted ? "scale-105 shadow-2xl shadow-blue-500/20" : ""
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
            <FiStar className="text-yellow-300" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
        <p className="text-zinc-400 mb-4">{plan.subtitle}</p>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-5xl font-bold">{plan.price}</span>
          <span className="text-zinc-400">/{plan.period}</span>
        </div>

        <p className="text-zinc-300 mb-6">{plan.description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx }}
            className="flex items-center gap-3"
          >
            <FiCheck className="text-green-500 flex-shrink-0" />
            <span className="text-zinc-300">{feature}</span>
          </motion.li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-full font-semibold transition-all ${buttonClasses[plan.color]} ${
          plan.highlighted ? "shadow-lg" : ""
        }`}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
}
