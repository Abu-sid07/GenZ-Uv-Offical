import { StarShape, PatternField } from "./Geometric";
import { ArrowIcon, PlayIcon, ShieldIcon, BoltIcon, SparkIcon } from "../lib/icons";



export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,#000_30%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[140px]" />
        <div className="absolute top-10 -right-32 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-[130px]" />
        <div className="absolute bottom-0 -left-40 h-[32rem] w-[32rem] rounded-full bg-lime-glow/10 blur-[130px]" />
        <PatternField className="absolute inset-0 opacity-[0.18]" opacity={0.5} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Floating decorative stars */}
      <StarShape className="animate-float-slow absolute left-[6%] top-[22%] hidden h-16 w-16 text-emerald-400/30 md:block" />
      <StarShape className="animate-float absolute right-[8%] top-[30%] hidden h-10 w-10 text-gold/40 lg:block" />
      <StarShape className="animate-float-slow absolute right-[20%] top-[14%] hidden h-8 w-8 text-lime-glow/40 lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-xs font-medium text-emerald-50/80 backdrop-blur">
            <ShieldIcon className="h-3.5 w-3.5 text-emerald-glow" />
            100% Principled Marketing · Built for the Modern People
          </div>

          <h1 className="reveal mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl" data-delay="60">
            We Grow Principled brands
            <br className="hidden sm:block" /> with{" "}
            <span className="text-gradient">Gen-Z Energy</span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/65 sm:text-lg" data-delay="140">
          !!Peace be upon you!!! Genzuv is the digital marketing agency for ambitious Muslim
            entrepreneurs. From scroll-stopping video to AI automation and high-converting
            websites — we help your brand scale with <span className="text-white">barakah</span>, not burnout.
          </p>

          <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" data-delay="220">
            <a
              href="#contact"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-lime-glow to-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-xl shadow-emerald-500/25 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Get Your Free Growth Plan
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-400/20 text-emerald-glow">
                <PlayIcon className="h-3 w-3" />
              </span>
              See Our Work
            </a>
          </div>

         
          
        </div>

        {/* Trust strip */}
        <div className="reveal mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-emerald-50/45" data-delay="360">
          <span className="inline-flex items-center gap-1.5"><BoltIcon className="h-4 w-4 text-lime-glow" /> 48-hour kickoff</span>
          <span className="inline-flex items-center gap-1.5"><SparkIcon className="h-4 w-4 text-gold" /> Dedicated strategist</span>
          <span className="inline-flex items-center gap-1.5"><ShieldIcon className="h-4 w-4 text-emerald-glow" /> No haram industries</span>
          <span className="inline-flex items-center gap-1.5">★ 4.9/5 client rating</span>
        </div>
      </div>
    </section>
  );
}
