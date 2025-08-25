"use client";
import { motion } from "framer-motion";

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white text-black rounded-xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2 p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md"
        >
          Visit Project
        </a>
      </motion.div>
    </div>
  );
}
