# HANSHIA TECH - Panduan & Dokumentasi Landing Page

Selamat datang di repositori resmi **HANSHIA TECH** (IT Solutions & Software Development).
Dokumentasi ini dibuat untuk memudahkan Founder dan Tim Pengembang dalam mengelola, mengubah konten, serta menambahkan fitur pada website landing page HANSHIA TECH.

---

## 🏛️ Struktur Operasional & Filosofi

Website ini mencerminkan struktur operasional HANSHIA TECH:
* **5% Founder Strategic Direction**: Penentu arah bisnis, visi, dan pengambilan keputusan utama.
* **95% AI Technical Execution**: Ditenagai oleh Tim AI Spesialis berpengalaman:
  1. **AI Project Manager & Solutions Architect**
  2. **Lead AI Fullstack Developer**
  3. **AI UI/UX Designer & Design System Specialist**
  4. **AI QA & Security Audit Specialist**
  5. **AI 24/7 Client Success Support & Operations**

---

## 📁 Struktur Direktori & Arsitektur (Atomic Design)

Proyek ini menggunakan pola **Atomic Design** yang terorganisir dengan rapi di dalam `/src`:

```
/
├── index.html                      # Entry point HTML & Google Fonts (Outfit & Plus Jakarta Sans)
├── server.ts                       # Server Express backend (Integrasi Gemini AI & Fallback)
├── src/
│   ├── index.css                   # Setup Tailwind CSS v4 & variabel font (--font-display, --font-sans)
│   ├── config/
│   │   └── site.ts                 # 💡 PUSAT PENGATURAN KONTEN (Email, Telegram, Tim, Layanan, Portofolio)
│   ├── i18n/
│   │   └── translations.ts         # Teks terjemahan bilingual (Bahasa Indonesia & English)
│   ├── components/
│   │   ├── atoms/                  # Button, Logo, Badge, Input, ThemeToggle, LanguageSwitcher
│   │   ├── molecules/              # ServiceCard, ProjectCard, StatCard, AIAssistantWidget, dll.
│   │   ├── organisms/              # Navbar, HeroSection, AboutSection, ServicesSection, Footer, LegalModal, dll.
│   │   └── templates/              # LandingPageTemplate (Layout gabungan)
│   └── lib/                        # Utilitas API, Caching, Firebase Firestore & Auth
```

---

## 🛠️ Panduan Mengubah Konten (Content Helper)

### 1. Mengubah Data Utama Perusahaan & Kontak
Buka file `/src/config/site.ts`:
* **Email Kontak**: Ubah properti `contactEmail` (Secara default `hanshiatech@gmail.com`).
* **Telegram**: Ubah `telegramUsername` (`@hanshiatech`) atau `telegramUrl` (`https://t.me/hanshiatech`).
* **Tahun Berdiri & Lokasi**: Disetting di `establishedYear` dan `location`.

### 2. Menambah / Mengubah Anggota Tim AI
Buka `/src/config/site.ts` pada array `teamMembers`:
```typescript
{
  name: 'AI UI/UX Designer',
  role: {
    en: 'AI UI/UX & Design System Specialist',
    id: 'Spesialis UI/UX & Design System AI'
  },
  image: 'https://images.unsplash.com/...',
  bio: {
    en: 'Crafting user-centered interfaces and micro-interactions.',
    id: 'Merancang antarmuka berpusat pada pengguna dan mikro-interaksi.'
  }
}
```

### 3. Mengubah Typografi & Google Fonts
* **HTML Embed**: Terletak di `/index.html` (Google Fonts: `Outfit` & `Plus Jakarta Sans`).
* **Tailwind Theme**: Terletak di `/src/index.css`:
  - `--font-sans`: 'Plus Jakarta Sans'
  - `--font-display`: 'Outfit'

### 4. Mengubah Teks & Bahasa (Bilingual EN/ID)
Buka `/src/i18n/translations.ts` untuk mengedit frasa atau menambah label baru untuk Bahasa Indonesia (`id`) maupun Bahasa Inggris (`en`).

### 5. Mengubah Terms of Service & Privacy Policy
Buka `/src/components/organisms/LegalModal.tsx` untuk mengedit isi syarat dan ketentuan atau kebijakan privasi. Email resmi legal tercantum sebagai `hanshiatech@gmail.com`.

---

## 🚀 Perintah Pembangunan (Development & Build)

* **Menjalankan Dev Server**:
  ```bash
  npm run dev
  ```
  Server berjalan pada `http://localhost:3000`.

* **Linting & Validasi Type**:
  ```bash
  npm run lint
  ```

* **Build untuk Produksi**:
  ```bash
  npm run build
  ```

---

*Hak Cipta © 2026 HANSHIA TECH. Seluruh hak cipta dilindungi undang-undang.*
"# OfficialWebsite" 
