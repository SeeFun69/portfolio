'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'skills', href: '/skills' },
  { key: 'projects', href: '/projects' },
  { key: 'experience', href: '/experience' },
  { key: 'contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-navy-900">
            MRH
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </Link>
            ))}
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 bg-navy-100 text-navy-700 rounded-lg font-medium hover:bg-navy-200 transition-colors text-sm"
              aria-label="Toggle language"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 bg-navy-100 text-navy-700 rounded-lg font-medium hover:bg-navy-200 transition-colors text-sm"
              aria-label="Toggle language"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>
            <button
              className="text-navy-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block text-navy-700 hover:text-navy-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

