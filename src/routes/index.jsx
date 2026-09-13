import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portrait from "@/assets/portrait.jpg";
import projectGeminiAi from "@/assets/project-gemini-ai.jpg";
import projectCarRental from "@/assets/project-car-rental.jpg";
import projectSaritoko from "@/assets/project-saritoko.jpg";
import projectTaskDashboard from "@/assets/project-task-dashboard.jpg";
import projectTaskApi from "@/assets/project-task-api.jpg";

import {
  Code2,
  Database,
  Layout,
  Server,
  Sparkles,
  Mail,
  Phone,
  CheckCircle2,
  Copy,
  Check,
  GraduationCap,
  Briefcase,
  Terminal,
  Cpu,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  MapPin,
  Menu,
  X,
  Laptop,
  Bot
} from "lucide-react";

function GithubIcon({ className = "size-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rizky Fahmi — Full Stack Developer | SMKN 1 Kepanjen" },
      {
        name: "description",
        content:
          "Portfolio resmi Rizky Fahmi Budiartu Putra, Full Stack Developer & Siswa RPL SMKN 1 Kepanjen, Malang. Spesialis React, TypeScript, NestJS, Prisma ORM, dan MySQL.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Rizky Fahmi — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer & siswa RPL SMKN 1 Kepanjen — merancang dan membangun aplikasi web modern, skalabel, dan berkinerja tinggi.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rizky Fahmi — Full Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Full Stack Developer & siswa RPL SMKN 1 Kepanjen, Malang.",
      },
    ],
  }),
  component: Index,
});

