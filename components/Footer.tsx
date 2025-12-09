'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300">{t.hero.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.connect}</h4>
            <ul className="space-y-2 text-gray-300">
              {/* Kontak info diambil dari .env file */}
              <li>
                {t.common.email}:{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white underline">
                  {siteConfig.contact.email}
                </a>
              </li>
              {siteConfig.contact.linkedin && (
                <li>
                  {t.common.linkedin}:{' '}
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline"
                  >
                    {siteConfig.contact.linkedin.replace('https://', '')}
                  </a>
                </li>
              )}
              {siteConfig.contact.github && (
                <li>
                  {t.common.github}:{' '}
                  <a
                    href={siteConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline"
                  >
                    {siteConfig.contact.github.replace('https://', '')}
                  </a>
                </li>
              )}
              {siteConfig.contact.phone && (
                <li>
                  {t.common.phone}:{' '}
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white underline">
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {siteConfig.name}. {t.footer.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}

