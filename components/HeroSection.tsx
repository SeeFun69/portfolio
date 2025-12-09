'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/lib/config'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HeroSection() {
  const [imageError, setImageError] = useState(false)
  const { t } = useLanguage()
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-navy-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight"
            >
              {siteConfig.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-navy-700 font-semibold"
            >
              {t.hero.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-navy-900 text-white rounded-2xl font-semibold hover:bg-navy-800 transition-colors text-center shadow-lg hover:shadow-xl"
              >
                {t.hero.contactMe}
              </Link>
              <a
                href={siteConfig.cvFile}
                download
                className="px-8 py-3 bg-white text-navy-900 border-2 border-navy-900 rounded-2xl font-semibold hover:bg-navy-50 transition-colors text-center shadow-lg hover:shadow-xl"
              >
                {t.hero.downloadCV}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-400 to-navy-600 rounded-2xl transform rotate-6"></div>
              <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                {/* GANTI FOTO PROFILE DI SINI */}
                {/* 1. Simpan foto Anda di folder public/ dengan nama profile.jpg */}
                {/* 2. Jika nama file berbeda, ganti "profile.jpg" di bawah ini */}
                {!imageError ? (
                  <img
                    src={siteConfig.profileImage}
                    alt={siteConfig.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-100 to-navy-200">
                    <span className="text-6xl font-bold text-navy-600">
                      {siteConfig.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

