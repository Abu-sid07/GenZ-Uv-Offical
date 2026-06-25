import SectionHeading from "./SectionHeading";
import { CheckIcon, ArrowIcon, SparkIcon } from "../lib/icons";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Launch",
    tagline: "For new brands finding their feet",
    price: "$499",
    period: "/mo",
    features: [
      "1 core service of your choice",
      "8 content pieces / month",
      "1 social platform managed",
      "Monthly strategy call",
      "Basic performance report",
    ],
    cta: "Start growing",
  },
  {
    name: "Growth",
    tagline: "For brands ready to scale fast",
    price: "$1,290",
    period: "/mo",
    features: [
      "3 services (e.g. video + content + ads)",
      "20+ content pieces / month",
      "Up to 3 platforms managed",
      "Weekly strategy calls",
      "Paid ads management (ad spend separate)",
      "AI chatbot lead capture",
    ],
    cta: "Scale my brand",
    popular: true,
  },
  {
    name: "Empire",
    tagline: "Done-for-you growth engine",
    price: "Custom",
    features: [
      "All 6 services, fully integrated",
      "Unlimited content & revisions",
      "Website / funnel build included",
      "Advanced AI automation suite",
      "Dedicated growth team",
      "Priority support & reporting",
    ],
    cta: "Book a call",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Packages"
          title={
            <>
              Simple pricing, <span className="text-gradient">serious growth</span>
            </>
          }
          desc="Flexible halal packages for every stage. No long lock-ins, no hidden fees — cancel anytime. Every plan is fully customisable."
        />

        <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative overflow-hidden rounded-3xl p-1 ${
                p.popular ? "lg:-mt-4 lg:mb-4" : ""
              }`}
              data-delay={`${i * 90}`}
            >
              <div
                className={`relative h-full rounded-[1.4rem] p-7 transition-transform duration-500 hover:-translate-y-1 ${
                  p.popular
                    ? "ring-grad"
                    : "border border-white/8 bg-white/[0.02]"
                }`}
              >
                {p.popular && (
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-gold px-3 py-1 text-[0.65rem] font-bold text-ink">
                    <SparkIcon className="h-3 w-3" /> Most Popular
                  </div>
                )}

                <div className={`rounded-2xl ${p.popular ? "bg-ink-2/80" : ""} p-0`}>
                  <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-emerald-50/55">{p.tagline}</p>

                  <div className="mt-6 flex items-end gap-1">
                    <span className="font-display text-4xl font-bold text-white">{p.price}</span>
                    {p.period && <span className="mb-1 text-sm text-emerald-50/50">{p.period}</span>}
                  </div>

                  <a
                    href="#contact"
                    className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      p.popular
                        ? "bg-gradient-to-r from-emerald-400 to-gold text-ink shadow-lg shadow-emerald-500/20"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {p.cta}
                    <ArrowIcon className="h-4 w-4" />
                  </a>

                  <ul className="mt-7 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-emerald-50/75">
                        <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-glow">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-sm text-emerald-50/50">
          Not sure which fits? <a href="#contact" className="font-semibold text-emerald-glow underline-offset-4 hover:underline">Book a free strategy call</a> and we'll recommend the right path — no pressure.
        </p>
      </div>
    </section>
  );
}
