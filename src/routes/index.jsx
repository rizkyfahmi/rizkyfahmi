import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import projectNimbus from "@/assets/project-nimbus.jpg";
import projectSaritoko from "@/assets/project-saritoko.jpg";
import projectLaras from "@/assets/project-laras.jpg";
import projectKilau from "@/assets/project-kilau.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raka Studio — Portfolio Product Designer Jakarta" },
      {
        name: "description",
        content:
          "Portfolio Raka, product designer di Jakarta. Desain antarmuka, design system, prototyping, dan front-end untuk produk digital yang ringan dan ramah.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Raka Studio — Product Designer" },
      {
        property: "og:description",
        content:
          "Product designer di Jakarta — mendesain antarmuka yang menyenangkan. Lihat karya pilihan dan cara menghubungi.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Raka Studio — Product Designer" },
      {
        name: "twitter:description",
        content:
          "Product designer di Jakarta — mendesain antarmuka yang menyenangkan.",
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
  { label: "Product design", bg: "bg-sky/60", delay: "animate-delay-none" },
  { label: "Prototyping", bg: "bg-butter/70", delay: "delay-75" },
  { label: "Design system", bg: "bg-mint/60", delay: "delay-125" },
  { label: "Front-end", bg: "bg-lilac/70", delay: "delay-150" },
];

