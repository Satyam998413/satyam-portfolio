"use client";
import React from "react";
import { motion } from "framer-motion";
import { blogs } from "../lib/data";


const Blogs = () => {
  return (
    <section id="blogs" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          Latest <span className="text-purple-500">Blogs</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-gray-400 text-sm mb-2">
                  {blog.date} • {blog.time}
                </p>
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <a
                  href={`/blogs/${blog.slug}`}
                  className="inline-block text-purple-400 hover:text-purple-300 font-medium"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
