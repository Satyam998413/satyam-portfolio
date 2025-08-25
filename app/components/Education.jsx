"use client";

import { motion } from "framer-motion";
import { educations } from "../lib/data"; // adjust path if needed

export default function Education() {
  return (
    <section id="education" className="container py-12">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="grid gap-6">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-4 rounded-lg"
          >
            <h3 className="font-semibold">{edu.course}</h3>
            <p className="text-sm text-gray-400">{edu.institute}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
