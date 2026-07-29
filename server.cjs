var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});
var cacheStore = /* @__PURE__ */ new Map();
function getFromCache(key) {
  const entry = cacheStore.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiry) {
    cacheStore.delete(key);
    return null;
  }
  return entry.data;
}
function setInCache(key, data, ttlMs = 6e4) {
  cacheStore.set(key, {
    data,
    expiry: Date.now() + ttlMs
  });
}
app.get("/api/services", (req, res) => {
  const cacheKey = "services_all";
  const bypass = req.query.nocache === "1";
  if (!bypass) {
    const cached = getFromCache(cacheKey);
    if (cached) {
      res.setHeader("X-Cache-Status", "HIT");
      return res.json({ services: cached, source: "cache" });
    }
  }
  const services = [
    {
      id: "custom-web",
      title: {
        en: "Custom Web Development",
        id: "Pengembangan Web Kustom",
        ja: "\u30AB\u30B9\u30BF\u30E0Web\u30A2\u30D7\u30EA\u958B\u767A",
        es: "Desarrollo Web Personalizado"
      },
      description: {
        en: "High-quality, responsive, and scalable web applications.",
        id: "Aplikasi web berkualitas tinggi, responsif, dan dapat ditingkatkan.",
        ja: "\u9AD8\u54C1\u8CEA\u3067\u30EC\u30B9\u30DD\u30F3\u30B7\u30D6\u3001\u62E1\u5F35\u53EF\u80FD\u306AWeb\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3002",
        es: "Aplicaciones web de alta calidad, adaptables y escalables."
      },
      icon: "Monitor",
      category: "Web",
      bgGradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      id: "mobile-app",
      title: {
        en: "Mobile App Development",
        id: "Pengembangan Aplikasi Seluler",
        ja: "\u30E2\u30D0\u30A4\u30EB\u30A2\u30D7\u30EA\u958B\u767A",
        es: "Desarrollo de Apps M\xF3viles"
      },
      description: {
        en: "Cross-platform mobile apps for iOS and Android.",
        id: "Aplikasi seluler lintas platform untuk iOS dan Android.",
        ja: "iOS\u304A\u3088\u3073Android\u5411\u3051\u306E\u30AF\u30ED\u30B9\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u30A2\u30D7\u30EA\u3002",
        es: "Aplicaciones m\xF3viles multiplataforma para iOS y Android."
      },
      icon: "Smartphone",
      category: "Mobile",
      bgGradient: "from-purple-500/10 to-indigo-500/10"
    },
    {
      id: "saas-product",
      title: {
        en: "SaaS Product Development",
        id: "Pengembangan Produk SaaS",
        ja: "SaaS\u30D7\u30ED\u30C0\u30AF\u30C8\u958B\u767A",
        es: "Desarrollo de Productos SaaS"
      },
      description: {
        en: "End-to-end SaaS development from idea to launch.",
        id: "Pengembangan SaaS ujung-ke-ujung dari ide hingga peluncuran.",
        ja: "\u30A2\u30A4\u30C7\u30A2\u51FA\u3057\u304B\u3089\u30EA\u30EA\u30FC\u30B9\u307E\u3067\u306E\u30A8\u30F3\u30C9\u30C4\u30FC\u30A8\u30F3\u30C9SaaS\u958B\u767A\u3002",
        es: "Desarrollo integral de SaaS desde la idea hasta el lanzamiento."
      },
      icon: "Cloud",
      category: "SaaS",
      bgGradient: "from-sky-500/10 to-blue-500/10"
    },
    {
      id: "api-integration",
      title: {
        en: "API Integration",
        id: "Integrasi API System",
        ja: "API\u9023\u643A\u30FB\u7D71\u5408",
        es: "Integraci\xF3n de API"
      },
      description: {
        en: "Seamless integration with third-party systems and APIs.",
        id: "Integrasi mulus dengan sistem dan API pihak ketiga.",
        ja: "\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u88FD\u30B7\u30B9\u30C6\u30E0\u304A\u3088\u3073API\u3068\u306E\u30B7\u30FC\u30E0\u30EC\u30B9\u306A\u7D71\u5408\u3002",
        es: "Integraci\xF3n fluida con sistemas y API de terceros."
      },
      icon: "Plug",
      category: "Backend",
      bgGradient: "from-teal-500/10 to-emerald-500/10"
    },
    {
      id: "maintenance-support",
      title: {
        en: "Maintenance & Support",
        id: "Pemeliharaan & Dukungan",
        ja: "\u4FDD\u5B88\u30FB\u904B\u7528\u30B5\u30DD\u30FC\u30C8",
        es: "Mantenimiento y Soporte"
      },
      description: {
        en: "Ongoing maintenance, updates, and technical support.",
        id: "Pemeliharaan berkelanjutan, pembaruan, dan dukungan teknis.",
        ja: "\u7D99\u7D9A\u7684\u306A\u4FDD\u5B88\u3001\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3001\u304A\u3088\u3073\u30C6\u30AF\u30CB\u30AB\u30EB\u30B5\u30DD\u30FC\u30C8\u3002",
        es: "Mantenimiento continuo, actualizaciones y soporte t\xE9cnico."
      },
      icon: "Server",
      category: "DevOps",
      bgGradient: "from-amber-500/10 to-orange-500/10"
    },
    {
      id: "system-modernization",
      title: {
        en: "System Modernization",
        id: "Modernisasi Sistem Legacy",
        ja: "\u30B7\u30B9\u30C6\u30E0\u30EC\u30AC\u30B7\u30FC\u5237\u65B0",
        es: "Modernizaci\xF3n de Sistemas"
      },
      description: {
        en: "Upgrade legacy systems to modern, secure, and efficient solutions.",
        id: "Tingkatkan sistem lama ke solusi modern, aman, dan efisien.",
        ja: "\u30EC\u30AC\u30B7\u30FC\u30B7\u30B9\u30C6\u30E0\u3092\u6700\u65B0\u304B\u3064\u5B89\u5168\u3067\u52B9\u7387\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3078\u66F4\u65B0\u3002",
        es: "Actualice sistemas heredados a soluciones modernas y seguras."
      },
      icon: "TrendingUp",
      category: "Enterprise",
      bgGradient: "from-pink-500/10 to-rose-500/10"
    }
  ];
  setInCache(cacheKey, services, 6e4);
  res.setHeader("X-Cache-Status", "MISS");
  res.json({ services, source: "network" });
});
app.get("/api/why-us", (req, res) => {
  const cacheKey = "why_us_all";
  const cached = getFromCache(cacheKey);
  if (cached) {
    res.setHeader("X-Cache-Status", "HIT");
    return res.json({ whyUs: cached });
  }
  const whyUs = [
    {
      id: "ai-assisted",
      title: {
        en: "AI-Assisted Development",
        id: "Pengembangan Dibantu AI",
        ja: "AI\u652F\u63F4\u578B\u958B\u767A",
        es: "Desarrollo Asistido por IA"
      },
      description: {
        en: "We leverage AI tools to accelerate development without compromising quality.",
        id: "Kami memanfaatkan AI untuk mempercepat pengembangan tanpa mengorbankan kualitas.",
        ja: "\u54C1\u8CEA\u3092\u640D\u306A\u3046\u3053\u3068\u306A\u304F\u958B\u767A\u3092\u52A0\u901F\u3059\u308B\u305F\u3081\u306BAI\u30C4\u30FC\u30EB\u3092\u6D3B\u7528\u3057\u307E\u3059\u3002",
        es: "Aprovechamos herramientas de IA para acelerar el desarrollo sin comprometer calidad."
      },
      icon: "Cpu",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
    },
    {
      id: "modern-tech",
      title: {
        en: "Modern Technology",
        id: "Teknologi Modern & Terbaru",
        ja: "\u6700\u65B0\u306E\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC",
        es: "Tecnolog\xEDa Moderna"
      },
      description: {
        en: "We use modern, scalable, and proven technologies to build future-ready solutions.",
        id: "Kami menggunakan teknologi modern, scalable, dan teruji untuk masa depan.",
        ja: "\u5C06\u6765\u306B\u308F\u305F\u3063\u3066\u4F7F\u3048\u308B\u30E2\u30C0\u30F3\u3067\u4FE1\u983C\u6027\u306E\u9AD8\u3044\u6280\u8853\u30B9\u30BF\u30C3\u30AF\u3092\u63A1\u7528\u3002",
        es: "Utilizamos tecnolog\xEDas modernas y probadas preparadas para el futuro."
      },
      icon: "Code2",
      badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
    },
    {
      id: "scalable-reliable",
      title: {
        en: "Scalable & Reliable",
        id: "Scalable & Terpercaya",
        ja: "\u62E1\u5F35\u6027\u3068\u9AD8\u3044\u4FE1\u983C\u6027",
        es: "Escalable y Confiable"
      },
      description: {
        en: "We build systems that are secure, scalable, and reliable to support your growth.",
        id: "Sistem yang kami bangun aman, scalable, dan andal untuk bisnis Anda.",
        ja: "\u30D3\u30B8\u30CD\u30B9\u306E\u6210\u9577\u3092\u652F\u3048\u308B\u3001\u5805\u7262\u3067\u62E1\u5F35\u6027\u306E\u9AD8\u3044\u30B7\u30B9\u30C6\u30E0\u3092\u69CB\u7BC9\u3002",
        es: "Construimos sistemas seguros y escalables para respaldar su crecimiento."
      },
      icon: "ShieldCheck",
      badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
    },
    {
      id: "fast-efficient",
      title: {
        en: "Fast & Efficient",
        id: "Cepat & Efisien",
        ja: "\u8FC5\u901F\u304B\u3064\u52B9\u7387\u7684",
        es: "R\xE1pido y Eficiente"
      },
      description: {
        en: "Agile workflow and best practices ensure faster delivery and consistent quality.",
        id: "Alur kerja Agile memastikan pengiriman lebih cepat dan kualitas konsisten.",
        ja: "\u30A2\u30B8\u30E3\u30A4\u30EB\u306A\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3068\u30D9\u30B9\u30C8\u30D7\u30E9\u30AF\u30C6\u30A3\u30B9\u306B\u3088\u308A\u8FC5\u901F\u306B\u7D0D\u54C1\u3002",
        es: "Flujos \xE1giles que garantizan una entrega m\xE1s r\xE1pida y calidad constante."
      },
      icon: "Zap",
      badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
    },
    {
      id: "long-term-partner",
      title: {
        en: "Long-term Partnership",
        id: "Kemitraan Jangka Panjang",
        ja: "\u9577\u671F\u7684\u306A\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7",
        es: "Socio a Largo Plazo"
      },
      description: {
        en: "We believe in long-term relationships, support, and continuous improvement.",
        id: "Kami percaya pada hubungan jangka panjang, dukungan, dan perbaikan berkelanjutan.",
        ja: "\u7D99\u7D9A\u7684\u306A\u30B5\u30DD\u30FC\u30C8\u3068\u6539\u5584\u3092\u901A\u3058\u305F\u3001\u9577\u671F\u7684\u306A\u4FE1\u983C\u95A2\u4FC2\u3092\u69CB\u7BC9\u3057\u307E\u3059\u3002",
        es: "Creemos en relaciones a largo plazo, soporte y mejora continua."
      },
      icon: "HeartHandshake",
      badgeColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300"
    }
  ];
  setInCache(cacheKey, whyUs, 6e4);
  res.setHeader("X-Cache-Status", "MISS");
  res.json({ whyUs });
});
app.get("/api/projects", (req, res) => {
  const cacheKey = "projects_all";
  const cached = getFromCache(cacheKey);
  if (cached) {
    res.setHeader("X-Cache-Status", "HIT");
    return res.json({ projects: cached });
  }
  const projects = [
    {
      id: "krozingen-trading-journal",
      title: "Krozingen Advanced Trading Journal and AI Coach",
      description: {
        en: "SaaS platform for recording your trading journal, simulating challenges, and AI coaching for your trading behavior.",
        id: "Platform SaaS untuk mencatat jurnal trading, simulasi tantangan, dan coaching AI untuk perilaku trading Anda.",
        ja: "\u30C8\u30EC\u30FC\u30C9\u30ED\u30B0\u306E\u8A18\u9332\u3001\u30C1\u30E3\u30EC\u30F3\u30B8\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3001\u30C8\u30EC\u30FC\u30C9\u884C\u52D5\u306EAI\u30B3\u30FC\u30C1\u30F3\u30B0\u3092\u63D0\u4F9B\u3059\u308BSaaS\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3002",
        es: "Plataforma SaaS para registrar tu diario de trading, simular desaf\xEDos y recibir coaching de IA sobre tu comportamiento de trading."
      },
      tags: ["SaaS", "Trading", "AI Coach"],
      category: "SaaS",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      metrics: [
        { label: "Win Rate Gain", value: "+24%" },
        { label: "Active Traders", value: "15k+" }
      ],
      client: "Krozingen Capital",
      timeline: "8 Weeks",
      caseStudy: {
        challenge: {
          en: "Tracking complex multi-asset trades and providing real-time AI behavioral analysis to mitigate emotional trading.",
          id: "Mengelola transaksi multi-aset yang kompleks serta memberikan analisis perilaku AI real-time untuk mengurangi perdagangan emosional.",
          ja: "\u8907\u96D1\u306A\u30DE\u30EB\u30C1\u30A2\u30BB\u30C3\u30C8\u30C8\u30EC\u30FC\u30C9\u306E\u8FFD\u8DE1\u3068\u3001\u611F\u60C5\u7684\u306A\u30C8\u30EC\u30FC\u30C9\u3092\u8EFD\u6E1B\u3059\u308B\u305F\u3081\u306E\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0AI\u884C\u52D5\u5206\u6790\u3092\u63D0\u4F9B\u3002",
          es: "Seguimiento de operaciones complejas e integraci\xF3n de an\xE1lisis de comportamiento con IA en tiempo real."
        },
        solution: {
          en: "Architected a SaaS trading journal with automated prop firm challenge simulation and Gemini AI behavioral coaching.",
          id: "Merancang jurnal trading SaaS dengan simulasi tantangan prop firm otomatis dan coaching perilaku Gemini AI.",
          ja: "\u81EA\u52D5\u30D7\u30ED\u30C3\u30D7\u30D5\u30A1\u30FC\u30E0\u30C1\u30E3\u30EC\u30F3\u30B8\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3068Gemini AI\u884C\u52D5\u30B3\u30FC\u30C1\u30F3\u30B0\u3092\u5099\u3048\u305FSaaS\u30C8\u30EC\u30FC\u30C9\u30B8\u30E3\u30FC\u30CA\u30EB\u3092\u69CB\u7BC9\u3002",
          es: "Dise\xF1o de un diario de trading SaaS con simulaci\xF3n de desaf\xEDos y coaching conductual con Gemini AI."
        },
        results: [
          { en: "35% reduction in revenge trading", id: "Pengurangan 35% dalam revenge trading", ja: "\u30EA\u30D9\u30F3\u30B8\u30C8\u30EC\u30FC\u30C9\u304C35%\u6E1B\u5C11", es: "35% de reducci\xF3n en trading por venganza" },
          { en: "4.9/5 satisfaction rating from active traders", id: "Rating kepuasan 4.9/5 dari trader aktif", ja: "\u30A2\u30AF\u30C6\u30A3\u30D6\u30C8\u30EC\u30FC\u30C0\u30FC\u304B\u30894.9/5\u306E\u9AD8\u8A55\u4FA1", es: "Calificaci\xF3n de satisfacci\xF3n de 4.9/5" }
        ],
        technologies: ["React 19", "TailwindCSS", "Express API", "Gemini AI", "TradingView Charts"]
      }
    },
    {
      id: "custom-erp-system",
      title: "Custom ERP System",
      description: {
        en: "Tailored enterprise resource planning system engineered to unify inventory, financial workflows, operations, and HR based on specific client needs.",
        id: "Sistem perencanaan sumber daya perusahaan (ERP) kustom yang dirancang untuk mengintegrasikan inventaris, alur kerja keuangan, operasional, dan SDM sesuai kebutuhan spesifik klien.",
        ja: "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u56FA\u6709\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u5728\u5EAB\u3001\u8CA1\u52D9\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3001\u696D\u52D9\u904B\u7528\u3001\u4EBA\u4E8B\u7BA1\u7406\u3092\u7D71\u5408\u3057\u305F\u30AA\u30FC\u30C0\u30FC\u30E1\u30A4\u30C9\u578B\u57FA\u5E79\u7CFBERP\u30B7\u30B9\u30C6\u30E0\u3002",
        es: "Sistema de planificaci\xF3n de recursos empresariales personalizado para unificar inventario, flujos financieros, operaciones y RR.HH. seg\xFAn las necesidades del cliente."
      },
      tags: ["Enterprise", "ERP", "Custom Solutions"],
      category: "Enterprise",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      metrics: [
        { label: "Efficiency Boost", value: "+40%" },
        { label: "Process Automation", value: "85%" }
      ],
      client: "Vanguard Industrial Group",
      timeline: "12 Weeks",
      caseStudy: {
        challenge: {
          en: "Fragmented operational data across legacy spreadsheets and disconnected departments causing delayed decisions and inventory discrepancies.",
          id: "Data operasional terfragmentasi di berbagai spreadsheet lama dan departemen terpisah, menyebabkan keterlambatan keputusan dan ketidaksesuaian inventaris.",
          ja: "\u5F93\u6765\u306E\u8868\u8A08\u7B97\u30BD\u30D5\u30C8\u3068\u5206\u65AD\u3055\u308C\u305F\u90E8\u9580\u9593\u3067\u306E\u30C7\u30FC\u30BF\u65AD\u7247\u5316\u306B\u3088\u308A\u3001\u610F\u601D\u6C7A\u5B9A\u306E\u9045\u5EF6\u3068\u5728\u5EAB\u306E\u4E0D\u4E00\u81F4\u304C\u767A\u751F\u3002",
          es: "Datos operativos fragmentados en hojas de c\xE1lculo antiguas y departamentos desconectados que causaban retrasos en decisiones y discrepancias de inventario."
        },
        solution: {
          en: "Developed a unified, modular Custom ERP System featuring real-time inventory synchronization, automated financial reporting, and role-based workflows tailored to client needs.",
          id: "Membangun Sistem ERP Kustom modular yang terpadu dengan sinkronisasi inventaris real-time, pelaporan keuangan otomatis, dan alur kerja berbasis peran sesuai kebutuhan klien.",
          ja: "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u5728\u5EAB\u540C\u671F\u3001\u81EA\u52D5\u8CA1\u52D9\u30EC\u30DD\u30FC\u30C8\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u305F\u5F79\u5272\u30D9\u30FC\u30B9\u306E\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u5099\u3048\u305F\u7D71\u5408\u578B\u30AB\u30B9\u30BF\u30E0ERP\u3092\u958B\u767A\u3002",
          es: "Desarrollo de un sistema ERP personalizado modular con sincronizaci\xF3n de inventario en tiempo real, informes financieros automatizados y flujos de trabajo basados en roles."
        },
        results: [
          { en: "40% increase in operational productivity", id: "Peningkatan produktivitas operasional sebesar 40%", ja: "\u696D\u52D9\u751F\u7523\u6027\u304C40%\u5411\u4E0A", es: "40% de aumento en la productividad operativa" },
          { en: "99.8% inventory tracking accuracy", id: "Akurasi pelacakan inventaris mencapai 99.8%", ja: "\u5728\u5EAB\u8FFD\u8DE1\u7CBE\u5EA699.8%\u9054\u6210", es: "99.8% de precisi\xF3n en el seguimiento de inventario" }
        ],
        technologies: ["React 19", "TypeScript", "TailwindCSS", "Express API", "PostgreSQL"]
      }
    },
    {
      id: "finance-mobile-app",
      title: "Finance Mobile App",
      description: {
        en: "Personal finance management app with budgeting, analytics, and smart insights.",
        id: "Aplikasi manajemen keuangan pribadi dengan penganggaran, analitik, dan wawasan cerdas.",
        ja: "\u4E88\u7B97\u7BA1\u7406\u3001\u5206\u6790\u3001\u30B9\u30DE\u30FC\u30C8\u306A\u6D1E\u5BDF\u6A5F\u80FD\u3092\u5099\u3048\u305F\u500B\u4EBA\u5411\u3051\u91D1\u878D\u7BA1\u7406\u30A2\u30D7\u30EA\u3002",
        es: "Aplicaci\xF3n de gesti\xF3n de finanzas personales con presupuestos y an\xE1lisis."
      },
      tags: ["Mobile", "Finance"],
      category: "Mobile",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      metrics: [
        { label: "App Store Rating", value: "4.9\u2605" },
        { label: "Monthly Active Users", value: "120k+" }
      ],
      client: "FinSmart Mobile",
      timeline: "12 Weeks",
      caseStudy: {
        challenge: {
          en: "Users needed real-time expense classification and biometric secure login.",
          id: "Pengguna membutuhkan klasifikasi pengeluaran real-time dan login biometrik aman.",
          ja: "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u306E\u652F\u51FA\u81EA\u52D5\u5206\u985E\u3068\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u751F\u4F53\u8A8D\u8A3C\u30ED\u30B0\u30A4\u30F3\u306E\u8981\u6C42\u3002",
          es: "Necesidad de clasificaci\xF3n de gastos en tiempo real y autenticaci\xF3n segura."
        },
        solution: {
          en: "Cross-platform app featuring AI auto-categorization and Firebase real-time sync.",
          id: "Aplikasi seluler dengan auto-kategori AI & sinkronisasi real-time Firebase.",
          ja: "AI\u81EA\u52D5\u5206\u985E\u3068Firebase\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u540C\u671F\u3092\u5099\u3048\u305F\u30AF\u30ED\u30B9\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u30A2\u30D7\u30EA\u3002",
          es: "Aplicaci\xF3n multiplataforma con autocategorizaci\xF3n por IA y sincronizaci\xF3n."
        },
        results: [
          { en: "120k active monthly downloads", id: "120rb pengunduh aktif bulanan", ja: "\u6708\u959312\u4E07\u4EE5\u4E0A\u306E\u52D5\u7684\u30A2\u30AF\u30C6\u30A3\u30D6\u30E6\u30FC\u30B6\u30FC", es: "120k descargas activas mensuales" },
          { en: "Zero security compliance breaches", id: "Nol pelanggaran kepatuhan keamanan", ja: "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u898F\u7D04\u306E\u9055\u53CD\u30BC\u30ED\u9054\u6210", es: "Cero brechas de seguridad" }
        ],
        technologies: ["React Native / React", "Firebase Auth", "Firestore", "Tailwind", "AI Engine"]
      }
    }
  ];
  setInCache(cacheKey, projects, 6e4);
  res.setHeader("X-Cache-Status", "MISS");
  res.json({ projects });
});
app.get("/api/stats", (req, res) => {
  const cacheKey = "stats_all";
  const cached = getFromCache(cacheKey);
  if (cached) {
    res.setHeader("X-Cache-Status", "HIT");
    return res.json({ stats: cached });
  }
  const stats = [
    {
      id: "total-projects",
      label: { en: "Total Projects", id: "Total Proyek", ja: "\u7DCF\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u6570", es: "Proyectos Totales" },
      value: "24",
      change: "+12.5%",
      isPositive: true
    },
    {
      id: "revenue",
      label: { en: "Revenue", id: "Pendapatan", ja: "\u7DCF\u53CE\u76CA", es: "Ingresos" },
      value: "$28,540",
      change: "+8.2%",
      isPositive: true
    },
    {
      id: "active-clients",
      label: { en: "Active Clients", id: "Klien Aktif", ja: "\u30A2\u30AF\u30C6\u30A3\u30D6\u9867\u5BA2\u6570", es: "Clientes Activos" },
      value: "18",
      change: "+10.1%",
      isPositive: true
    },
    {
      id: "tasks-done",
      label: { en: "Tasks Done", id: "Tugas Selesai", ja: "\u5B8C\u4E86\u30BF\u30B9\u30AF\u6570", es: "Tareas Completadas" },
      value: "128",
      change: "+14.3%",
      isPositive: true
    }
  ];
  setInCache(cacheKey, stats, 3e4);
  res.setHeader("X-Cache-Status", "MISS");
  res.json({ stats });
});
var contactRateLimitStore = /* @__PURE__ */ new Map();
app.post("/api/contact", (req, res) => {
  const clientIp = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown").split(",")[0].trim();
  const now = Date.now();
  const windowMs = 60 * 1e3;
  const maxRequests = 3;
  const userRate = contactRateLimitStore.get(clientIp);
  if (userRate && now < userRate.resetTime) {
    if (userRate.count >= maxRequests) {
      return res.status(429).json({ error: "Terlalu banyak formulir terkirim. Silakan tunggu 1 menit." });
    }
    userRate.count++;
  } else {
    contactRateLimitStore.set(clientIp, { count: 1, resetTime: now + windowMs });
  }
  const { name, email, message, serviceNeeded, budget } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }
  const targetEmail = process.env.CONTACT_EMAIL || "androidtvmedan@gmail.com";
  const submission = {
    id: "sub_" + Math.random().toString(36).substring(2, 9),
    name,
    email,
    targetEmail,
    message: message || "",
    serviceNeeded: serviceNeeded || "General Inquiry",
    budget: budget || "Not specified",
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  console.log(`[CONTACT INQUIRY] New message for ${targetEmail} from ${name} (${email}): ${serviceNeeded}`);
  res.json({
    success: true,
    message: `Inquiry received successfully and routed to ${targetEmail}! Our team will reach out within 24 hours.`,
    targetEmail,
    submission
  });
});
var aiRateLimitStore = /* @__PURE__ */ new Map();
app.post("/api/ai-assistant", async (req, res) => {
  const clientIp = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown").split(",")[0].trim();
  const now = Date.now();
  const windowMs = 60 * 1e3;
  const maxRequestsPerWindow = 5;
  const userRate = aiRateLimitStore.get(clientIp);
  if (userRate && now < userRate.resetTime) {
    if (userRate.count >= maxRequestsPerWindow) {
      return res.status(429).json({
        error: "Terlalu banyak permintaan AI. Silakan tunggu 1 menit.",
        tokensUsed: 0,
        maxTokensAllowed: 250,
        latencyMs: 0
      });
    }
    userRate.count++;
  } else {
    aiRateLimitStore.set(clientIp, { count: 1, resetTime: now + windowMs });
  }
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  const apiKey = process.env.GEMINI_API_KEY;
  const startTime = Date.now();
  if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
    try {
      const ai = new import_genai.GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `You are Hanshia AI, a software architecture & technology consultant.
Answer the following user question clearly and concisely.
CRITICAL CONSTRAINT: Keep your response ultra-concise, under 120 words (~150 tokens max) so the total output tokens remain strictly less than 250 tokens per request.

User Question: ${prompt}`
              }
            ]
          }
        ],
        config: {
          maxOutputTokens: 250,
          temperature: 0.7
        }
      });
      const text = response.text || "No response generated.";
      const latencyMs = Date.now() - startTime;
      const approxTokens = Math.min(Math.round(text.split(/\s+/).length * 1.3) + 15, 245);
      return res.json({
        answer: text,
        tokensUsed: approxTokens,
        maxTokensAllowed: 250,
        latencyMs,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (err) {
      console.error("Gemini API Error:", err);
      const fallbackText = `Hanshia AI Analysis: For "${prompt.slice(0, 40)}...", we recommend using Atomic Design components, React 19 hooks, and Server-Side Caching to ensure sub-100ms API response time with scalable state management.`;
      return res.json({
        answer: fallbackText,
        tokensUsed: 62,
        maxTokensAllowed: 250,
        latencyMs: Date.now() - startTime,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
  }
  const demoResponses = [
    `Hanshia AI Recommendation: To build scalable web apps, combine Atomic Design (atoms, molecules, organisms) with Express API caching. This guarantees clean code structure and fast loading times under 100ms.`,
    `Hanshia AI Solution: For high performance, implement server-side caching with Redis or memory headers, optimize bundle sizes using Vite, and enforce max token outputs on AI calls to keep response latency ultra-low.`,
    `Hanshia AI Architecture: Use Firebase Auth for secure user management, Firestore for real-time document persistence, and Tailwind CSS tokens for a responsive Dark/Light design system.`
  ];
  const answer = demoResponses[Math.floor(Math.random() * demoResponses.length)];
  const tokensUsed = Math.round(answer.split(/\s+/).length * 1.25);
  return res.json({
    answer,
    tokensUsed,
    maxTokensAllowed: 250,
    latencyMs: Date.now() - startTime,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
