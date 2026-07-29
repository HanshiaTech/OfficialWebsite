import aiBusinessAnalystImg from '../assets/images/ai_business_analyst_1784800645367.jpg';

export const SITE_CONFIG = {
  companyName: 'HANSHIA TECH',
  establishedYear: '2026',
  location: 'Indonesia',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'hanshiatech@gmail.com',
  phoneNumber: '+62 812-3456-7890',
  telegramUsername: '@hanshiatech',
  telegramUrl: 'https://t.me/hanshiatech',
  socials: {
    github: 'https://github.com/hanshiatech',
    linkedin: 'https://linkedin.com/company/hanshiatech',
    twitter: 'https://x.com/hanshiatech',
    instagram: 'https://instagram.com/hanshiatech'
  },
  vision: {
    en: 'To be the most reliable local software development partner for startups and businesses, leveraging AI efficiency to deliver high-quality, fast, and accessible technology solutions.',
    id: 'Menjadi mitra pengembang perangkat lunak lokal yang paling dapat diandalkan untuk startup dan bisnis Indonesia, memanfaatkan efisiensi AI untuk menghadirkan solusi teknologi berkualitas tinggi, cepat, dan terjangkau.',
    ja: 'AIの効率性を活用して、高品質でスピーディなソフトウェアをローカルのスタートアップやビジネスへ提供する、最も信頼される開発パートナーを目指します。',
    es: 'Ser el socio local de desarrollo de software más confiable para startups y empresas, aprovechando la eficiencia de la IA para brindar soluciones rápidas y de alta calidad.'
  },
  mission: [
    {
      en: 'Deliver secure, highly reliable, and scalable web and mobile software tailored to business goals.',
      id: 'Mengembangkan perangkat lunak web dan mobile yang aman, andal, serta terukur sesuai kebutuhan bisnis.',
      ja: 'ビジネス目標に合わせた、安全でスケーラブルかつ信頼性の高いソフトウェアを提供します。',
      es: 'Entregar software web y móvil seguro, confiable y escalable adaptado a los objetivos comerciales.'
    },
    {
      en: 'Accelerate client growth through modern AI integrations and rapid, agile development cycles.',
      id: 'Mempercepat pertumbuhan klien melalui integrasi AI modern dan siklus pengembangan agile yang cepat.',
      ja: '最新のAI統合と迅速なアジャイル開発サイクルを通じてクライアントの成長を加速させます。',
      es: 'Acelerar el crecimiento del cliente a través de integraciones modernas de IA y ciclos ágiles.'
    },
    {
      en: 'Provide transparent long-term technical consultation, maintenance, and dedicated support.',
      id: 'Memberikan konsultasi teknis transparan, pemeliharaan jangka panjang, dan dukungan berdedikasi.',
      ja: '透明性の高い長期的な技術コンサルティング、メンテナンス、および専任サポートを提供します。',
      es: 'Brindar consulta técnica transparente a largo plazo, mantenimiento y soporte dedicado.'
    }
  ],
  techStack: [
    {
      name: 'React 19 & Vite',
      category: 'Frontend',
      desc: {
        en: 'Lightning-fast client-side rendering & component architecture',
        id: 'Rendering sisi klien ultra-cepat & arsitektur komponen modern'
      }
    },
    {
      name: 'TypeScript',
      category: 'Language',
      desc: {
        en: 'Strict type safety and robust enterprise codebase',
        id: 'Keamanan tipe ketat dan basis kode enterprise yang andal'
      }
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling',
      desc: {
        en: 'Responsive, atomic styling with dark/light theme tokens',
        id: 'Penggaya atomis responsif dengan tema gelap/terang'
      }
    },
    {
      name: 'Node.js & Express',
      category: 'Backend',
      desc: {
        en: 'Scalable RESTful API server with in-memory caching',
        id: 'Server API RESTful terukur dengan caching memori cepat'
      }
    },
    {
      name: 'Gemini AI Integration',
      category: 'Intelligence',
      desc: {
        en: 'AI-assisted automation and intelligent data insights',
        id: 'Otomatisasi dibantu AI dan wawasan data cerdas'
      }
    },
    {
      name: 'PostgreSQL & MySQL',
      category: 'Database',
      desc: {
        en: 'Relational database management with ACID compliance & complex querying',
        id: 'Manajemen basis data relasional dengan kepatuhan ACID & kueri kompleks'
      }
    },
    {
      name: 'Firebase Firestore',
      category: 'Database',
      desc: {
        en: 'Real-time document storage and secure authentication',
        id: 'Penyimpanan dokumen real-time dan autentikasi aman'
      }
    }
  ],
  teamMembers: [
    {
      name: 'Founder & CTO',
      role: {
        en: 'Chief Technology Officer',
        id: 'Chief Technology Officer'
      },
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: {
        en: 'Leading technical engineering strategy, system architecture, and directing product technology innovation at Hanshia Tech.',
        id: 'Pemimpin strategi rekayasa teknis, arsitektur sistem, serta pengarah inovasi teknologi dan produk di Hanshia Tech.'
      }
    },
    {
      name: 'AI Full-Stack Developer',
      role: {
        en: 'AI Autonomous Engineer',
        id: 'Insinyur Otonom AI'
      },
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
      bio: {
        en: 'High-speed AI engine handling end-to-end engineering: Frontend, Backend API, Quality Assurance (QA), and DevOps automation.',
        id: 'Sistem AI berkecepatan tinggi yang menangani rekayasa end-to-end: Frontend, Backend API, Quality Assurance (QA), dan otomatisasi DevOps.'
      }
    },
    {
      name: 'AI Business Analyst',
      role: {
        en: 'AI Strategy & Requirements Specialist',
        id: 'Spesialis Strategi & Analisis Kebutuhan AI'
      },
      image: aiBusinessAnalystImg,
      bio: {
        en: 'Analyzing project specifications, business workflows, market needs, and precisely formulating solution architecture.',
        id: 'Menganalisis spesifikasi proyek, alur bisnis, kebutuhan pasar, dan merumuskan arsitektur solusi secara presisi.'
      }
    },
    {
      name: 'AI UI/UX Designer',
      role: {
        en: 'AI UI/UX & Design System Specialist',
        id: 'Spesialis UI/UX & Design System AI'
      },
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: {
        en: 'Crafting user-centered interfaces, visual typography systems, color aesthetics, and seamless micro-interactions.',
        id: 'Merancang antarmuka berpusat pada pengguna, sistem tipografi visual, estetika warna, dan mikro-interaksi yang intuitif.'
      }
    },
    {
      name: 'AI Support & Operations',
      role: {
        en: 'AI 24/7 Client Success Support',
        id: 'Dukungan Klien & Operasional AI 24/7'
      },
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80',
      bio: {
        en: '24/7 operational companion system ensuring seamless application maintenance and rapid response to client inquiries.',
        id: 'Sistem pendamping operasional 24/7 yang memastikan kelancaran pemeliharaan aplikasi dan responsif terhadap inquiry klien.'
      }
    },
    {
      name: 'AI Sales & Marketing',
      role: {
        en: 'AI Growth & Client Outreach Specialist',
        id: 'Spesialis Pertumbuhan & Pemasaran AI'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
      bio: {
        en: 'Managing proposal communications, digital market analysis, marketing campaigns, and personally reaching out to potential partners.',
        id: 'Mengelola komunikasi penawaran, analisis pasar digital, kampanye pemasaran, dan menjangkau mitra potensial secara personal.'
      }
    }
  ]
};
