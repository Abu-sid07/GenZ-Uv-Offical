import type { ComponentType, SVGProps } from "react";
import SectionHeading from "./SectionHeading";
import {
  VideoIcon,
  ContentIcon,
  SocialIcon,
  BrandIcon,
  AutomationIcon,
  WebIcon,
  ArrowIcon,
} from "../lib/icons";

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  tag: string;
  desc: string;
  points: string[];
  accent: string;
  glow: string;
};

const SERVICES: Service[] = [
  {
    icon: VideoIcon,
    title: "Video Editing",
    tag: "Short-form / Reels",
    desc: "Scroll-stopping edits with hooks that stop the thumb and retain viewers to the last second.",
    points: ["Reels, TikTok & Shorts", "Cinematic color & sound", "Captions & motion graphics"],
    accent: "from-emerald-400 to-teal-300",
    glow: "bg-emerald-500/20",
  },
  {
    icon: ContentIcon,
    title: "Content Creation",
    tag: "Strategy + Production",
    desc: "On-trend, on-brand content engineered around your niche and designed to convert, not just impress.",
    points: ["Content calendars", "Scripting & hooks", "Carousels & graphics"],
    accent: "from-lime-glow to-emerald-300",
    glow: "bg-lime-glow/15",
  },
  {
    icon: SocialIcon,
    title: "Social Media Marketing",
    tag: "Organic + Paid",
    desc: "Full-funnel growth across every platform — building communities and turning followers into customers.",
    points: ["Account management", "Meta & TikTok ads", "Community engagement"],
    accent: "from-gold to-amber-300",
    glow: "bg-gold/15",
  },
  {
    icon: BrandIcon,
    title: "Branding",
    tag: "Identity Systems",
    desc: "Memorable visual identities that make Muslim-led brands look premium, trustworthy and distinctly theirs.",
    points: ["Logo & visual identity", "Brand guidelines", "Packaging & assets"],
    accent: "from-emerald-300 to-gold",
    glow: "bg-emerald-400/15",
  },
  {
    icon: AutomationIcon,
    title: "AI Automation",
    tag: "Save 20+ hrs/week",
    desc: "Smart, halal AI workflows and chatbots that handle leads, content and repetitive work around the clock.",
    points: ["AI chatbots & lead capture", "Content automation", "CRM & funnel flows"],
    accent: "from-teal-300 to-lime-glow",
    glow: "bg-teal-400/15",
  },
  {
    icon: WebIcon,
    title: "Web Development",
    tag: "Sites that convert",
    desc: "Fast, beautiful, mobile-first websites built to turn clicks into paying customers — and rank on Google.",
    points: ["Landing pages & sites", "E-commerce & funnels", "Speed & SEO ready"],
    accent: "from-lime-glow to-gold",
    glow: "bg-lime-glow/15",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Everything your brand needs,
              <br className="hidden sm:block" /> under <span className="text-gradient">one roof</span>
            </>
          }
          desc="Six powerful services that work together to grow your halal business — pick one or let us build your full growth engine."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="reveal group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-400/25 sm:p-7"
                data-delay={`${(i % 3) * 90}`}
              >
                {/* hover glow */}
                <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${s.glow} blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="relative flex items-start justify-between">
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} text-ink shadow-lg`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-emerald-50/55">
                    {s.tag}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-emerald-50/60">{s.desc}</p>

                <ul className="relative mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-emerald-50/75">
                      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${s.accent}`} />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-glow opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Explore service
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
