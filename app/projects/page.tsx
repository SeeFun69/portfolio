'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import { useLanguage } from '@/contexts/LanguageContext'

const projects = [
  {
    title: {
      id: 'Enterprise Resource Planning System',
      en: 'Enterprise Resource Planning System',
    },
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'JSF', 'PrimeFaces'],
    problem: {
      id:
        'Sistem legacy dengan performa buruk, eksekusi query lambat, dan kesulitan dalam scaling untuk menangani peningkatan beban pengguna.',
      en:
        'A legacy system with poor performance, slow query execution, and difficulty in scaling to handle increasing user load.',
    },
    solution: {
      id:
        'Mendesain ulang skema database dengan indexing yang tepat, mengoptimalkan query SQL, dan mengimplementasikan arsitektur microservices Spring Boot. Membuat RESTful API dan meningkatkan frontend dengan komponen PrimeFaces.',
      en:
        'Redesigned the database schema with proper indexing, optimized SQL queries, and implemented Spring Boot microservices architecture. Created RESTful APIs and improved frontend with PrimeFaces components.',
    },
    impact: {
      id:
        'Mengurangi waktu eksekusi query sebesar 70%, meningkatkan waktu respons sistem sebesar 60%, dan memungkinkan horizontal scaling untuk mendukung 3x lebih banyak pengguna bersamaan.',
      en:
        'Reduced query execution time by 70%, improved system response time by 60%, and enabled horizontal scaling to support 3x more concurrent users.',
    },
    githubLink: 'https://github.com/rasyid-hidayat/erp-system',
  },
  {
    title: {
      id: 'E-Commerce Backend API',
      en: 'E-Commerce Backend API',
    },
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'RESTful API'],
    problem: {
      id:
        'Kebutuhan sistem backend yang kuat dan scalable untuk menangani transaksi volume tinggi, manajemen inventori, dan pemrosesan pesanan.',
      en:
        'Need for a robust, scalable backend system to handle high-volume transactions, inventory management, and order processing.',
    },
    solution: {
      id:
        'Membangun arsitektur berbasis microservices menggunakan Spring Boot dengan database PostgreSQL. Mengimplementasikan stored procedures untuk logika bisnis yang kompleks, mengoptimalkan query database, dan mengcontainerisasi aplikasi dengan Docker.',
      en:
        'Built a microservices-based architecture using Spring Boot with PostgreSQL database. Implemented stored procedures for complex business logic, optimized database queries, and containerized the application with Docker.',
    },
    impact: {
      id:
        'Berhasil menangani 10.000+ transaksi harian, mengurangi waktu respons API menjadi di bawah 200ms, dan mencapai uptime 99.9%.',
      en:
        'Successfully handles 10,000+ daily transactions, reduced API response time to under 200ms, and achieved 99.9% uptime.',
    },
    githubLink: 'https://github.com/rasyid-hidayat/ecommerce-api',
  },
  {
    title: {
      id: 'Financial Reporting System',
      en: 'Financial Reporting System',
    },
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'SQL Optimization', 'Stored Procedures'],
    problem: {
      id:
        'Laporan keuangan yang kompleks membutuhkan waktu 5-10 menit untuk dihasilkan, menyebabkan keterlambatan dalam pengambilan keputusan bisnis.',
      en:
        'Complex financial reports were taking 5-10 minutes to generate, causing delays in business decision-making.',
    },
    solution: {
      id:
        'Mengoptimalkan query database menggunakan teknik SQL lanjutan, membuat stored procedures yang efisien, dan mengimplementasikan mekanisme caching. Merefaktor reporting engine untuk memproses data secara paralel.',
      en:
        'Optimized database queries using advanced SQL techniques, created efficient stored procedures, and implemented caching mechanisms. Refactored the reporting engine to process data in parallel.',
    },
    impact: {
      id:
        'Waktu pembuatan laporan berkurang dari 5-10 menit menjadi di bawah 30 detik, memungkinkan analisis keuangan real-time dan pengambilan keputusan yang lebih cepat.',
      en:
        'Report generation time reduced from 5-10 minutes to under 30 seconds, enabling real-time financial analysis and faster decision-making.',
    },
    githubLink: 'https://github.com/rasyid-hidayat/financial-reporting',
  },
  {
    title: {
      id: 'API Gateway & Service Mesh',
      en: 'API Gateway & Service Mesh',
    },
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Microservices'],
    problem: {
      id:
        'Beberapa layanan membutuhkan autentikasi terpusat, rate limiting, dan routing permintaan tanpa menciptakan tight coupling.',
      en:
        'Multiple services needed centralized authentication, rate limiting, and request routing without creating tight coupling.',
    },
    solution: {
      id:
        'Mengembangkan API Gateway menggunakan Spring Boot yang menangani autentikasi, routing permintaan, dan load balancing. Terintegrasi dengan PostgreSQL untuk service registry dan mengimplementasikan pola circuit breaker untuk resilience.',
      en:
        'Developed an API Gateway using Spring Boot that handles authentication, request routing, and load balancing. Integrated with PostgreSQL for service registry and implemented circuit breaker pattern for resilience.',
    },
    impact: {
      id:
        'Autentikasi terpusat mengurangi waktu pengembangan sebesar 40%, meningkatkan keandalan sistem dengan automatic failover, dan menyederhanakan manajemen layanan.',
      en:
        'Centralized authentication reduced development time by 40%, improved system reliability with automatic failover, and simplified service management.',
    },
    githubLink: 'https://github.com/rasyid-hidayat/api-gateway',
  },
]

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={typeof project.title === 'string' ? project.title : project.title[language]}
                tools={project.tools}
                problem={typeof project.problem === 'string' ? project.problem : project.problem[language]}
                solution={typeof project.solution === 'string' ? project.solution : project.solution[language]}
                impact={typeof project.impact === 'string' ? project.impact : project.impact[language]}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
