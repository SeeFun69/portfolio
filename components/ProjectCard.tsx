'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface ProjectCardProps {
  title: string
  tools: string[]
  problem: string
  solution: string
  impact: string
  githubLink?: string
}

export default function ProjectCard({
  title,
  tools,
  problem,
  solution,
  impact,
  githubLink,
}: ProjectCardProps) {
  const { t } = useLanguage()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-navy-900 mb-4">{title}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-navy-800 mb-2">{t.projects.problem}</h4>
          <p className="text-gray-600">{problem}</p>
        </div>

        <div>
          <h4 className="font-semibold text-navy-800 mb-2">{t.projects.solution}</h4>
          <p className="text-gray-600">{solution}</p>
        </div>

        <div>
          <h4 className="font-semibold text-navy-800 mb-2">{t.projects.impact}</h4>
          <p className="text-gray-600">{impact}</p>
        </div>
      </div>

      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-navy-700 hover:text-navy-900 font-semibold"
        >
          {t.projects.viewGitHub}
        </a>
      )}
    </motion.div>
  )
}
