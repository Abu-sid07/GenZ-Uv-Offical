import SectionHeading from "./SectionHeading";
import { ShieldIcon, BoltIcon, ChartIcon, HeartIcon, CheckIcon, CloseIcon } from "../lib/icons";

const FEATURES = [
  {
    icon: BoltIcon,
    title: "Gen-Z Native Team",
    desc: "We live on TikTok, Reels & X. We know what's trending before it trends — and how to make it work for your niche.",
    accent: "text-lime-glow",
  },
  {
    icon: ChartIcon,
    title: "Data-Driven Growth",
    desc: "No vanity metrics. Every rupee and every post is tracked, tested and optimised against real business outcomes.",
    accent: "text-emerald-glow",
  },
  {
    icon: HeartIcon,
    title: "Dedicated Strategist",
    desc: "You get a real human who knows your brand inside out — not a ticket number. Weekly calls & clear reporting.",
    accent: "text-gold",
  },
];

const VALUES = [
  { arabic: "أمانة", name: "Amanah", meaning: "Trust — we treat your brand & data as a sacred trust." },
  { arabic: "إخلاص", name: "Ikhlas", meaning: "Sincerity — honest work, honest results, no gimmicks." },
  { arabic: "بركة", name: "Barakah", meaning: "Blessing — growth that lasts, with ethics at the centre." },
];

const DO = ["Modest fashion & beauty", "Halal food & cafés", "Islamic finance & education", "Muslim creators & coaches", "Startups & local businesses"];
const DONT = ["Alcohol & nightlife", "Gambling & betting", "Adult / indecent content", "Riba-based lending", "Anything dishonest"];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Genzuv"
          title={
            <>
              An agency that understands <span className="text-gradient">your values</span>
            </>
          }
          desc="We're not just marketers — we're a team that respects your faith, your ethics and your mission. Growth you can be proud of."
        />

        {/* Halal banner card */}
        <div className="reveal mt-14">
          <div className="ring-grad relative overflow-hidden rounded-3xl p-1">
            <div className="relative grid gap-8 rounded-[1.4rem] bg-ink-2/80 p-7 sm:p-9 lg:grid-cols-[1.1fr_1fr_1fr]">
              <PatternHalo />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-glow">
                  <ShieldIcon className="h-4 w-4" /> 100% Halal Marketing
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                  Growth without compromising your deen
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-emerald-50/60">
                  We only partner with halal businesses and never promote anything against
                  Islamic values. Your audience grows — and your conscience stays clear.
                </p>
              </div>

              <div className="relative">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-emerald-glow">✓ We happily work with</div>
                <ul className="space-y-2.5">
                  {DO.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-emerald-50/80">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-rose-300/80">✗ We never promote</div>
                <ul className="space-y-2.5">
                  {DONT.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-emerald-50/45">
                      <CloseIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose-400/70" />
                      <span className="line-through decoration-rose-400/30">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="reveal group rounded-3xl border border-white/8 bg-white/[0.02] p-7 transition-colors hover:border-emerald-400/20 hover:bg-white/[0.04]"
                data-delay={`${i * 90}`}
              >
                <Icon className={`h-9 w-9 ${f.accent}`} />
                <h3 className="mt-5 font-display text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="reveal mt-5 grid gap-5 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.name} className="flex items-center gap-4 rounded-3xl border border-white/8 bg-gradient-to-br from-emerald-400/[0.06] to-transparent p-6">
              <div className="font-display text-3xl font-bold text-gradient-soft" dir="rtl">{v.arabic}</div>
              <div>
                <div className="font-display font-bold text-white">{v.name}</div>
                <div className="mt-0.5 text-xs leading-relaxed text-emerald-50/55">{v.meaning}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PatternHalo() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
      <defs>
        <pattern id="halo-tile" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 6l5 8 9-1.6-1.6 9 8 5-8 5 1.6 9-9-1.6L30 54l-5-8-9 1.6 1.6-9-8-5 8-5-1.6-9 9 1.6L30 6Z" fill="none" stroke="#6ff3c9" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#halo-tile)" />
    </svg>
  );
}
