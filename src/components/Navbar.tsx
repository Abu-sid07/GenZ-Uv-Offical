import { useEffect, useState } from "react";
import { Wordmark } from "./Brand";
import { MenuIcon, CloseIcon, ArrowIcon } from "../lib/icons";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Genzuv", href: "#why" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0  z-50 transition-all ease-in-out duration-1000 ${
        scrolled ? "py-2 top-0" : "py-4"
      }`}
    >
      <div className="mx-auto w-full px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 group ${
            scrolled
              ? "glass-strong border border-emerald-400/50 shadow-2xl shadow-black/40"
              : "border border-transparent"
          }`}
        >
          <a href="#top" className="shrink-0 flex gap-1 items-center  ">
            <Wordmark  className='group-hover:scale-105 group-hover:rotate-6  shadow-xl shadow-amber-500 group-hover:shadow-emerald-300 rounded-full transition-all ease-in-out duration-500'/>
            <p className='group-hover:scale-105'>Genz UV</p>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-emerald-50/70 transition-colors hover:bg-emerald-400/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-lime-glow to-gold px-4.5 py-2.5 text-sm font-semibold text-ink shadow-lg shadow-emerald-500/20 transition-transform hover:scale-[1.03] sm:flex"
            >
              Book a Free Call
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/15 bg-emerald-400/5 text-white lg:hidden"
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 origin-top transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={`relative mx-4 mt-24 rounded-3xl border border-emerald-400/15 bg-ink-2/95 p-5 shadow-2xl transition-all duration-300 ${
            open ? "translate-y-0 scale-100" : "-translate-y-3 scale-95"
          }`}
        >
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-3.5 text-base font-medium text-emerald-50/80 last:border-0"
              >
                {l.label}
                <ArrowIcon className="h-4 w-4 text-emerald-400/60" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-gold px-4 py-3 text-sm font-semibold text-ink"
          >
            Book a Free Call <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
