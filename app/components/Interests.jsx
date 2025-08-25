"use client";

import { motion } from "framer-motion";
import { interests } from "../lib/data"; // adjust path if needed

export default function Interests() {
  return (
    <section id="interests" className="container py-12">
      <h2 className="text-2xl font-bold mb-6">Interests</h2>
      <div className="flex flex-wrap gap-4">
        {interests.map((interest, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass px-4 py-2 rounded-full text-sm font-medium"
          >
            {interest}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
