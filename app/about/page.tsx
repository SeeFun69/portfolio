'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.about.title}
            subtitle={t.about.subtitle}
          />

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t.about.education}</h3>
              <div className="bg-navy-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">
                  Universitas Sebelas Maret (UNS)
                </h4>
                <p className="text-gray-700">{t.about.educationDegree}</p>
                <p className="text-gray-600 mt-2">
                  {t.about.educationGPA}
                </p>
                <p className="text-gray-600 mt-2">
                  {t.about.educationDescription}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t.about.aboutMe}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.about.aboutMeText1}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.about.aboutMeText2}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.about.aboutMeText3}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t.about.skillsCompetence}</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-navy-600 pl-4">
                  <h4 className="font-semibold text-navy-800 mb-2">{t.about.backendDev}</h4>
                  <p className="text-gray-600">
                    {t.about.backendDevDesc}
                  </p>
                </div>
                <div className="border-l-4 border-navy-600 pl-4">
                  <h4 className="font-semibold text-navy-800 mb-2">{t.about.databaseSQL}</h4>
                  <p className="text-gray-600">
                    {t.about.databaseSQLDesc}
                  </p>
                </div>
                <div className="border-l-4 border-navy-600 pl-4">
                  <h4 className="font-semibold text-navy-800 mb-2">{t.about.systemIntegration}</h4>
                  <p className="text-gray-600">
                    {t.about.systemIntegrationDesc}
                  </p>
                </div>
                <div className="border-l-4 border-navy-600 pl-4">
                  <h4 className="font-semibold text-navy-800 mb-2">{t.about.fullStack}</h4>
                  <p className="text-gray-600">
                    {t.about.fullStackDesc}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t.about.careerJourney}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.about.careerJourneyText1}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.about.careerJourneyText2}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.about.careerJourneyText3}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.about.careerJourneyText4}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{t.about.commitment}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.about.commitmentText}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
