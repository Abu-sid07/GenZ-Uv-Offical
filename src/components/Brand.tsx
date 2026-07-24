import type { SVGProps } from "react";

/** Genzuv logo mark — an 8-pointed Khatim star fused with a play/cursor vibe. */
export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} {...props}>
      <defs>
        <linearGradient id="lg-mark" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6ff3c9" />
          <stop offset="0.5" stopColor="#b6f55b" />
          <stop offset="1" stopColor="#f5c451" />
        </linearGradient>
      </defs>
      {/* 8-pointed star */}
      <path
        d="M24 3l4.6 7.1 8.4-1.5-1.5 8.4L42.6 24l-7.1 4.6 1.5 8.4-8.4-1.5L24 42.6l-4.6-7.1-8.4 1.5 1.5-8.4L5.4 24l7.1-4.6-1.5-8.4 8.4 1.5L24 3Z"
        fill="url(#lg-mark)"
        fillOpacity="0.16"
        stroke="url(#lg-mark)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* inner "G" */}
      <path
        d="M29.5 19.2a7.5 7.5 0 1 0 1.2 5.8h-5.2"
        stroke="url(#lg-mark)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 font-display font-bold tracking-tight ${className}`}>
      <img src="/GenZ-logo.jpeg" alt="Genzuv Logo" className="h-10 w-10    border-2  border-emerald-300 rounded-full " />
    </span>
  );
}