const services = [
  {
    icon: "◆",
    iconBg: "bg-coral/15 text-coral",
    title: "Product design",
    description: "Dari riset hingga antarmuka akhir yang siap dibangun.",
  },
  {
    icon: "✦",
    iconBg: "bg-mint/20 text-ink",
    title: "Design system",
    description: "Komponen, token, dan panduan yang konsisten.",
  },
  {
    icon: "●",
    iconBg: "bg-butter/40 text-ink",
    title: "Prototyping",
    description: "Makna yang bisa dirasakan, bukan sekadar gambar.",
  },
  {
    icon: "▲",
    iconBg: "bg-sky/40 text-ink",
    title: "Front-end",
    description: "Menjembatani desain ke kode yang rapi.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink antialiased selection:bg-coral/25">
      <header className="sticky top-0 z-40 px-4 pt-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-cream/80 px-4 py-2 ring-1 ring-ink/10 backdrop-blur">
          <a
            href="#top"
            className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-cream"
          >
            Raka Studio
          </a>
          <div className="hidden items-center gap-1 sm:flex">
            <a
              href="#karya"
              className="rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-soft"
            >
              Karya
            </a>
            <a
              href="#tentang"
              className="rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-soft"
            >
              Tentang
            </a>
            <a
              href="#kontak"
              className="rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-soft"
            >
              Kontak
            </a>
          </div>
          <a
            href="#kontak"
            className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-peach hover:text-ink"
          >
            Punya ide?
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="pt-14 pb-10 sm:pt-20">
          <div className="flex flex-col-reverse items-end gap-8 md:flex-row">
            <div className="flex-1">
              <span className="inline-flex animate-pop items-center gap-2 rounded-full bg-mint/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink/70">
                <span className="size-2 rounded-full bg-coral" />
                Terbuka untuk proyek
              </span>
              <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
                Halo, aku <em className="italic text-coral">Raka</em> —
                <br />
                mendesain antarmuka
                <br />
                yang <em className="italic">menyenangkan</em>.
              </h1>
              <p className="mt-6 max-w-[42ch] text-lg text-pretty text-ink/60">
                Product designer di Jakarta. Aku membantu tim mengubah ide yang
                rumit jadi produk yang terasa ringan, ramah, dan gampang
                dipakai.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#karya"
                  className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-coral"
                >
                  Lihat karya
                </a>
                <a
                  href="#kontak"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold ring-1 ring-ink/15 transition-colors hover:bg-soft"
                >
                  Kirim pesan
                </a>
              </div>
            </div>
            <div className="w-full md:w-64 lg:w-72">
              <div className="relative">
                <div
                  className="absolute -top-3 -right-3 size-10 animate-floaty rounded-full bg-butter"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-3 -left-3 size-8 animate-floaty rounded-full bg-lilac [animation-duration:6s]"
                  aria-hidden="true"
                />
                <img
                  src={portrait}
                  alt="Potret Raka, product designer"
                  width={1024}
                  height={1280}
                  className="relative w-full rounded-[2rem] bg-soft object-cover outline-1 -outline-offset-1 outline-ink/5"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill.label}
                className={`animate-rise rounded-full px-4 py-1.5 text-sm font-medium text-ink/80 ${skill.delay} ${skill.bg}`}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </section>

        {/* Karya pilihan */}
        <section id="karya" className="scroll-mt-24 py-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                (a) Karya pilihan
              </p>
              <h2 className="mt-2 font-display text-4xl tracking-tight text-balance">
                Proyek yang<span className="text-ink/40"> sedang</span> dikerjakan
              </h2>
            </div>
            <a
              href="#kontak"
              className="hidden text-sm font-semibold text-ink/60 underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral sm:block"
            >
              Lihat semua
            </a>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-[1.75rem] bg-white p-3 ring-1 ring-ink/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(43,39,51,0.35)]"
              >
                <div
                  className={`w-full overflow-hidden rounded-3xl ${project.bg}`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-ink/40">
                      {project.number} — {project.category}
                    </span>
                    <span className="text-xs font-medium text-ink/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl">{project.title}</h3>
                  <p className="mt-1 text-sm text-ink/55">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tentang */}
        <section id="tentang" className="scroll-mt-24 py-16">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                (b) Tentang
              </p>
              <h2 className="mt-2 font-display text-4xl tracking-tight text-balance">
                Sedikit tentang aku
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="max-w-[52ch] text-lg text-pretty text-ink/70">
                Lima tahun terakhir aku menghabiskan waktu di antara tim produk
                dan studio kreatif. Aku percaya desain yang baik bukan yang
                paling ramai, tapi yang paling jernih.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-3xl bg-mint/40 p-5">
                  <p className="font-display text-4xl">5+</p>
                  <p className="mt-1 text-sm text-ink/60">Tahun pengalaman</p>
                </div>
                <div className="rounded-3xl bg-butter/50 p-5">
                  <p className="font-display text-4xl">40+</p>
                  <p className="mt-1 text-sm text-ink/60">Proyek selesai</p>
                </div>
                <div className="rounded-3xl bg-lilac/50 p-5">
                  <p className="font-display text-4xl">12</p>
                  <p className="mt-1 text-sm text-ink/60">Klien bahagia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section className="py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
            (c) Layanan
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-tight">
            Yang bisa aku bantu
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-6 ring-1 ring-ink/5"
              >
                <span
                  className={`grid size-11 place-items-center rounded-2xl ${service.iconBg}`}
                >
                  {service.icon}
                </span>
                <h3 className="mt-4 font-display text-2xl">{service.title}</h3>
                <p className="mt-2 text-sm text-ink/55">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kontak */}
        <section id="kontak" className="scroll-mt-24 pb-8">
          <div className="rounded-[2.5rem] bg-ink px-6 py-16 text-center text-cream sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              Mari bicara
            </p>
            <h2 className="mx-auto mt-4 max-w-[24ch] font-display text-4xl tracking-tight text-balance sm:text-5xl">
              Punya proyek yang ingin dibuat lebih baik?
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-pretty text-cream/60">
              Ceritakan idemu. Aku suka mulai dari percakapan yang santai.
            </p>
            <a
              href="mailto:halo@rakastudio.id"
              className="mt-8 inline-flex rounded-full bg-coral px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-peach hover:text-ink"
            >
              halo@rakastudio.id
            </a>
            <div className="mt-8 flex justify-center gap-6 text-sm text-cream/50">
              <span>Dribbble</span>
              <span>LinkedIn</span>
              <span>Instagram</span>
            </div>
          </div>
          <footer className="flex flex-col items-center justify-between gap-2 py-8 text-xs text-ink/40 sm:flex-row">
            <span>© 2024 Raka Studio</span>
            <span>Dibuat dengan penuh perhatian di Jakarta</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
