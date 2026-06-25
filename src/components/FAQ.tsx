import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { PlusIcon } from "../lib/icons";

const FAQS = [
  {
    q: "Do you only work with Muslim businesses?",
    a: "We proudly specialise in Muslim entrepreneurs, but we work with any brand whose products and services are halal. What matters most is that we can promote your business ethically and honestly — in line with our values.",
  },
  {
    q: "What does “halal marketing” actually mean?",
    a: "It means we never promote alcohol, gambling, adult content, interest-based (riba) lending or anything dishonest. We also avoid deceptive tactics, fake engagement and misleading claims — only honest, high-quality work that builds real trust.",
  },
  {
    q: "Which platforms do you cover?",
    a: "TikTok, Instagram (Reels), YouTube (Shorts & long-form), Facebook, LinkedIn and X — plus Google for search and ads. We focus your energy on the platforms where your audience actually spends time.",
  },
  {
    q: "How fast can we get started?",
    a: "Fast. After your free strategy call we typically kick off within 48 hours — audit, roadmap and your first deliverables start moving in the first week.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Always. The packages above are starting points. Every brand is unique, so we tailor scope, services and pricing to your goals and budget — especially with our fully-custom Empire plan.",
  },
  {
    q: "Can I start with just one service?",
    a: "Absolutely. Many clients begin with a single focus — like video editing or social media — and add more services as they see results. You're never locked into more than you need.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Good Questions"
          title={
            <>
              Things founders <span className="text-gradient">often ask</span>
            </>
          }
          desc="Still curious about something? Just reach out — we love a good conversation."
        />

        <div className="reveal mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? "border-emerald-400/30 bg-emerald-400/[0.04]" : "border-white/8 bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left"
                >
                  <span className="font-display text-base font-semibold text-white sm:text-lg">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-emerald-400/40 bg-emerald-400/15 text-emerald-glow"
                        : "border-white/15 text-emerald-50/60"
                    }`}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-emerald-50/65">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
