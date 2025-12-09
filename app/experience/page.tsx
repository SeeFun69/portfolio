'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import Timeline from '@/components/Timeline'
import { getExperience } from '@/lib/experience'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ExperiencePage() {
  const { language, t } = useLanguage()
  // Data experience diambil dari file data/experience.json
  // Edit file tersebut untuk mengubah experience
  const experienceItems = getExperience(language)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.experience.title}
            subtitle={t.experience.subtitle}
          />

          <Timeline items={experienceItems} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
