// components/Skills.jsx
'use client'

import { motion } from 'framer-motion'
import { skills } from '../lib/data' // adjust to '../../lib/data' if your components live under app/

export default function Skills() {
  return (
    <section id="skills" className="container py-12">
      <h2 className="text-2xl font-bold">Skills</h2>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {skills.map((s) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="glass p-4 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{s.name}</h3>
              <span className="text-sm text-slate-300">{s.level}%</span>
            </div>

            <div className="w-full mt-3 h-3 bg-white/6 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand to-cyan-400 transition-all duration-700"
                style={{ width: `${s.level}%` }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
