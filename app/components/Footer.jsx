"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialUrls } from "../lib/data";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      console.log("Form Submitted: ", form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[var(--color-bg)] to-black text-[var(--color-text)] pt-20 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-[var(--color-primary)] rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10" id="contact">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 mb-14"
        >
          <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-purple-500 mb-6">
            Let’s Work Together
          </h2>
          <p className="text-center text-gray-300 mb-10 text-lg">
            Have a project in mind or just want to say hi? Fill out the form
            below.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 font-semibold text-center text-xl"
            >
              ✅ Thanks for reaching out! I’ll get back to you soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-gray-200 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border border-gray-500/30 rounded-xl p-4 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-200 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-500/30 rounded-xl p-4 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-200 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full border border-gray-500/30 rounded-xl p-4 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] transition"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, backgroundColor: "#6d28d9" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[var(--color-primary)] to-purple-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message 🚀
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 pt-10 pb-6 flex flex-col md:flex-row items-center justify-between text-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Name | Designed with ❤️ by Me
          </p>
          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            {/* GitHub */}
            <motion.a
              href={socialUrls.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#6d28d9" }}
              className="text-gray-400 hover:text-[var(--color-primary)] transition flex items-center space-x-2"
            >
              <Github size={24} />
              <span className="hidden md:inline">GitHub</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={socialUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#6d28d9" }}
              className="text-gray-400 hover:text-[var(--color-primary)] transition flex items-center space-x-2"
            >
              <Linkedin size={24} />
              <span className="hidden md:inline">LinkedIn</span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:youremail@example.com"
              whileHover={{ scale: 1.2, color: "#6d28d9" }}
              className="text-gray-400 hover:text-[var(--color-primary)] transition flex items-center space-x-2"
            >
              <Mail size={24} />
              <span className="hidden md:inline">Email</span>
            </motion.a>

            <motion.a
              href={socialUrls.contactNumber}
              whileHover={{ scale: 1.2, color: "#6d28d9" }}
              className="text-gray-400 hover:text-[var(--color-primary)] transition flex items-center space-x-2"
            >
              📞 <span className="hidden md:inline">+91 89489 98413</span>
            </motion.a>

            <motion.a
              href={socialUrls.whatsUp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#6d28d9" }}
              className="text-gray-400 hover:text-[var(--color-primary)] transition flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.5 2 2 6.3 2 11.8c0 2.1.7 4 2 5.6L2 22l4.7-1.6c1.6 1 3.4 1.5 5.3 1.5 5.5 0 10-4.3 10-9.8S17.5 2 12 2zm0 17.5c-1.6 0-3.1-.5-4.4-1.3l-.3-.2-2.8 1 1-2.7-.2-.3c-1-1.3-1.5-2.9-1.5-4.5 0-4 3.3-7.3 7.3-7.3s7.3 3.3 7.3 7.3-3.3 7.2-7.4 7.2zm4.1-5.4c-.2-.1-1.1-.5-1.3-.5-.2-.1-.3-.1-.4.1-.1.2-.5.5-.6.6-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-1-.5-.5-.8-1.1-.9-1.3-.1-.2 0-.3.1-.4s.2-.2.3-.4c.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.3 0-.4 0-.1-.4-1-1-1.4-.3-.3-.4-.3-.5-.3h-.4c-.1 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.4c.1.2 1.5 2.3 3.7 3.2 2.2.9 2.2.6 2.6.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1 0-.1-.1-.2-.3-.3z" />
              </svg>
              <span className="hidden md:inline">WhatsApp</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
