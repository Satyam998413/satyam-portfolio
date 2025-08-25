"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-black/40 backdrop-blur-lg z-50">
      <div className="container flex justify-between items-center py-4">
        <a href="#" className="text-2xl font-bold text-purple-400">
          MyPortfolio
        </a>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-purple-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-black/80 text-center py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-300 hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
