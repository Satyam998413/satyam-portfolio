"use client";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { personalDetails } from "../lib/data";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } },
          },
          particles: {
            number: { value: 30 },
            color: { value: "#7c3aed" },
            opacity: { value: 0.15 },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 0.6 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="container py-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
                      Hi, I'm <span className="text-brand">{personalDetails.name }</span> —
           {personalDetails.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg text-slate-300"
          >
           {personalDetails.description}
          </motion.p>

          <div className="mt-8 flex gap-4">
            <a href="#projects" className="rounded-md px-4 py-2 glass">
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md px-4 py-2 bg-gradient-to-r from-brand to-cyan-400 text-slate-900 font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
