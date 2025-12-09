// Translation files for Indonesian and English

export type Language = 'id' | 'en'

export const translations = {
  id: {
    // Navigation
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      experience: 'Pengalaman',
      contact: 'Kontak',
    },
    // Hero Section
    hero: {
      title: 'Backend & Database Engineer',
      description:
        'Keahlian dalam Java Spring Boot, Golang, PostgreSQL, Optimasi SQL, System Debugging, dan Aplikasi Enterprise.',
      contactMe: 'Hubungi Saya',
      downloadCV: 'Unduh CV',
    },
    // About Page
    about: {
      title: 'Tentang Saya',
      subtitle: 'Backend Developer yang passionate dalam membangun sistem backend yang efisien, scalable, dan mudah dipelihara',
      education: 'Pendidikan',
      educationDegree: 'S1 Pendidikan Teknik Informatika dan Komputer',
      educationGPA: 'IPK 3.37 | 2014 - 2020',
      educationDescription:
        'Selama masa kuliah, saya mempelajari berbagai aspek dalam pengembangan perangkat lunak, mulai dari konsep dasar pemrograman hingga pengembangan aplikasi enterprise. Fokus utama saya adalah pada pengembangan backend dan manajemen database, yang menjadi fondasi kuat untuk karir saya sebagai Backend Developer.',
      aboutMe: 'Tentang Saya',
      aboutMeText1:
        'Saya adalah seorang Backend Developer yang memiliki passion dalam membangun sistem backend yang efisien, scalable, dan mudah dipelihara. Dengan pengalaman lebih dari 3 tahun di berbagai perusahaan teknologi, saya telah terlibat dalam pengembangan aplikasi enterprise yang kompleks, mulai dari sistem ERP hingga aplikasi finansial.',
      aboutMeText2:
        'Keahlian utama saya terletak pada pengembangan backend menggunakan Java Spring Boot dan Go (Golang), dengan fokus pada optimasi performa database PostgreSQL dan MySQL. Saya terbiasa bekerja dengan berbagai teknologi modern seperti Redis untuk caching, RabbitMQ untuk message queuing, dan Docker untuk containerization.',
      aboutMeText3:
        'Selain backend, saya juga memiliki kemampuan dalam pengembangan frontend menggunakan PrimeFaces, JSF, React, dan Next.js. Kombinasi skill ini memungkinkan saya untuk memahami keseluruhan alur pengembangan aplikasi, dari backend hingga frontend integration.',
      skillsCompetence: 'Keahlian & Kompetensi',
      backendDev: 'Backend Development',
      backendDevDesc:
        'Spesialisasi dalam pengembangan aplikasi backend menggunakan Java Spring Boot dan Go (Golang). Berpengalaman membangun RESTful API, mengembangkan modul ERP yang kompleks, dan mengintegrasikan berbagai layanan backend. Terbiasa bekerja dengan framework internal seperti jLeaf berbasis Spring Boot untuk pengembangan aplikasi enterprise.',
      databaseSQL: 'Database & SQL Optimization',
      databaseSQLDesc:
        'Keahlian mendalam dalam desain database PostgreSQL dan MySQL, optimasi query SQL menggunakan EXPLAIN ANALYZE, indexing, dan refactoring. Terbiasa bekerja dengan Hibernate/JPA untuk ORM, serta menulis stored procedures untuk logika bisnis yang kompleks. Fokus pada performance tuning untuk memastikan aplikasi berjalan dengan optimal.',
      systemIntegration: 'System Integration & Debugging',
      systemIntegrationDesc:
        'Terampil dalam melakukan integrasi layanan backend dengan berbagai sistem, debugging permasalahan kompleks, dan optimasi performa sistem. Berpengalaman menggunakan tools seperti Postman untuk API testing, serta melakukan code review untuk memastikan kualitas kode. Terbiasa bekerja dalam tim dengan daily stand-up dan task tracking.',
      fullStack: 'Full Stack Capabilities',
      fullStackDesc:
        'Memiliki kemampuan full stack dengan pengalaman menggunakan PrimeFaces dan JSF untuk pengembangan UI enterprise, serta React dan Next.js untuk aplikasi modern. Kombinasi skill backend dan frontend ini memungkinkan saya untuk memahami keseluruhan alur pengembangan aplikasi dan memastikan integrasi yang seamless.',
      careerJourney: 'Perjalanan Karir',
      careerJourneyText1:
        'Perjalanan karir saya dimulai dari freelance project pada tahun 2021, di mana saya mengembangkan sistem manajemen pondok menggunakan Laravel 8. Pengalaman ini mengajarkan saya pentingnya komunikasi dengan klien dan kemampuan untuk bekerja secara mandiri.',
      careerJourneyText2:
        'Kemudian saya bergabung dengan PT. Infosys Solusi Terpadu pada tahun 2022, di mana saya terlibat dalam pengembangan project BTN Syaria menggunakan Java Spring Boot. Di sini saya belajar pentingnya unit testing dengan JUnit 4 dan Mockito, serta bekerja sama dengan tim machine learning untuk debugging.',
      careerJourneyText3:
        'Di PT FINTEK DIGITAL INDONESIA, saya fokus pada pengembangan API menggunakan Spring Boot dengan teknologi modern seperti RabbitMQ dan Redis. Pengalaman ini memperkuat pemahaman saya tentang message queuing dan caching.',
      careerJourneyText4:
        'Saat ini di PT Solusi Teknologi Sejati, saya mengembangkan berbagai modul ERP yang kompleks, mulai dari modul POS, Inventory, Master, Purchasing, hingga Sales Order. Saya juga mulai mempelajari Go (Golang) untuk project KBPosMobile, yang menunjukkan komitmen saya untuk terus belajar teknologi baru. Pengalaman ini telah mengasah kemampuan saya dalam mengembangkan sistem enterprise yang scalable dan maintainable.',
      commitment: 'Komitmen & Nilai',
      commitmentText:
        'Saya percaya bahwa kode yang baik adalah kode yang mudah dibaca, mudah dirawat, dan mudah diuji. Saya selalu berkomitmen untuk menulis clean code, mengikuti best practices, dan terus belajar teknologi baru. Saya juga menghargai kolaborasi dalam tim, code review yang konstruktif, dan komunikasi yang efektif untuk mencapai tujuan bersama.',
    },
    // Skills Page
    skills: {
      title: 'Keahlian & Keahlian',
      subtitle: 'Kompetensi teknis dalam pengembangan backend, manajemen database, dan operasi sistem',
      categories: {
        languages: 'Bahasa Pemrograman',
        frameworks: 'Framework',
        databases: 'Database',
        frontend: 'Frontend/UI',
        tools: 'Tools & Teknologi',
      },
    },
    // Projects Page
    projects: {
      title: 'Proyek',
      subtitle: 'Menampilkan solusi dunia nyata yang dibangun dengan teknologi modern dan best practices',
      problem: 'Masalah',
      solution: 'Solusi',
      impact: 'Dampak',
      viewGitHub: 'Lihat di GitHub →',
    },
    // Experience Page
    experience: {
      title: 'Pengalaman Profesional',
      subtitle: 'Membangun sistem yang kuat dan memberikan solusi yang berdampak',
      responsibilities: 'Tanggung Jawab:',
      achievements: 'Pencapaian:',
      skillsUsed: 'Keahlian yang Digunakan:',
    },
    // Contact Page
    contact: {
      title: 'Hubungi Saya',
      subtitle: 'Saya akan senang mendengar dari Anda. Kirimkan pesan dan saya akan merespons sesegera mungkin.',
      name: 'Nama',
      email: 'Email',
      message: 'Pesan',
      namePlaceholder: 'Nama Anda',
      emailPlaceholder: 'email.anda@contoh.com',
      messagePlaceholder: 'Pesan Anda...',
      sendMessage: 'Kirim Pesan',
      sending: 'Mengirim...',
      successMessage: 'Terima kasih! Pesan Anda telah berhasil dikirim.',
      errorMessage: 'Terjadi kesalahan. Silakan coba lagi nanti.',
      otherWays: 'Cara Lain untuk Menghubungi Saya',
    },
    // Footer
    footer: {
      quickLinks: 'Tautan Cepat',
      connect: 'Terhubung',
      allRightsReserved: 'Hak cipta dilindungi.',
    },
    // Common
    common: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Telepon',
      website: 'Website',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      title: 'Backend & Database Engineer',
      description:
        'Expertise in Java Spring Boot, Golang, PostgreSQL, SQL Optimization, System Debugging, and Enterprise Applications.',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV',
    },
    // About Page
    about: {
      title: 'About Me',
      subtitle: 'Backend Developer passionate about building efficient, scalable, and maintainable backend systems',
      education: 'Education',
      educationDegree: "Bachelor's Degree in Computer and Informatics Engineering Education",
      educationGPA: 'GPA 3.37 | 2014 - 2020',
      educationDescription:
        'During my studies, I learned various aspects of software development, from basic programming concepts to enterprise application development. My main focus was on backend development and database management, which became a strong foundation for my career as a Backend Developer.',
      aboutMe: 'About Me',
      aboutMeText1:
        'I am a Backend Developer with a passion for building efficient, scalable, and maintainable backend systems. With over 3 years of experience in various technology companies, I have been involved in developing complex enterprise applications, from ERP systems to financial applications.',
      aboutMeText2:
        'My main expertise lies in backend development using Java Spring Boot and Go (Golang), with a focus on optimizing PostgreSQL and MySQL database performance. I am familiar with working with various modern technologies such as Redis for caching, RabbitMQ for message queuing, and Docker for containerization.',
      aboutMeText3:
        'In addition to backend, I also have skills in frontend development using PrimeFaces, JSF, React, and Next.js. This combination of skills allows me to understand the entire application development flow, from backend to frontend integration.',
      skillsCompetence: 'Skills & Competencies',
      backendDev: 'Backend Development',
      backendDevDesc:
        'Specialization in backend application development using Java Spring Boot and Go (Golang). Experienced in building RESTful APIs, developing complex ERP modules, and integrating various backend services. Familiar with working with internal frameworks such as jLeaf based on Spring Boot for enterprise application development.',
      databaseSQL: 'Database & SQL Optimization',
      databaseSQLDesc:
        'Deep expertise in PostgreSQL and MySQL database design, SQL query optimization using EXPLAIN ANALYZE, indexing, and refactoring. Familiar with working with Hibernate/JPA for ORM, as well as writing stored procedures for complex business logic. Focus on performance tuning to ensure applications run optimally.',
      systemIntegration: 'System Integration & Debugging',
      systemIntegrationDesc:
        'Skilled in integrating backend services with various systems, debugging complex issues, and optimizing system performance. Experienced in using tools such as Postman for API testing, as well as conducting code reviews to ensure code quality. Familiar with working in teams with daily stand-ups and task tracking.',
      fullStack: 'Full Stack Capabilities',
      fullStackDesc:
        'Have full stack capabilities with experience using PrimeFaces and JSF for enterprise UI development, as well as React and Next.js for modern applications. This combination of backend and frontend skills allows me to understand the entire application development flow and ensure seamless integration.',
      careerJourney: 'Career Journey',
      careerJourneyText1:
        'My career journey started from a freelance project in 2021, where I developed a management system for a boarding house using Laravel 8. This experience taught me the importance of communication with clients and the ability to work independently.',
      careerJourneyText2:
        'Then I joined PT. Infosys Solusi Terpadu in 2022, where I was involved in developing the BTN Syaria project using Java Spring Boot. Here I learned the importance of unit testing with JUnit 4 and Mockito, as well as collaborating with the machine learning team for debugging.',
      careerJourneyText3:
        'At PT FINTEK DIGITAL INDONESIA, I focused on API development using Spring Boot with modern technologies such as RabbitMQ and Redis. This experience strengthened my understanding of message queuing and caching.',
      careerJourneyText4:
        'Currently at PT Solusi Teknologi Sejati, I develop various complex ERP modules, from POS, Inventory, Master, Purchasing, to Sales Order modules. I also started learning Go (Golang) for the KBPosMobile project, which shows my commitment to continuously learning new technologies. This experience has sharpened my ability to develop scalable and maintainable enterprise systems.',
      commitment: 'Commitment & Values',
      commitmentText:
        'I believe that good code is code that is easy to read, easy to maintain, and easy to test. I am always committed to writing clean code, following best practices, and continuously learning new technologies. I also value team collaboration, constructive code reviews, and effective communication to achieve common goals.',
    },
    // Skills Page
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'Technical competencies across backend development, database management, and system operations',
      categories: {
        languages: 'Languages',
        frameworks: 'Frameworks',
        databases: 'Databases',
        frontend: 'Frontend/UI',
        tools: 'Tools & Technologies',
      },
    },
    // Projects Page
    projects: {
      title: 'Projects',
      subtitle: 'Showcasing real-world solutions built with modern technologies and best practices',
      problem: 'Problem',
      solution: 'Solution',
      impact: 'Impact',
      viewGitHub: 'View on GitHub →',
    },
    // Experience Page
    experience: {
      title: 'Professional Experience',
      subtitle: 'Building robust systems and delivering impactful solutions',
      responsibilities: 'Responsibilities:',
      achievements: 'Achievements:',
      skillsUsed: 'Skills Used:',
    },
    // Contact Page
    contact: {
      title: 'Get In Touch',
      subtitle: "I'd love to hear from you. Send me a message and I'll respond as soon as possible.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'Your message...',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you! Your message has been sent successfully.',
      errorMessage: 'Something went wrong. Please try again later.',
      otherWays: 'Other Ways to Reach Me',
    },
    // Footer
    footer: {
      quickLinks: 'Quick Links',
      connect: 'Connect',
      allRightsReserved: 'All rights reserved.',
    },
    // Common
    common: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      phone: 'Phone',
      website: 'Website',
    },
  },
}

