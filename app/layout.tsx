import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/config'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: `${siteConfig.name} — Portfolio`,
  description: `${siteConfig.title} | ${siteConfig.description}`,
  keywords: ['Backend Engineer', 'Database Engineer', 'Java', 'Spring Boot', 'PostgreSQL', 'Portfolio'],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Portfolio`,
    description: `${siteConfig.title} | ${siteConfig.description}`,
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Portfolio`,
    description: `${siteConfig.title} | ${siteConfig.description}`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

