import SectionHeading from "./SectionHeading";
import { QuoteIcon } from "../lib/icons";

type T = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  grad: string;
};

const ITEMS: T[] = [
  {
    quote:
      "Genzuv understood our modest fashion brand instantly. Within two months our Reels were hitting millions and sales followed. Finally an agency that gets our values AND knows how to go viral.",
    name: "Aisha Rahman",
    role: "Founder, Noor Apparel",
    initials: "AR",
    grad: "from-rose-400 to-fuchsia-500",
  },
  {
    quote:
      "The AI chatbot they built captures leads while we sleep — our café bookings doubled. Honest, talented and genuinely good people to work with. May Allah reward them.",
    name: "Yusuf Khan",
    role: "Owner, Saffron Kitchen",
    initials: "YK",
    grad: "from-amber-400 to-orange-500",
  },
  {
    quote:
      "My course launch sold out thanks to their funnel and site. They treated my mission like their own. The barakah in working with a halal team is real.",
    name: "Fatima Noor",
    role: "Course Creator, Ilm Academy",
    initials: "FN",
    grad: "from-emerald-400 to-teal-500",
  },
  {
    quote:
      "Professional, fast and completely aligned with our ethics. They scaled our launch with zero haram tactics. Genzuv is now our long-term growth partner.",
    name: "Bilal Ahmed",
    role: "CEO, Amana Finance",
    initials: "BA",
    grad: "from-sky-400 to-cyan-500",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-emerald-600/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Client Love"
          title={
            <>
              Trusted by Muslim founders <span className="text-gradient">worldwide</span>
            </>
          }
          desc="Real partnerships, real results — and a whole lot of dua from grateful founders."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {ITEMS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-7 transition-colors hover:border-emerald-400/20"
              data-delay={`${(i % 2) * 90}`}
            >
              <QuoteIcon className="h-9 w-9 text-emerald-400/20" />
              <blockquote className="mt-4 text-base leading-relaxed text-emerald-50/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5">
                <div className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${t.grad} text-sm font-bold text-ink`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-white">{t.name}</div>
                  <div className="text-xs text-emerald-50/55">{t.role}</div>
                </div>
                <div className="ml-auto text-gold">★★★★★</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
