"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { astralPortfolioData } from "@/data/astral.data";

export default function Contact() {
  const { personal } = astralPortfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent("New Project Inquiry from Portfolio");
    const body = encodeURIComponent(
      `Hello ${personal.name},\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    
    window.location.href = `mailto:${personal.contact.email}?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Got a project you want to ship fast?
            <span className="block text-blue-400 mt-2">Let&apos;s Talk About It</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Ready to bring your vision to life? Send me a message and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-zinc-300 flex items-center gap-2">
                <FiUser />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 rounded-xl border border-zinc-700 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-zinc-300 flex items-center gap-2">
                <FiMail />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 rounded-xl border border-zinc-700 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-zinc-300 flex items-center gap-2">
              <FiMessageSquare />
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-zinc-800 rounded-xl border border-zinc-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project, timeline, and budget..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            <FiSend />
            Send Message
          </motion.button>

          <p className="text-center text-zinc-500 text-sm">
            Your message will open your email client. I&apos;ll respond within 24 hours!
          </p>
        </motion.form>
      </div>
    </section>
  );
}
