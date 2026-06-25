import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const VideoIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2" y="5" width="14" height="14" rx="2.5" />
    <path d="m16 9 6-3v12l-6-3" />
    <path d="M7 10.5v3l2.5-1.5z" fill="currentColor" stroke="none" />
  </svg>
);

export const ContentIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="M3 13l9 5 9-5" />
    <path d="M3 17.5 12 22l9-4.5" opacity="0.5" />
  </svg>
);

export const SocialIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M8.6 10.6 15.4 7.4M8.6 13.4l6.8 3.2" />
  </svg>
);

export const BrandIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 11h18l-1.2-5.2A2 2 0 0 0 17.9 4H6.1a2 2 0 0 0-1.9 1.8L3 11Z" />
    <path d="M3 11v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M12 7v4" />
    <circle cx="12" cy="15.5" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const AutomationIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="7" width="16" height="13" rx="3" />
    <path d="M9 3c0 1.5 1 2 3 2s3 .5 3 2" />
    <circle cx="9" cy="13" r="1.3" fill="currentColor" stroke="none" />
    <path d="M12 11.5v3M14.5 13h-5" />
  </svg>
);

export const WebIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="4" width="19" height="14" rx="2.5" />
    <path d="M2.5 8h19" />
    <path d="M7 21h10M12 18v3" />
    <path d="m9 13 2 2 4-4" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const SparkIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8c.6 2.3 1.7 3.4 4 4-2.3.6-3.4 1.7-4 4-.6-2.3-1.7-3.4-4-4 2.3-.6 3.4-1.7 4-4Z" fill="currentColor" stroke="none" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const BoltIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

export const ChartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-4.6-9.2-9C1.3 9 2.6 5.5 6 5.5c2 0 3.2 1.3 4 2.5.8-1.2 2-2.5 4-2.5 3.4 0 4.7 3.5 3.2 6.5C19 16.4 12 21 12 21Z" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const PlayIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 5v14l11-7z" fill="currentColor" stroke="none" />
  </svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9.5 6C6.5 7.2 5 9.6 5 13v5h6v-6H8c0-2 .8-3.4 2.6-4.2L9.5 6Zm9 0c-3 1.2-4.5 3.6-4.5 7v5h6v-6h-3c0-2 .8-3.4 2.6-4.2L18.5 6Z" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20.5 11.5c0 5-4 9-9 9-1.7 0-3.3-.4-4.7-1.2L2 21l1.3-4.7C2.4 14.8 2 13.2 2 11.5c0-5 4-9 9-9s9 4 9 9Z" />
    <path d="M8.2 9.5c.1.3.4.7.8 1 .4.3.8.4.9.5s.2.1.3.3.2.5l.4.8c.1.3.1.5-.1.8-.3.3-.8 1.2-.2 2 .7.8 1.3 1.3 2 1.5 1.1.3 2.4.3 3.4.1l1-.2.7-.6 1-1 .3-.4.4-1.3.1-1.7-.2-.3-.3-.4-.6-.3h-.5l-.6-.4c-.3-.3.2-.7.3-1l1.1-2c.1-.2.2-.5.1-.7-.1-.2-.2-.4-.4-.5-.3-.1-.6-.2-.9-.2H13c-.4 0-.8.1-1.1.3l-1 .6c-.4.2-.8.4-1.1.5-.6.3c-.2 0-.4.1-.6-.1l-.7-.5c-.2-.1-.3-.3-.3-.5z" fill="currentColor" stroke="none" />
  </svg>
);
