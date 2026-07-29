import { Service, WhyUsItem, Project, StatItem } from '../types';

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'custom-web',
    title: {
      en: 'Custom Web Development',
      id: 'Pengembangan Web Kustom',
      ja: 'カスタムWebアプリ開発',
      es: 'Desarrollo Web Personalizado'
    },
    description: {
      en: 'High-quality, responsive, and scalable web applications.',
      id: 'Aplikasi web berkualitas tinggi, responsif, dan dapat ditingkatkan.',
      ja: '高品質でレスポンシブ、拡張可能なWebアプリケーション。',
      es: 'Aplicaciones web de alta calidad, adaptables y escalables.'
    },
    icon: 'Monitor',
    category: 'Web',
    bgGradient: 'from-blue-500/10 to-indigo-500/10'
  },
  {
    id: 'mobile-app',
    title: {
      en: 'Mobile App Development',
      id: 'Pengembangan Aplikasi Seluler',
      ja: 'モバイルアプリ開発',
      es: 'Desarrollo de Apps Móviles'
    },
    description: {
      en: 'Cross-platform mobile apps for iOS and Android.',
      id: 'Aplikasi seluler lintas platform untuk iOS dan Android.',
      ja: 'iOSおよびAndroid向けのクロスプラットフォームアプリ。',
      es: 'Aplicaciones móviles multiplataforma para iOS y Android.'
    },
    icon: 'Smartphone',
    category: 'Mobile',
    bgGradient: 'from-purple-500/10 to-indigo-500/10'
  },
  {
    id: 'saas-product',
    title: {
      en: 'SaaS Product Development',
      id: 'Pengembangan Produk SaaS',
      ja: 'SaaSプロダクト開発',
      es: 'Desarrollo de Productos SaaS'
    },
    description: {
      en: 'End-to-end SaaS development from idea to launch.',
      id: 'Pengembangan SaaS ujung-ke-ujung dari ide hingga peluncuran.',
      ja: 'アイデア出しからリリースまでのエンドツーエンドSaaS開発。',
      es: 'Desarrollo integral de SaaS desde la idea hasta el lanzamiento.'
    },
    icon: 'Cloud',
    category: 'SaaS',
    bgGradient: 'from-sky-500/10 to-blue-500/10'
  },
  {
    id: 'api-integration',
    title: {
      en: 'API Integration',
      id: 'Integrasi API System',
      ja: 'API連携・統合',
      es: 'Integración de API'
    },
    description: {
      en: 'Seamless integration with third-party systems and APIs.',
      id: 'Integrasi mulus dengan sistem dan API pihak ketiga.',
      ja: 'サードパーティ製システムおよびAPIとのシームレスな統合。',
      es: 'Integración fluida con sistemas y API de terceros.'
    },
    icon: 'Plug',
    category: 'Backend',
    bgGradient: 'from-teal-500/10 to-emerald-500/10'
  },
  {
    id: 'maintenance-support',
    title: {
      en: 'Maintenance & Support',
      id: 'Pemeliharaan & Dukungan',
      ja: '保守・運用サポート',
      es: 'Mantenimiento y Soporte'
    },
    description: {
      en: 'Ongoing maintenance, updates, and technical support.',
      id: 'Pemeliharaan berkelanjutan, pembaruan, dan dukungan teknis.',
      ja: '継続的な保守、アップデート、およびテクニカルサポート。',
      es: 'Mantenimiento continuo, actualizaciones y soporte técnico.'
    },
    icon: 'Server',
    category: 'DevOps',
    bgGradient: 'from-amber-500/10 to-orange-500/10'
  },
  {
    id: 'system-modernization',
    title: {
      en: 'System Modernization',
      id: 'Modernisasi Sistem Legacy',
      ja: 'システムレガシー刷新',
      es: 'Modernización de Sistemas'
    },
    description: {
      en: 'Upgrade legacy systems to modern, secure, and efficient solutions.',
      id: 'Tingkatkan sistem lama ke solusi modern, aman, dan efisien.',
      ja: 'レガシーシステムを最新かつ安全で効率的なソリューションへ更新。',
      es: 'Actualice sistemas heredados a soluciones modernas y seguras.'
    },
    icon: 'TrendingUp',
    category: 'Enterprise',
    bgGradient: 'from-pink-500/10 to-rose-500/10'
  }
];

