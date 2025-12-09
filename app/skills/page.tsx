'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import SkillCard from '@/components/SkillCard'
import { useLanguage } from '@/contexts/LanguageContext'

const skillsData = [
  {
    categoryKey: 'languages',
    skills: ['Java', 'Go (Golang)', 'SQL'],
    icon: '💻',
  },
  {
    categoryKey: 'frameworks',
    skills: ['Spring Boot', 'jLeaf', 'Laravel'],
    icon: '⚙️',
  },
  {
    categoryKey: 'databases',
    skills: ['PostgreSQL', 'MySQL', 'SQL Query Optimization', 'Hibernate/JPA'],
    icon: '🗄️',
  },
  {
    categoryKey: 'frontend',
    skills: ['PrimeFaces', 'JSF', 'React', 'Next.js', 'Vue.js'],
    icon: '🎨',
  },
  {
    categoryKey: 'tools',
    skills: ['Git', 'Docker', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Redis', 'RabbitMQ'],
    icon: '🛠️',
  },
]

export default function SkillsPage() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.skills.title}
            subtitle={t.skills.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                category={t.skills.categories[skill.categoryKey as keyof typeof t.skills.categories]}
                skills={skill.skills}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
