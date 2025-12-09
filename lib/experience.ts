// Experience data loader
// Data diambil dari file JSON untuk mudah di-edit

import experienceData from '@/data/experience.json'
import { Language } from '@/lib/i18n'

export interface ExperienceItem {
  title: string
  company: string
  period: string
  responsibilities: string[]
  achievements?: string[]
  skills: string[]
}

export const getExperience = (language: Language = 'id'): ExperienceItem[] => {
  const data = experienceData as any[]
  return data.map((item) => {
    // If the item has language-specific fields, use them
    if (item[language]) {
      return item[language] as ExperienceItem
    }
    // Otherwise, use the default structure (assumes it's already in the correct language)
    return item as ExperienceItem
  })
}

