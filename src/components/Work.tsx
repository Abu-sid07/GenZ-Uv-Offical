import SectionHeading from "./SectionHeading";
import { ArrowIcon, ChartIcon, PlayIcon } from "../lib/icons";

type Case = {
  brand: string;
  niche: string;
  result: string;
  metric: string;
  sub: string;
  services: string[];
  grad: string;
  image: string;
  link?: string;
};

const CASES: Case[] = [
  
  {
  brand: "Al Amanath English Academy",
  niche: "Education & Skill Development",
  result: "Enhanced Brand Visibility",
  metric: "Digital Transformation Project",
  sub: "Developed the official academy website and implemented digital marketing strategies to strengthen online presence and student engagement.",
  services: ["Web Development", "Digital Marketing", "Content Strategy"],
  grad: "from-sky-500/30 via-cyan-500/10 to-transparent",
  image: "/alamanath-img.jpeg",
  link: "https://al-amanath-academy.vercel.app/",
},
 {
  brand: "Stylish English Academy",
  niche: "English Communication & Student Development",
  result: "Digital Growth Initiative",
  metric: "Website, Automation & Social Media",
  sub: "Developed the academy website, implemented WhatsApp automation for student communication, and managed Instagram marketing campaigns to improve student engagement and brand visibility.",
  services: ["Website Development", "WhatsApp Automation", "Social Media Marketing"],
  grad: "from-sky-500/30 via-cyan-500/10 to-transparent",
  image: "/stylish-eng.jpeg",
  link: "#",
},
 
];

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected Results"
            title={
              <>
                Brands we helped <span className="text-gradient">level up</span>
              </>
            }
            desc="A glimpse of what happens when halal values meet Gen-Z strategy and relentless execution."
          />
          <a
            href="#contact"
            className="reveal group hidden shrink-0 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:flex"
          >
            Be our next success
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {CASES.map((c, i) => (
            c.link ? (
              <a
                key={c.brand}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-400/25 block"
                data-delay={`${(i % 2) * 90}`}
              >
                {/* thumbnail */}
                <div className={`relative flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${c.grad}`}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <ChartIcon className="h-3.5 w-3.5 text-emerald-glow" /> Trending up
                  </div>
                  <div className="relative flex flex-col items-center justify-center h-full w-full p-4">
                    <img src={c.image} alt={c.brand} className="h-full w-full object-contain" />
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/70">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15">
                        <PlayIcon className="h-2.5 w-2.5" />
                      </span>
                      {c.niche}
                    </div>
                  </div>
                  {/* result badge */}
                  <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
                    <div className="font-display text-2xl font-bold text-gradient-soft">{c.result}</div>
                    <div className="text-[0.65rem] uppercase tracking-wide text-white/60">{c.metric}</div>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{c.brand}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-emerald-50/60">{c.sub}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.services.map((s) => (
                    <span key={s} className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1 text-[0.7rem] font-medium text-emerald-glow/90">
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ) : (
              <article
                key={c.brand}
                className="reveal group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-400/25"
                data-delay={`${(i % 2) * 90}`}
              >
                {/* thumbnail */}
                <div className={`relative flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${c.grad}`}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <ChartIcon className="h-3.5 w-3.5 text-emerald-glow" /> Trending up
                  </div>
                  <div className="relative flex flex-col items-center justify-center h-full w-full p-4">
                    <img src={c.image} alt={c.brand} className="h-full w-full object-contain" />
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/70">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15">
                        <PlayIcon className="h-2.5 w-2.5" />
                      </span>
                      {c.niche}
                    </div>
                  </div>
                  {/* result badge */}
                  <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
                    <div className="font-display text-2xl font-bold text-gradient-soft">{c.result}</div>
                    <div className="text-[0.65rem] uppercase tracking-wide text-white/60">{c.metric}</div>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{c.brand}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-emerald-50/60">{c.sub}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.services.map((s) => (
                    <span key={s} className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1 text-[0.7rem] font-medium text-emerald-glow/90">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
