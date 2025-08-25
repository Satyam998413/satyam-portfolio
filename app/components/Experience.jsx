"use client";

import { motion } from "framer-motion";
import { experiences } from "../lib/data"; // adjust path if needed

export default function Experience() {
  return (
    <section id="experience" className="container py-12">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-4 rounded-lg"
          >
            <h3 className="font-semibold">{exp.position}</h3>
            <p className="text-sm text-gray-400">{exp.company}</p>
            <p className="text-sm mt-2">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
