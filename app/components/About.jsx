"use client";

import React from "react";
import { motion } from "framer-motion";
import { icons } from "../lib/icons";

export default function About() {
  const coreValues = [
    {
      title: "Innovation",
      desc: "Delivering creative and high-performance solutions.",
    },
    {
      title: "Speed",
      desc: "Rapid development and quick iterations for maximum agility.",
    },
    {
      title: "Reliability",
      desc: "Building stable, secure, and scalable systems.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 md:px-20 bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] text-center">
          About Me
        </h1>

        {/* Short Intro */}
        <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto leading-relaxed">
          I am a passionate Full Stack Developer specializing in building
          scalable and innovative solutions using modern technologies like
          React, Next.js, Node.js, and IoT integrations.
        </p>

        {/* Image + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={icons.about_us}
              alt="About Me"
              className="rounded-2xl shadow-2xl w-full max-w-md"
            />
          </div>

          {/* About Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--color-text2)]">
              Who I Am
            </h2>
            <p className="text-gray-400 leading-relaxed">
              I am a MERN stack developer with hands-on experience in building
              dynamic and scalable applications. My focus is on creating
              seamless user experiences and robust backend systems for
              businesses of all sizes.
            </p>
            <p className="text-[var(--color-text2)] leading-relaxed">
              With over 3 years of experience, I have successfully delivered
              IoT-based solutions, web applications, and enterprise platforms
              across industries like healthcare and manufacturing.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-[var(--color-text2)] text-center">
            My Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[var(--color-bg)] p-6 rounded-xl shadow-lg border border-[var(--color-text2)] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[var(--color-text2)]">
                  {value.title}
                </h3>
                <p className="text-gray-300 mt-2">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
