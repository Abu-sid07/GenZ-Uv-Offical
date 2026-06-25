import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Discover & Strategize",
    desc: "We start with a free audit and a deep-dive call to understand your brand, audience and goals — then craft a custom growth roadmap.",
    dur: "Days 1–3",
  },
  {
    n: "02",
    title: "Create & Design",
    desc: "Our team produces scroll-stopping videos, content, branding and assets — all aligned to your voice and visual identity.",
    dur: "Days 3–10",
  },
  {
    n: "03",
    title: "Launch & Scale",
    desc: "We publish, run organic + paid campaigns and automate your funnels to put your brand in front of the right people, fast.",
    dur: "Week 2+",
  },
  {
    n: "04",
    title: "Analyze & Optimize",
    desc: "We track everything that matters, double down on what works and refine continuously for compounding, predictable growth.",
    dur: "Ongoing",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A simple path to <span className="text-gradient">real growth</span>
            </>
          }
          desc="No guesswork, no fluff. Just a proven process built to move your brand forward — step by step."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="reveal group relative"
                data-delay={`${i * 100}`}
              >
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-emerald-400/25 bg-ink-2 font-display text-lg font-bold text-gradient-soft transition-all duration-300 group-hover:border-emerald-400/60 group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                    {s.n}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.65rem] font-medium text-emerald-50/55 lg:hidden">
                    {s.dur}
                  </span>
                </div>

                <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors group-hover:border-emerald-400/20">
                  <div className="hidden text-[0.65rem] font-medium uppercase tracking-wide text-emerald-glow lg:block">
                    {s.dur}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-50/60">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