const projectsData = [
  {
    id: "gemini-chatbot",
    category: "AI & Machine Learning",
    title: "Gemini AI — Conversational Assistant",
    subtitle: "Next-Gen AI Chatbot & Context Engine",
    description:
      "Aplikasi chatbot AI cerdas bertenaga Google Gemini GenAI SDK (@google/genai) dengan backend NestJS 11 modular dan antarmuka web interaktif React 19. Dilengkapi kapabilitas percakapan multi-turn real-time, rendering Markdown, serta streaming response.",
    image: projectGeminiAi,
    tags: ["NestJS", "@google/genai", "React 19", "TypeScript", "Vite", "AI Integration"],
    features: [
      "Integrasi resmi Google Gemini GenAI SDK untuk respons cerdas & dialog multi-turn",
      "Arsitektur server NestJS modular dengan manajemen API key & CORS yang aman",
      "Antarmuka chat modern dengan bubble chat responsif dan code syntax highlighting",
    ],
    github: "https://github.com/rizkyfahmi",
    featured: true,
  },
  {
    id: "autorent",
    category: "Full Stack & Web",
    title: "AutoRent — Car Rental Booking App",
    subtitle: "Full Stack Fleet & Online Reservation System",
    description:
      "Aplikasi web full stack pemesanan dan penyewaan kendaraan dengan antarmuka interaktif React 19 + Tailwind CSS dan backend REST API Express.js. Dilengkapi katalog armada, filter tipe mobil, kalkulator sewa otomatis, serta animasi responsif.",
    image: projectCarRental,
    tags: ["React 19", "Node.js", "Express.js", "Tailwind CSS v4", "REST API", "Motion"],
    features: [
      "Katalog armada interaktif dengan filter tipe, kapasitas, harga, & ketersediaan",
      "Kalkulator tarif sewa dinamis dengan alur checkout reservasi terstruktur",
      "Arsitektur client-server terpisah (React 19 SPA + Express REST API Backend)",
    ],
    github: "https://github.com/rizkyfahmi",
    featured: true,
  },
  {
    id: "nest-ecommerce",
    category: "Full Stack & Web",
    title: "NestCommerce — E-Commerce & Support Ticket",
    subtitle: "Enterprise E-Commerce & Ticket Management",
    description:
      "Aplikasi e-commerce komprehensif berbasis NestJS & React dengan otentikasi JWT, sistem peran (Admin & User), katalog produk, kategori, wishlist, keranjang belanja, checkout order, review produk, serta modul support ticket terintegrasi.",
    image: projectSaritoko,
    tags: ["NestJS", "React", "Prisma ORM", "TypeScript", "Tailwind CSS", "JWT Auth", "Swagger"],
    features: [
      "Arsitektur REST API modular lengkap (Auth, Admin, Product, Cart, Order, Review, Ticket)",
      "Proteksi endpoint dengan Passport JWT Strategy, bcrypt hashing, dan DTO Class Validator",
      "Integrasi Prisma ORM, file upload Multer, dan dokumentasi interaktif Swagger / OpenAPI",
    ],
    github: "https://github.com/rizkyfahmi/E-Commerce",
    demo: "https://e-commerce-six-theta-63.vercel.app",
    featured: true,
  },
  {
    id: "task-management",
    category: "Full Stack & Web",
    title: "TaskFlow — Task Management System",
    subtitle: "Full Stack Task Tracker & Productivity Dashboard",
    description:
      "Sistem manajemen tugas produktivitas terpadu dengan backend RESTful NestJS dan antarmuka modern React 19 + TypeScript + Tailwind CSS v4. Mendukung pemantauan status, pembuatan, dan pengeditan tugas secara responsif.",
    image: projectTaskDashboard,
    tags: ["NestJS", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma ORM", "Axios"],
    features: [
      "Dashboard antarmuka dinamis dengan form interaktif & manipulasi data real-time",
      "Integrasi API client Axios ke backend NestJS dengan filter status task",
      "Desain modern responsif dengan Tailwind CSS v4 & sistem notifikasi yang intuitif",
    ],
    github: "https://github.com/rizkyfahmi/task-management",
    featured: false,
  },
  {
    id: "task-app",
    category: "Backend & REST API",
    title: "NestJS Task CRUD Web Service & Client",
    subtitle: "Modular REST API Engine & Interactive Client",
    description:
      "Layanan web service REST API modular teroptimasi untuk manajemen lifecycle data task, dilengkapi ParseIntPipe parameter validation, Service/Controller layer yang rapi dengan Prisma ORM, serta client web interaktif.",
    image: projectTaskApi,
    tags: ["NestJS", "Prisma ORM", "TypeScript", "RESTful API", "React", "Vite"],
    features: [
      "RESTful endpoint CRUD lengkap dengan DTO data validation & pipe handling",
      "Koneksi database terstruktur dan efisien dengan Prisma ORM Client",
      "Arsitektur scalable berstandar NestJS enterprise & alur interaksi API yang rapi",
    ],
    github: "https://github.com/rizkyfahmi",
    featured: false,
  },
];

const skillCategories = [
  {
    category: "Front-End Development",
    icon: Layout,
    color: "from-blue-500 to-cyan-400",
    borderGlow: "border-blue-500/30 group-hover:border-blue-400",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Vite", "TanStack Router"],
    desc: "Membangun antarmuka web interaktif yang cepat, aksesibel, dan responsif di berbagai perangkat.",
  },
  {
    category: "Back-End & REST API",
    icon: Server,
    color: "from-sky-400 to-blue-600",
    borderGlow: "border-sky-500/30 group-hover:border-sky-400",
    badgeBg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    skills: ["NestJS", "Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Swagger / OpenAPI", "DTO & Validation"],
    desc: "Mengembangkan logika server yang modular, aman, terstruktur rapi, dan mudah di-maintain.",
  },
  {
    category: "Database & ORM",
    icon: Database,
    color: "from-cyan-400 to-teal-500",
    borderGlow: "border-cyan-500/30 group-hover:border-cyan-400",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    skills: ["MySQL", "Prisma ORM", "Relational Modeling", "CRUD Operations", "Query Optimization", "Data Migrations"],
    desc: "Merancang skema basis data relasional yang efisien, konsisten, serta bebas redudansi.",
  },
  {
    category: "Workflow & Tools",
    icon: Terminal,
    color: "from-indigo-400 to-blue-500",
    borderGlow: "border-indigo-500/30 group-hover:border-indigo-400",
    badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    skills: ["Git & GitHub", "VS Code", "Postman API Client", "NPM / PNPM", "Responsive Debugging", "Linux / Windows Dev"],
    desc: "Penerapan version control yang disiplin, testing endpoint, dan alur kerja kolaboratif.",
  },
];

const statsData = [
  {
    icon: GraduationCap,
    label: "Pendidikan & Jurusan",
    value: "SMKN 1 Kepanjen",
    detail: "Rekayasa Perangkat Lunak (RPL)",
  },
  {
    icon: Briefcase,
    label: "Status Kesiapan",
    value: "Siap PKL / Magang",
    detail: "Tersedia untuk Industri & Proyek",
  },
  {
    icon: Cpu,
    label: "Teknologi Utama",
    value: "React & NestJS",
    detail: "Fleksibel & Adaptif Perkembangan Tech",
  },
  {
    icon: MapPin,
    label: "Lokasi Domisili",
    value: "Malang, Jatim",
    detail: "Siap On-site / Remote Work",
  },
];

const servicesData = [
  {
    icon: Laptop,
    title: "Full Stack Web Application",
    description:
      "Pengembangan aplikasi web end-to-end dari perancangan database, API server yang stabil, hingga front-end responsif yang siap pakai.",
    highlight: "React + NestJS + MySQL",
  },
  {
    icon: Server,
    title: "RESTful API Development",
    description:
      "Perancangan endpoint API yang terstruktur dengan standar REST, validasi data otomatis, autentikasi aman, dan dokumentasi Swagger.",
    highlight: "NestJS / Express + Prisma",
  },
  {
    icon: Database,
    title: "Database Design & CRUD System",
    description:
      "Implementasi arsitektur database relasional MySQL yang terstruktur dan sistem manajemen data (CRUD) dengan performa andal.",
    highlight: "MySQL & Relational Modeling",
  },
  {
    icon: Layout,
    title: "Modern Front-End & Responsive UI",
    description:
      "Transformasi desain UI menjadi kode antarmuka web modern dengan Tailwind CSS dan React yang dinamis, ringan, dan ramah mobile.",
    highlight: "React + Tailwind CSS",
  },
];

function Index() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filterCategories = ["Semua", "Full Stack & Web", "AI & Machine Learning", "Backend & REST API"];

  const filteredProjects =
    activeFilter === "Semua"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rzkyfhm@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#080c15] font-sans text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-200">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-600/15 via-sky-500/10 to-transparent blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute top-[35%] -left-[200px] w-[500px] h-[500px] bg-blue-700/10 blur-[140px] rounded-full" />
        <div className="absolute top-[65%] -right-[200px] w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Floating Navbar */}
      <header className="sticky top-0 z-50 px-4 pt-4 sm:pt-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3 border border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/60">
          <a
            href="#beranda"
            className="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
          >
            <div className="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20">
              <div className="flex size-full items-center justify-center rounded-[11px] bg-[#0b101d] transition-colors group-hover:bg-opacity-80">
                <span className="font-display font-extrabold text-sm tracking-tight text-white">
                  RF
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-slate-100 tracking-tight group-hover:text-sky-300 transition-colors">
                Rizky Fahmi
              </span>
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 md:flex bg-slate-950/60 p-1 rounded-xl border border-slate-800/60">
            <a
              href="#beranda"
              className="rounded-lg px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              Beranda
            </a>
            <a
              href="#karya"
              className="rounded-lg px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              Proyek
            </a>
            <a
              href="#tentang"
              className="rounded-lg px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              Tentang
            </a>
            <a
              href="#keahlian"
              className="rounded-lg px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              Keahlian
            </a>
            <a
              href="#layanan"
              className="rounded-lg px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              Layanan
            </a>
            <a
              href="#kontak"
              className="rounded-lg px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
            >
              Kontak
            </a>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="https://wa.me/6282338479390?text=Halo%20Rizky%20Fahmi,%20saya%20tertarik%20dengan%20portfolio%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:brightness-110 active:scale-95"
            >
              <Phone className="size-3.5" />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex md:hidden size-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 md:hidden rounded-2xl bg-slate-900/95 p-4 border border-slate-800 backdrop-blur-2xl shadow-2xl space-y-2">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              Beranda
            </a>
            <a
              href="#karya"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              Proyek & Karya
            </a>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              Tentang Saya
            </a>
            <a
              href="#keahlian"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              Keahlian & Tech Stack
            </a>
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              Layanan
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              Kontak
            </a>
            <div className="pt-2 border-t border-slate-800">
              <a
                href="https://wa.me/6282338479390?text=Halo%20Rizky%20Fahmi,%20saya%20tertarik%20dengan%20portfolio%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md"
              >
                <Phone className="size-3.5" />
                <span>WhatsApp: 082338479390</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="beranda" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section className="pt-10 pb-16 sm:pt-16 sm:pb-24">
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
            {/* Left Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-slate-900/90 px-4 py-1.5 text-xs font-medium text-slate-300 border border-slate-700/80 shadow-inner backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-slate-200 font-semibold tracking-wide">
                  Siswa RPL SMKN 1 Kepanjen
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-medium">Siap PKL & Proyek Web</span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                Membangun Aplikasi Web{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
                  Modern
                </span>
                ,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">
                  Skalabel
                </span>{" "}
                & Berkinerja Tinggi.
              </h1>

              {/* Bio Subtitle */}
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-slate-300 sm:text-lg mx-auto lg:mx-0 font-normal">
                Halo, saya <strong className="text-white font-semibold">Rizky Fahmi Budiartu Putra</strong> — Full Stack Developer & siswa RPL SMKN 1 Kepanjen, Malang. Berfokus utama pada ekosistem <span className="text-sky-300 font-medium">React</span> dan <span className="text-sky-300 font-medium">NestJS</span>, dengan mindset yang fleksibel, cepat belajar, serta siap mengikuti perkembangan teknologi web modern.
              </p>

              {/* CTA Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
                <a
                  href="#karya"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:shadow-blue-500/50 hover:brightness-110 active:scale-95"
                >
                  <span>Jelajahi Proyek</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://wa.me/6282338479390?text=Halo%20Rizky%20Fahmi,%20saya%20tertarik%20bekerja%20sama%20atau%20mendiskusikan%20peluang%20PKL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900/90 px-5 py-3.5 text-sm font-semibold text-slate-200 border border-slate-700/80 transition-all duration-200 hover:bg-slate-800 hover:border-slate-600 hover:text-white active:scale-95"
                >
                  <Phone className="size-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900/90 px-4 py-3.5 text-sm font-medium text-slate-300 border border-slate-700/80 transition-all duration-200 hover:bg-slate-800 hover:text-white active:scale-95 cursor-pointer"
                  title="Salin alamat email"
                >
                  {copied ? (
                    <>
                      <Check className="size-4 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold text-xs">Email Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="size-4 text-sky-400" />
                      <span className="text-xs">rzkyfhm@gmail.com</span>
                      <Copy className="size-3 text-slate-400" />
                    </>
                  )}
                </button>

                <a
                  href="https://github.com/rizkyfahmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center size-12 rounded-xl bg-slate-900/90 text-slate-300 border border-slate-700/80 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="size-5" />
                </a>
              </div>

              {/* Mini Tech Badge Pills */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1.5">
                  <Zap className="size-3.5 text-sky-400" /> Core Stack:
                </span>
                {["React", "TypeScript", "NestJS", "Prisma ORM", "MySQL", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-lg bg-slate-900/80 px-2.5 py-1 text-xs font-mono font-medium text-sky-300 border border-slate-800 hover:border-sky-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Hero Portrait with Azure Glow Harmonization */}
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-88 shrink-0">
              {/* Outer Blue Aura Mesh matching the photo's cyan-blue backdrop */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/40 via-sky-500/30 to-cyan-400/20 blur-2xl -z-10 animate-pulse-slow" />
              
              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-3 -right-3 z-20 animate-float-slow">
                <div className="flex items-center gap-2 rounded-xl bg-slate-900/90 px-3 py-2 border border-blue-500/40 backdrop-blur-md shadow-xl shadow-blue-500/10">
                  <div className="flex size-6 items-center justify-center rounded-lg bg-blue-500/20 text-sky-400">
                    <Code2 className="size-3.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Role</p>
                    <p className="text-xs font-bold text-white">Full Stack Dev</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 z-20 animate-float-reverse">
                <div className="flex items-center gap-2.5 rounded-xl bg-slate-900/90 px-3.5 py-2 border border-cyan-500/40 backdrop-blur-md shadow-xl shadow-cyan-500/10">
                  <div className="flex size-6 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
                    <GraduationCap className="size-3.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Jurusan</p>
                    <p className="text-xs font-bold text-white">RPL SMKN 1 Kepanjen</p>
                  </div>
                </div>
              </div>

              {/* Main Portrait Frame */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-blue-500/30 bg-gradient-to-b from-slate-800 to-[#0b101d] p-1.5 shadow-2xl shadow-blue-900/40">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.35rem] bg-[#0b101d]">
                  <img
                    src={portrait}
                    alt="Rizky Fahmi Budiartu Putra - Full Stack Developer SMKN 1 Kepanjen"
                    width={762}
                    height={1024}
                    className="size-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle inner gradient overlay to blend perfectly with dark UI */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c15]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom portrait pill */}
                  <div className="absolute bottom-3 inset-x-3 text-center">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-200 border border-slate-700/80 backdrop-blur-md">
                      <span className="size-2 rounded-full bg-sky-400" />
                      <span>Rizky Fahmi Budiartu Putra</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK STATS & HIGHLIGHTS BENTO */}
        <section className="py-6 sm:py-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {statsData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-slate-900/60 p-5 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500/10 text-sky-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Icon className="size-4" />
                    </div>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold text-white tracking-tight">
                    {stat.value}
                  </h2>
                  <p className="mt-1 text-xs text-slate-400 font-medium">
                    {stat.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED PROJECTS (KARYA & PROYEK) */}
        <section id="karya" className="scroll-mt-24 py-16 sm:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                <Sparkles className="size-3.5" />
                <span>Portofolio & Karya Pilihan</span>
              </div>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Proyek Aplikasi & Rekayasa Web
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-xl">
                Koleksi implementasi nyata meliputi aplikasi full stack, backend REST API terstruktur, hingga antarmuka pengguna interaktif.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === cat
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div>
                  {/* Project Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                    
                    {/* Category pill on top of image */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center rounded-lg bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-sky-300 border border-slate-700/80 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 rounded-lg bg-blue-600/90 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                          <Zap className="size-3" /> Unggulan
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-5">
                    <p className="text-xs font-semibold text-slate-400">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key features */}
                    <div className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-3">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="size-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tech tags & Action link */}
                <div className="p-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] font-mono text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      <GithubIcon className="size-3.5" />
                      <span>Lihat Kode</span>
                    </a>
                    <a
                      href={project.demo || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors group-hover:translate-x-0.5"
                    >
                      <span>{project.demo ? "Live Demo" : "Detail Proyek"}</span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT ME & JOURNEY (TENTANG & PENDIDIKAN) */}
        <section id="tentang" className="scroll-mt-24 py-16 sm:py-20 border-t border-slate-800/80">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left Bio Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                <GraduationCap className="size-3.5" />
                <span>Profil & Latar Belakang</span>
              </div>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Dedikasi untuk Membangun Solusi Perangkat Lunak
              </h2>
              
              <div className="mt-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Saya adalah siswa aktif di jurusan <strong className="text-white">Rekayasa Perangkat Lunak (RPL) SMKN 1 Kepanjen</strong>, Kabupaten Malang. Sejak awal menggeluti dunia coding, saya memiliki rasa ingin tahu yang besar terhadap bagaimana sebuah sistem web bekerja secara menyeluruh dari sisi logika server hingga interaksi visual di sisi pengguna.
                </p>
                <p>
                  Meskipun fokus utama dan keahlian saya bertumpu pada ekosistem <strong className="text-sky-300">React & NestJS</strong> (didukung TypeScript, Prisma ORM, dan MySQL), saya memiliki pola pikir yang sangat fleksibel. Saya selalu antusias mengikuti perkembangan dunia teknologi serta cepat beradaptasi dengan berbagai framework, library, maupun arsitektur baru sesuai kebutuhan proyek industri.
                </p>
                <p>
                  Saat ini saya sangat antusias dan <strong className="text-white">siap mengikuti program Praktik Kerja Lapangan (PKL) / Magang Industri</strong> untuk mengaplikasikan kemampuan, belajar alur kerja profesional, serta memberikan kontribusi nyata bagi tim.
                </p>
              </div>

              {/* Core Values / Strengths */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-900/60 p-4 border border-slate-800">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                    <ShieldCheck className="size-4" />
                    <span>Clean & Structured Code</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Menulis kode terorganisir dengan modularitas yang baik dan penamaan variabel yang jelas.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/60 p-4 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                    <Zap className="size-4" />
                    <span>Fleksibel & Adaptif</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Utama di React & NestJS, namun sangat terbuka dan cepat menguasai stack/tools baru sesuai dinamika tim.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Bento Box / Education Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-[#0b101d] p-6 border border-slate-800/90 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 size-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Riwayat & Afiliasi
                </h3>

                <div className="mt-5 space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10 text-sky-400 border border-blue-500/20 shrink-0">
                      <GraduationCap className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">SMKN 1 Kepanjen</h4>
                      <p className="text-xs text-sky-300 font-medium">Rekayasa Perangkat Lunak (RPL)</p>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                        Fokus pada algoritma pemrograman, web development, perancangan database relasional, dan praktik rekayasa perangkat lunak.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-4 border-t border-slate-800">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      <Briefcase className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Target PKL / Magang</h4>
                      <p className="text-xs text-emerald-300 font-medium">Full Stack / Front-End / Back-End Developer</p>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                        Siap berkolaborasi dalam sprint development, integrasi API, bug fixing, dan implementasi fitur web baru.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-4 border-t border-slate-800">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Domisili & Ketersediaan</h4>
                      <p className="text-xs text-slate-300 font-medium">Malang, Jawa Timur, Indonesia</p>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                        Tersedia untuk penempatan kerja di wilayah Malang, Surabaya, maupun sistem Remote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK & CAPABILITIES (KEAHLIAN) */}
        <section id="keahlian" className="scroll-mt-24 py-16 sm:py-20 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
              <Cpu className="size-3.5" />
              <span>Tech Stack & Penguasaan</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Keahlian Teknis & Alat Kerja
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Kombinasi teknologi yang saya gunakan sehari-hari untuk mewujudkan ide menjadi perangkat lunak siap guna.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className={`group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 p-6 border ${category.borderGlow} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-900/90 hover:shadow-xl`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-tr ${category.color} text-slate-950 shadow-md`}>
                        <Icon className="size-6" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold text-white">
                      {category.category}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {category.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-md px-2 py-1 text-[11px] font-mono font-medium border ${category.badgeBg}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SERVICES (LAYANAN) */}
        <section id="layanan" className="scroll-mt-24 py-16 sm:py-20 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
              <Layers className="size-3.5" />
              <span>Kemampuan & Kontribusi</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Solusi yang Dapat Saya Berikan
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Kesiapan kontribusi teknis untuk kebutuhan pengembangan sistem di instansi, startup, maupun proyek independen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 p-6 sm:p-8 border border-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/10 text-sky-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800/80">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400">
                      <span className="size-1.5 rounded-full bg-sky-400" />
                      {service.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT / CTA SECTION */}
        <section id="kontak" className="scroll-mt-24 py-16 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-[#0b101d] to-[#080c15] p-8 sm:p-14 border border-blue-500/30 shadow-2xl shadow-blue-900/30 text-center">
            {/* Background glowing rings */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-sky-400 border border-blue-500/20">
                <Mail className="size-3.5" />
                <span>Mari Berkolaborasi</span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                Punya Proyek Menarik atau Peluang PKL?
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                Saya selalu antusias mendiskusikan peluang kolaborasi, kesempatan magang industri (PKL), ataupun pengembangan aplikasi web baru. Mari terhubung!
              </p>

              {/* Main Contact CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/6282338479390?text=Halo%20Rizky%20Fahmi,%20saya%20tertarik%20bekerja%20sama%20dengan%20Anda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:shadow-blue-500/50 hover:brightness-110 active:scale-95"
                >
                  <Phone className="size-4" />
                  <span>Chat WhatsApp (0823-3847-9390)</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-slate-800/90 px-6 py-4 text-sm font-bold text-slate-200 border border-slate-700 transition-all duration-200 hover:bg-slate-700 hover:text-white active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="size-4 text-emerald-400" />
                      <span className="text-emerald-300">rzkyfhm@gmail.com (Tersalin!)</span>
                    </>
                  ) : (
                    <>
                      <Mail className="size-4 text-sky-400" />
                      <span>Salin Email (rzkyfhm@gmail.com)</span>
                      <Copy className="size-3.5 text-slate-400" />
                    </>
                  )}
                </button>
              </div>

              {/* Social links & Details row */}
              <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-slate-400 border-t border-slate-800/80 pt-6">
                <a
                  href="https://github.com/rizkyfahmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors font-medium"
                >
                  <GithubIcon className="size-4" />
                  <span>GitHub: @rizkyfahmi</span>
                </a>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <MapPin className="size-4 text-sky-400" />
                  <span>Kec. Kromengan, Kab. Malang, Jawa Timur</span>
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold inline-flex items-center gap-1">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Status: Siap PKL 2026
                </span>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row pb-6">
            <div>
              <span>© {new Date().getFullYear()} </span>
              <span className="text-slate-400 font-semibold">Rizky Fahmi Budiartu Putra</span>
              <span> — Full Stack Developer</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">SMKN 1 Kepanjen</span>
              <span>•</span>
              <span>Rekayasa Perangkat Lunak</span>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
