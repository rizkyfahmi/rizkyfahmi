import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import projectNimbus from "@/assets/project-nimbus.jpg";
import projectSaritoko from "@/assets/project-saritoko.jpg";
import projectLaras from "@/assets/project-laras.jpg";
import projectKilau from "@/assets/project-kilau.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rizky Fahmi — Portfolio Full Stack Developer | SMKN 1 Kepanjen" },
      {
        name: "description",
        content:
          "Portfolio Rizky Fahmi Budiartu Putra, Full Stack Developer & siswa RPL SMKN 1 Kepanjen, Malang. Desain antarmuka, front-end, REST API, dan database untuk aplikasi web yang handal dan menyenangkan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Rizky Fahmi — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer & siswa RPL SMKN 1 Kepanjen — mendesain dan membangun aplikasi web yang modern dan responsif.",
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

const projects = [
  {
    number: "01",
    category: "Fintech",
    title: "Nimbus Pay",
    description: "Rebranding aplikasi pembayaran untuk generasi muda.",
    image: projectNimbus,
    alt: "Tampilan aplikasi mobile banking Nimbus Pay bernuansa mint dan coral",
    bg: "bg-mint/40",
  },
  {
    number: "02",
    category: "E-commerce",
    title: "Sari Toko",
    description: "Pengalaman belanja untuk brand lokal Indonesia.",
    image: projectSaritoko,
    alt: "Halaman produk e-commerce minimalis di atas latar peach lembut",
    bg: "bg-peach/40",
  },
  {
    number: "03",
    category: "Wellness",
    title: "Laras",
    description: "Aplikasi kecakapan hidup dan meditasi harian.",
    image: projectLaras,
    alt: "Dashboard aplikasi wellness Laras bernuansa lilac dan butter",
    bg: "bg-lilac/40",
  },
  {
    number: "04",
    category: "SaaS",
    title: "Kilau",
    description: "Dashboard analitik untuk tim startup kecil.",
    image: projectKilau,
    alt: "Dashboard analitik Kilau dengan aksen coral di atas krem",
    bg: "bg-sky/40",
  },
];

const skills = [
  { label: "Full Stack Developer", bg: "bg-sky/60", delay: "animate-delay-none" },
  { label: "React & TypeScript", bg: "bg-butter/70", delay: "delay-75" },
  { label: "NestJS & Prisma", bg: "bg-mint/60", delay: "delay-125" },
  { label: "MySQL & Database", bg: "bg-lilac/70", delay: "delay-150" },
  { label: "Tailwind CSS", bg: "bg-coral/25", delay: "delay-150" },
];

const services = [
  {
    icon: "◆",
    iconBg: "bg-coral/15 text-coral",
    title: "Full Stack Development",
    description: "Dari perancangan arsitektur hingga antarmuka akhir yang siap pakai.",
  },
  {
    icon: "✦",
    iconBg: "bg-mint/20 text-ink",
    title: "REST API & Backend",
    description: "Endpoint API terstruktur dengan NestJS, Node.js, dan Prisma ORM.",
  },
  {
    icon: "●",
    iconBg: "bg-butter/40 text-ink",
    title: "Database & CRUD",
    description: "Perancangan skema relasional, optimasi kueri, dan sistem CRUD MySQL.",
  },
  {
    icon: "▲",
    iconBg: "bg-sky/40 text-ink",
    title: "Front-end Interface",
    description: "Antarmuka interaktif dan responsif menggunakan React dan Tailwind CSS.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink antialiased selection:bg-coral/25">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 px-4 pt-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-cream/85 px-4 py-2 ring-1 ring-ink/10 backdrop-blur-md shadow-sm">
          <a
            href="#top"
            className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-cream transition-colors hover:bg-coral"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-coral text-[10px] font-black text-white">
              RF
            </span>
            <span>Rizky Fahmi</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            <a
              href="#karya"
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-soft"
            >
              Karya
            </a>
            <a
              href="#tentang"
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-soft"
            >
              Tentang
            </a>
            <a
              href="#layanan"
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-soft"
            >
              Layanan
            </a>
            <a
              href="#kontak"
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-soft"
            >
              Kontak
            </a>
          </div>
          <a
            href="https://wa.me/6282338479390"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-peach hover:text-ink shadow-sm"
          >
            Hubungi Saya
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-10 pb-10 sm:pt-14 md:pt-16">
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-end md:justify-between">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-flex animate-pop items-center gap-2 rounded-full bg-mint/50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink/75 ring-1 ring-ink/5">
                <span className="size-2 rounded-full bg-coral animate-pulse" />
                Siap untuk PKL & Proyek Web
              </span>
              <h1 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl md:text-5xl lg:text-6xl">
                Halo, aku <em className="italic text-coral font-medium">Rizky Fahmi</em> —
                <br />
                membangun aplikasi web
                <br />
                yang <em className="italic font-medium">menyenangkan</em>.
              </h1>
              <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-pretty text-ink/70 sm:text-lg mx-auto md:mx-0">
                Full Stack Developer & siswa Rekayasa Perangkat Lunak (RPL) di SMKN 1 Kepanjen,
                Malang. Mengembangkan aplikasi web interaktif, REST API, dan basis data dengan
                React, NestJS, TypeScript, dan MySQL.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <a
                  href="#karya"
                  className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-all duration-200 hover:bg-coral hover:shadow-md"
                >
                  Lihat karya
                </a>
                <a
                  href="https://wa.me/6282338479390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold ring-1 ring-ink/15 transition-all duration-200 hover:bg-soft hover:ring-ink/30"
                >
                  WhatsApp: 082338479390
                </a>
                <a
                  href="https://github.com/rizkyfahmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-soft px-4 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-ink hover:text-cream"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Portrait Card - Balanced, Proportional Size */}
            <div className="w-48 sm:w-56 md:w-60 lg:w-64 shrink-0 mx-auto md:mx-0">
              <div className="relative">
                <div
                  className="absolute -top-2.5 -right-2.5 size-9 animate-floaty rounded-full bg-butter shadow-sm z-10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-2.5 -left-2.5 size-8 animate-floaty rounded-full bg-lilac shadow-sm z-10 [animation-duration:6s]"
                  aria-hidden="true"
                />
                <div className="aspect-[3/4] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-soft ring-1 ring-ink/10 shadow-lg">
                  <img
                    src={portrait}
                    alt="Potret Rizky Fahmi, Full Stack Developer SMKN 1 Kepanjen"
                    width={762}
                    height={1024}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {skills.map((skill) => (
              <span
                key={skill.label}
                className={`animate-rise rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-ink/80 ${skill.delay} ${skill.bg} ring-1 ring-ink/5`}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </section>

        {/* Karya pilihan */}
        <section id="karya" className="scroll-mt-24 py-14 sm:py-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                (a) Karya pilihan
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-balance">
                Proyek yang<span className="text-ink/40"> sedang</span> dikerjakan
              </h2>
            </div>
            <a
              href="https://github.com/rizkyfahmi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-semibold text-ink/60 underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral sm:block"
            >
              Lihat di GitHub ↗
            </a>
          </div>

          {/* Project Cards Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between rounded-[1.75rem] bg-white p-3.5 ring-1 ring-ink/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(43,39,51,0.3)]"
              >
                <div>
                  <div
                    className={`w-full overflow-hidden rounded-2xl ${project.bg}`}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[16/10] sm:aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-3 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-ink/45">
                        {project.number} — {project.category}
                      </span>
                      <span className="text-xs font-medium text-ink/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral">
                        ↗
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-display text-xl sm:text-2xl text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tentang */}
        <section id="tentang" className="scroll-mt-24 py-14 sm:py-16">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                (b) Tentang
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-balance">
                Sedikit tentang aku
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="max-w-[54ch] text-base sm:text-lg leading-relaxed text-pretty text-ink/70">
                Saya adalah siswa Rekayasa Perangkat Lunak (RPL) di SMKN 1 Kepanjen yang memiliki minat
                dalam pengembangan aplikasi web sebagai Full Stack Developer. Berpengalaman membuat aplikasi
                web menggunakan React, NestJS, Prisma ORM, dan MySQL melalui project pribadi serta praktik
                di laboratorium sekolah. Siap mengembangkan kemampuan melalui program Praktik Kerja Lapangan (PKL).
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl sm:rounded-3xl bg-mint/40 p-4 sm:p-5">
                  <p className="font-display text-3xl sm:text-4xl font-bold">2025+</p>
                  <p className="mt-1 text-xs sm:text-sm text-ink/60">SMKN 1 Kepanjen</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl bg-butter/50 p-4 sm:p-5">
                  <p className="font-display text-3xl sm:text-4xl font-bold">10+</p>
                  <p className="mt-1 text-xs sm:text-sm text-ink/60">Teknologi & Tools</p>
                </div>
                <div className="rounded-2xl sm:rounded-3xl bg-lilac/50 p-4 sm:p-5">
                  <p className="font-display text-3xl sm:text-4xl font-bold">100%</p>
                  <p className="mt-1 text-xs sm:text-sm text-ink/60">Siap Magang / PKL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section id="layanan" className="scroll-mt-24 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
            (c) Layanan
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight">
            Yang bisa aku bantu
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-5 sm:p-6 ring-1 ring-ink/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <span
                  className={`grid size-11 place-items-center rounded-2xl ${service.iconBg}`}
                >
                  {service.icon}
                </span>
                <h3 className="mt-4 font-display text-xl sm:text-2xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kontak */}
        <section id="kontak" className="scroll-mt-24 pb-8 pt-6">
          <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-ink px-6 py-12 sm:py-16 text-center text-cream sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              Mari bicara
            </p>
            <h2 className="mx-auto mt-4 max-w-[26ch] font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-balance">
              Punya proyek atau peluang PKL yang ingin didiskusikan?
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-pretty text-cream/65 text-sm sm:text-base leading-relaxed">
              Ceritakan rencanamu. Aku selalu antusias untuk belajar, berkolaborasi, dan membangun sesuatu yang bermanfaat.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="mailto:rzkyfhm@gmail.com"
                className="inline-flex rounded-full bg-coral px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:bg-peach hover:text-ink hover:scale-105 shadow-sm"
              >
                rzkyfhm@gmail.com
              </a>
              <a
                href="https://wa.me/6282338479390"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-ink transition-all hover:bg-mint hover:scale-105 shadow-sm"
              >
                WhatsApp: 082338479390
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-cream/50">
              <a
                href="https://github.com/rizkyfahmi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                GitHub: @rizkyfahmi
              </a>
              <span>•</span>
              <a
                href="https://rizkyfahmi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                Portfolio: rizkyfahmi.vercel.app
              </a>
              <span>•</span>
              <span>Kromengan, Malang</span>
            </div>
          </div>
          <footer className="flex flex-col items-center justify-between gap-2 py-8 text-xs text-ink/40 sm:flex-row">
            <span>© 2026 Rizky Fahmi Budiartu Putra — Full Stack Developer</span>
            <span>SMKN 1 Kepanjen • Malang, Jawa Timur</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
