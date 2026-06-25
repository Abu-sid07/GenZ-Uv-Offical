import { useState, type FormEvent } from "react";
import { ArrowIcon, CheckIcon, MailIcon, MapPinIcon, BoltIcon, ShieldIcon, WhatsAppIcon } from "../lib/icons";

const SERVICES = [
  "Video Editing",
  "Content Creation",
  "Social Media",
  "Branding",
  "AI Automation",
  "Web Development",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState<string[]>(["Video Editing"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const WHATSAPP_NUMBER = "919566180862";

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const message = `
*New Free Call Request!*

Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.business || "Not provided"}
Interested in: ${picked.join(", ")}
Message: ${formData.message || "Not provided"}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald-500/12 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          {/* Left — pitch */}
          <div className="reveal relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-gradient-to-br from-emerald-500/[0.1] via-ink-2 to-ink-2 p-8 sm:p-10">
            <div className="absolute inset-0 grid-bg opacity-25" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-xs font-medium text-emerald-glow">
                <BoltIcon className="h-3.5 w-3.5" /> Free 30-min strategy call
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Let's build your brand's <span className="text-gradient">next chapter</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-emerald-50/65">
                Bismillah — tell us about your vision. We'll send back a free, no-pressure growth
                plan tailored to your halal business within 24 hours.
              </p>
            </div>

            <div className="relative mt-8 space-y-3">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-emerald-50/80 transition-colors hover:bg-white/[0.06]">
                <WhatsAppIcon className="h-5 w-5 text-emerald-glow" /> +91 95661 80862 · Free call
              </a>
              <a href="mailto:hello@genzuv.com" className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-emerald-50/80 transition-colors hover:bg-white/[0.06]">
                <MailIcon className="h-5 w-5 text-emerald-glow" /> hello@genzuv.com
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-emerald-50/80">
                <MapPinIcon className="h-5 w-5 text-emerald-glow" /> Remote · Serving the global Ummah
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-emerald-50/80">
                <ShieldIcon className="h-5 w-5 text-emerald-glow" /> We reply within 24 hours, in sha Allah
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.02] p-7 sm:p-8" data-delay="120">
            {sent ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-400/15 text-emerald-glow">
                  <CheckIcon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">Jazak Allahu Khairan! 🤲</h3>
                <p className="mt-2 max-w-sm text-sm text-emerald-50/65">
                  Your message is on its way. A Genzuv strategist will reach out within 24 hours with
                  your free growth plan.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormData({
                      name: "",
                      email: "",
                      business: "",
                      message: "",
                    });
                    setPicked(["Video Editing"]);
                  }}
                  className="mt-6 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field 
                    label="Your name" 
                    name="name" 
                    placeholder="Ronaldo" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <Field 
                    label="Email" 
                    name="email" 
                    type="email" 
                    placeholder="you@brand.com" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <Field 
                  label="Business / brand" 
                  name="business" 
                  placeholder="Noor Apparel"
                  value={formData.business}
                  onChange={handleInputChange}
                />

                <div>
                  <label className="mb-2.5 block text-xs font-medium uppercase tracking-wide text-emerald-50/55">
                    I'm interested in
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => {
                      const on = picked.includes(s);
                      return (
                        <button
                          type="button"
                          key={s}
                          onClick={() => toggle(s)}
                          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                            on
                              ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-glow"
                              : "border-white/10 bg-white/[0.02] text-emerald-50/60 hover:border-white/20"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-emerald-50/55">
                    Tell us about your goals
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g. We want to grow our modest fashion brand on Instagram and launch a new collection…"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-emerald-50/30 outline-none transition-colors focus:border-emerald-400/50 focus:bg-white/[0.05]"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-lime-glow to-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-xl shadow-emerald-500/25 transition-transform hover:scale-[1.02]"
                >
                  Get my free growth plan
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-emerald-50/40">
                  No spam, ever. We only do honest, halal marketing.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-emerald-50/55">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-emerald-50/30 outline-none transition-colors focus:border-emerald-400/50 focus:bg-white/[0.05]"
      />
    </div>
  );
}
