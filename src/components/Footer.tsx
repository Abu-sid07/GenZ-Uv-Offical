import { useState } from "react";
import { Wordmark } from "./Brand";
import { StarShape } from "./Geometric";

const COLS = [
  {
    title: "Services",
    links: ["Video Editing", "Content Creation", "Social Media", "Branding", "AI Automation", "Web Development"],
  },
  {
    title: "Company",
    links: ["Why Genzuv", "Our Work", "Pricing", "FAQ", "Book a Call"],
  },
];

const SOCIALS: { label: string; href: string; path: string }[] = [
  { label: "Instagram", href: "#", path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.5A6.3 6.3 0 1 0 18.3 12 6.3 6.3 0 0 0 12 5.7Zm0 10.4A4.1 4.1 0 1 1 16.1 12 4.1 4.1 0 0 1 12 16.1Zm6.5-10.6a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5Z" },
  { label: "TikTok", href: "#", path: "M16.5 3c.3 2 1.5 3.6 3.5 4v2.4c-1.3 0-2.5-.3-3.6-.9v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.5a3.1 3.1 0 1 0 2.2 3V3h2.6Z" },
  { label: "YouTube", href: "#", path: "M21.6 7.2a2.5 2.5 0 0 0-1.7-1.8C18.2 5 12 5 12 5s-6.2 0-7.9.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.7 1.8C5.8 19 12 19 12 19s6.2 0 7.9-.4a2.5 2.5 0 0 0 1.7-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3Z" },
  { label: "X", href: "#", path: "M17.5 3h3l-6.5 7.4L21.8 21h-5.9l-4.3-5.6L6.7 21H3.6l7-7.9L2.7 3h6l3.9 5.1L17.5 3Zm-1 16h1.6L7.6 4.6H5.9L16.5 19Z" },
  { label: "LinkedIn", href: "#", path: "M6.5 8.5v10H3.7v-10h2.8ZM5.1 3.5a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2ZM20.3 18.5h-2.8v-5.3c0-1.3-.5-2-1.6-2-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v5.2H9.3s.1-9 0-10h2.8v1.4a2.8 2.8 0 0 1 2.5-1.4c1.9 0 3.2 1.2 3.2 3.9v6.1Z" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const WHATSAPP_NUMBER = "919566180862";

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const message = `
*New Newsletter Subscription!*

Email: ${email}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink-2/60 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
      <StarShape className="animate-float-slow absolute -right-10 top-24 h-40 w-40 text-emerald-400/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-emerald-50/55">
              A Gen-Z digital marketing agency helping Muslim entrepreneurs build halal brands that
              grow with barakah.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-emerald-50/60 transition-all hover:border-emerald-400/30 hover:text-emerald-glow"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[1.05rem] w-[1.05rem]">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#contact"
                      className="text-sm text-emerald-50/55 transition-colors hover:text-emerald-glow"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* newsletter */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Stay in the loop</h4>
            <p className="mt-4 text-sm text-emerald-50/55">
              Halal marketing tips & growth ideas. Weekly, in sha Allah.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-emerald-50/30 outline-none focus:border-emerald-400/50"
              />
              <button type="submit" className="shrink-0 rounded-xl bg-gradient-to-r from-emerald-400 to-gold px-4 py-2.5 text-sm font-semibold text-ink">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 py-6 sm:flex-row">
          <p className="text-xs text-emerald-50/45">
            © {new Date().getFullYear()} Genzuv Digital Marketing Agency. All rights reserved.
          </p>
          <p className="text-xs text-emerald-50/45">
            بسم الله الرحمن الرحيم · Made with <span className="text-emerald-glow">barakah</span> 🌙
          </p>
          <div className="flex gap-5 text-xs text-emerald-50/45">
            <a href="#" className="hover:text-emerald-glow">Privacy</a>
            <a href="#" className="hover:text-emerald-glow">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
