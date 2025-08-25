"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const MyCV = () => {
  const cvLink = "/Satyam_FullStackDeveloper_CV.pdf"; // Put your CV file in the public folder

  return (
    <section className="w-full py-20 bg-[var(--color-bg)] text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-[var(--color-bg2)] rounded-2xl shadow-2xl p-10 border border-[var(--color-text2)]"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-[var(--color-primary)] mb-4"
        >
          Download My CV
        </motion.h2>
        <p className="text-[var(--color-text2)] text-lg mb-8">
          Get a detailed overview of my experience, skills, and projects by downloading my CV.
        </p>
        <motion.a
          href={cvLink}
          download="Satyam_FullStackDeveloper_CV.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] rounded-full shadow-xl text-lg font-semibold text-white transition duration-300"
        >
          <Download className="w-5 h-5" />
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default MyCV;
