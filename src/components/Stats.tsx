import { useEffect, useRef, useState } from "react";

function CountUp({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1800,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(end * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

const STATS = [
  { node: <CountUp end={250} suffix="+" />, label: "Halal brands scaled" },
  { node: <CountUp end={50} suffix="M+" />, label: "Views generated" },
  { node: <CountUp end={7} suffix="×" />, label: "Average return on investment" },
  { node: <><CountUp end={4.9} decimals={1} />/5</>, label: "Client satisfaction" },
];

export default function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-gradient-to-br from-emerald-500/[0.08] via-ink-2 to-ink-2 p-8 sm:p-12">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-emerald-500/20 blur-[90px]" />
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">{s.node}</div>
                <div className="mt-2 text-xs leading-snug text-emerald-50/55 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
