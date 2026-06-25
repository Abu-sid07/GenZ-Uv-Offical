const ITEMS = [
  "Short-Form Video",
  "TikTok Growth",
  "Reels & Shorts",
  "Content Strategy",
  "Meta Ads",
  "Brand Identity",
  "Logo & Visuals",
  "AI Chatbots",
  "Workflow Automation",
  "Web Design",
  "SEO",
  "Email Funnels",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="relative border-y border-white/5 bg-ink-2/50 py-6">
      <div className="mask-fade-x overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-4">
          {row.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-emerald-50/70">
                {item}
              </span>
              <span className="text-lg text-emerald-glow/50">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
