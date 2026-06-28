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
      "The website design is absolutely stunning with a beautiful UI that makes navigation effortless. The smooth animations enhance the user experience and make learning feel interactive and engaging.",
    name: "Khaja Sir",
    role: "English Fluency Guide",
    initials: "KS",
    grad: "from-blue-400 to-indigo-500",
  },
  {
    quote:
      "From the moment I visited the website, the beautiful design and smooth animations caught my attention. The enrollment process was so straightforward that I signed up immediately. Truly impressive!",
    name: "Noorul Ameen",
    role: "Supporting Staff",
    initials: "NA",
    grad: "from-orange-400 to-red-500",
  },
  {
    quote:
      "I was impressed by how modern and clean the website looks. The UI is so intuitive that I could easily explore all courses and sign up without any confusion or complications.",
    name: "Abdullah",
    role: "Current Student",
    initials: "ABD",
    grad: "from-green-400 to-emerald-500",
  },
  {
    quote:
      "The website's design and animations are incredible. What impressed me most is how simple the enrollment process is—I registered for the course in just a few minutes without any hassle.",
    name: "Musthakeem",
    role: "Old Batch Student",
    initials: "MS",
    grad: "from-purple-400 to-pink-500",
  },
  
  {
    quote:
      "Our website combines stunning UI design with seamless animations that keep students engaged. The enrollment process is so user-friendly that conversion rates have significantly improved.",
    name: "Kabeer Sir",
    role: "Academy Coordinator",
    initials: "KB",
    grad: "from-teal-400 to-cyan-500",
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
              Trusted by Principled founders <span className="text-gradient">worldwide</span>
            </>
          }
          desc="Real partnerships, real results — and a whole lot of dua from grateful founders."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-7 transition-colors hover:border-emerald-400/20"
              data-delay={`${(i % 3) * 90}`}
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
