"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../lib/data";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="container py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white/10 hover:bg-white/20 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