export const INITIAL_WHY_US: WhyUsItem[] = [
  {
    id: 'ai-assisted',
    title: {
      en: 'AI-Assisted Development',
      id: 'Pengembangan Dibantu AI',
      ja: 'AI支援型開発',
      es: 'Desarrollo Asistido por IA'
    },
    description: {
      en: 'We leverage AI tools to accelerate development without compromising quality.',
      id: 'Kami memanfaatkan AI untuk mempercepat pengembangan tanpa mengorbankan kualitas.',
      ja: '品質を損なうことなく開発を加速するためにAIツールを活用します。',
      es: 'Aprovechamos herramientas de IA para acelerar el desarrollo sin comprometer calidad.'
    },
    icon: 'Cpu',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
  },
  {
    id: 'modern-tech',
    title: {
      en: 'Modern Technology',
      id: 'Teknologi Modern & Terbaru',
      ja: '最新のテクノロジー',
      es: 'Tecnología Moderna'
    },
    description: {
      en: 'We use modern, scalable, and proven technologies to build future-ready solutions.',
      id: 'Kami menggunakan teknologi modern, scalable, dan teruji untuk masa depan.',
      ja: '将来にわたって使えるモダンで信頼性の高い技術スタックを採用。',
      es: 'Utilizamos tecnologías modernas y probadas preparadas para el futuro.'
    },
    icon: 'Code2',
    badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
  },
  {
    id: 'scalable-reliable',
    title: {
      en: 'Scalable & Reliable',
      id: 'Scalable & Terpercaya',
      ja: '拡張性と高い信頼性',
      es: 'Escalable y Confiable'
    },
    description: {
      en: 'We build systems that are secure, scalable, and reliable to support your growth.',
      id: 'Sistem yang kami bangun aman, scalable, dan andal untuk bisnis Anda.',
      ja: 'ビジネスの成長を支える、堅牢で拡張性の高いシステムを構築。',
      es: 'Construimos sistemas seguros y escalables para respaldar su crecimiento.'
    },
    icon: 'ShieldCheck',
    badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
  },
  {
    id: 'fast-efficient',
    title: {
      en: 'Fast & Efficient',
      id: 'Cepat & Efisien',
      ja: '迅速かつ効率的',
      es: 'Rápido y Eficiente'
    },
    description: {
      en: 'Agile workflow and best practices ensure faster delivery and consistent quality.',
      id: 'Alur kerja Agile memastikan pengiriman lebih cepat dan kualitas konsisten.',
      ja: 'アジャイルなワークフローとベストプラクティスにより迅速に納品。',
      es: 'Flujos ágiles que garantizan una entrega más rápida y calidad constante.'
    },
    icon: 'Zap',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
  },
  {
    id: 'long-term-partner',
    title: {
      en: 'Long-term Partnership',
      id: 'Kemitraan Jangka Panjang',
      ja: '長期的なパートナーシップ',
      es: 'Socio a Largo Plazo'
    },
    description: {
      en: 'We believe in long-term relationships, support, and continuous improvement.',
      id: 'Kami percaya pada hubungan jangka panjang, dukungan, dan perbaikan berkelanjutan.',
      ja: '継続的なサポートと改善を通じた、長期的な信頼関係を構築します。',
      es: 'Creemos en relaciones a largo plazo, soporte y mejora continua.'
    },
    icon: 'HeartHandshake',
    badgeColor: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'krozingen-trading-journal',
    title: 'Krozingen Advanced Trading Journal and AI Coach',
    description: {
      en: 'SaaS platform for recording your trading journal, simulating challenges, and AI coaching for your trading behavior.',
      id: 'Platform SaaS untuk mencatat jurnal trading, simulasi tantangan, dan coaching AI untuk perilaku trading Anda.',
      ja: 'トレードログの記録、チャレンジシミュレーション、トレード行動のAIコーチングを提供するSaaSプラットフォーム。',
      es: 'Plataforma SaaS para registrar tu diario de trading, simular desafíos y recibir coaching de IA sobre tu comportamiento de trading.'
    },
    tags: ['SaaS', 'Trading', 'AI Coach'],
    category: 'SaaS',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { label: 'Win Rate Gain', value: '+24%' },
      { label: 'Active Traders', value: '15k+' }
    ],
    client: 'Krozingen Capital',
    timeline: '8 Weeks',
    caseStudy: {
      challenge: {
        en: 'Tracking complex multi-asset trades and providing real-time AI behavioral analysis to mitigate emotional trading.',
        id: 'Mengelola transaksi multi-aset yang kompleks serta memberikan analisis perilaku AI real-time untuk mengurangi perdagangan emosional.',
        ja: '複雑なマルチアセットトレードの追跡と、感情的なトレードを軽減するためのリアルタイムAI行動分析を提供。',
        es: 'Seguimiento de operaciones complejas e integración de análisis de comportamiento con IA en tiempo real.'
      },
      solution: {
        en: 'Architected a SaaS trading journal with automated prop firm challenge simulation and Gemini AI behavioral coaching.',
        id: 'Merancang jurnal trading SaaS dengan simulasi tantangan prop firm otomatis dan coaching perilaku Gemini AI.',
        ja: '自動プロップファームチャレンジシミュレーションとGemini AI行動コーチングを備えたSaaSトレードジャーナルを構築。',
        es: 'Diseño de un diario de trading SaaS con simulación de desafíos y coaching conductual con Gemini AI.'
      },
      results: [
        { en: '35% reduction in revenge trading', id: 'Pengurangan 35% dalam revenge trading', ja: 'リベンジトレードが35%減少', es: '35% de reducción en trading por venganza' },
        { en: '4.9/5 satisfaction rating from active traders', id: 'Rating kepuasan 4.9/5 dari trader aktif', ja: 'アクティブトレーダーから4.9/5の高評価', es: 'Calificación de satisfacción de 4.9/5' }
      ],
      technologies: ['React 19', 'TailwindCSS', 'Express API', 'Gemini AI', 'TradingView Charts']
    }
  },
  {
    id: 'custom-erp-system',
    title: 'Custom ERP System',
    description: {
      en: 'Tailored enterprise resource planning system engineered to unify inventory, financial workflows, operations, and HR based on specific client needs.',
      id: 'Sistem perencanaan sumber daya perusahaan (ERP) kustom yang dirancang untuk mengintegrasikan inventaris, alur kerja keuangan, operasional, dan SDM sesuai kebutuhan spesifik klien.',
      ja: 'クライアントの固有ニーズに合わせて在庫、財務ワークフロー、業務運用、人事管理を統合したオーダーメイド型基幹系ERPシステム。',
      es: 'Sistema de planificación de recursos empresariales personalizado para unificar inventario, flujos financieros, operaciones y RR.HH. según las necesidades del cliente.'
    },
    tags: ['Enterprise', 'ERP', 'Custom Solutions'],
    category: 'Enterprise',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { label: 'Efficiency Boost', value: '+40%' },
      { label: 'Process Automation', value: '85%' }
    ],
    client: 'Vanguard Industrial Group',
    timeline: '12 Weeks',
    caseStudy: {
      challenge: {
        en: 'Fragmented operational data across legacy spreadsheets and disconnected departments causing delayed decisions and inventory discrepancies.',
        id: 'Data operasional terfragmentasi di berbagai spreadsheet lama dan departemen terpisah, menyebabkan keterlambatan keputusan dan ketidaksesuaian inventaris.',
        ja: '従来の表計算ソフトと分断された部門間でのデータ断片化により、意思決定の遅延と在庫の不一致が発生。',
        es: 'Datos operativos fragmentados en hojas de cálculo antiguas y departamentos desconectados que causaban retrasos en decisiones y discrepancias de inventario.'
      },
      solution: {
        en: 'Developed a unified, modular Custom ERP System featuring real-time inventory synchronization, automated financial reporting, and role-based workflows tailored to client needs.',
        id: 'Membangun Sistem ERP Kustom modular yang terpadu dengan sinkronisasi inventaris real-time, pelaporan keuangan otomatis, dan alur kerja berbasis peran sesuai kebutuhan klien.',
        ja: 'リアルタイム在庫同期、自動財務レポート、クライアントニーズに合わせた役割ベースのワークフローを備えた統合型カスタムERPを開発。',
        es: 'Desarrollo de un sistema ERP personalizado modular con sincronización de inventario en tiempo real, informes financieros automatizados y flujos de trabajo basados en roles.'
      },
      results: [
        { en: '40% increase in operational productivity', id: 'Peningkatan produktivitas operasional sebesar 40%', ja: '業務生産性が40%向上', es: '40% de aumento en la productividad operativa' },
        { en: '99.8% inventory tracking accuracy', id: 'Akurasi pelacakan inventaris mencapai 99.8%', ja: '在庫追跡精度99.8%達成', es: '99.8% de precisión en el seguimiento de inventario' }
      ],
      technologies: ['React 19', 'TypeScript', 'TailwindCSS', 'Express API', 'PostgreSQL']
    }
  },
  {
    id: 'finance-mobile-app',
    title: 'Finance Mobile App',
    description: {
      en: 'Personal finance management app with budgeting, analytics, and smart insights.',
      id: 'Aplikasi manajemen keuangan pribadi dengan penganggaran, analitik, dan wawasan cerdas.',
      ja: '予算管理、分析、スマートな洞察機能を備えた個人向け金融管理アプリ。',
      es: 'Aplicación de gestión de finanzas personales con presupuestos y análisis.'
    },
    tags: ['Mobile', 'Finance'],
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    metrics: [
      { label: 'App Store Rating', value: '4.9★' },
      { label: 'Monthly Active Users', value: '120k+' }
    ],
    client: 'FinSmart Mobile',
    timeline: '12 Weeks',
    caseStudy: {
      challenge: {
        en: 'Users needed real-time expense classification and biometric secure login.',
        id: 'Pengguna membutuhkan klasifikasi pengeluaran real-time dan login biometrik aman.',
        ja: 'リアルタイムの支出自動分類とセキュリティ生体認証ログインの要求。',
        es: 'Necesidad de clasificación de gastos en tiempo real y autenticación segura.'
      },
      solution: {
        en: 'Cross-platform app featuring AI auto-categorization and Firebase real-time sync.',
        id: 'Aplikasi seluler dengan auto-kategori AI & sinkronisasi real-time Firebase.',
        ja: 'AI自動分類とFirebaseリアルタイム同期を備えたクロスプラットフォームアプリ。',
        es: 'Aplicación multiplataforma con autocategorización por IA y sincronización.'
      },
      results: [
        { en: '120k active monthly downloads', id: '120rb pengunduh aktif bulanan', ja: '月間12万以上の動的アクティブユーザー', es: '120k descargas activas mensuales' },
        { en: 'Zero security compliance breaches', id: 'Nol pelanggaran kepatuhan keamanan', ja: 'セキュリティ規約の違反ゼロ達成', es: 'Cero brechas de seguridad' }
      ],
      technologies: ['React Native / React', 'Firebase Auth', 'Firestore', 'Tailwind', 'AI Engine']
    }
  }
];

export const INITIAL_STATS: StatItem[] = [
  {
    id: 'total-projects',
    label: { en: 'Total Projects', id: 'Total Proyek', ja: '総プロジェクト数', es: 'Proyectos Totales' },
    value: '24',
    change: '+12.5%',
    isPositive: true
  },
  {
    id: 'revenue',
    label: { en: 'Revenue', id: 'Pendapatan', ja: '総収益', es: 'Ingresos' },
    value: '$28,540',
    change: '+8.2%',
    isPositive: true
  },
  {
    id: 'active-clients',
    label: { en: 'Active Clients', id: 'Klien Aktif', ja: 'アクティブ顧客数', es: 'Clientes Activos' },
    value: '18',
    change: '+10.1%',
    isPositive: true
  },
  {
    id: 'tasks-done',
    label: { en: 'Tasks Done', id: 'Tugas Selesai', ja: '完了タスク数', es: 'Tareas Completadas' },
    value: '128',
    change: '+14.3%',
    isPositive: true
  }
];
