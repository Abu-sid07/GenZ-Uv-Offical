import type { SVGProps } from "react";

/** A single decorative 8-pointed star (Khatim). */
export function StarShape({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} {...props}>
      <path
        d="M50 4l9 14 16.5-3-3 16.5L86.5 50l-14 9 3 16.5L59 72.5 50 86.5l-9-14-16.5 3 3-16.5L13.5 50l14-9-3-16.5L41 27.5 50 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M50 28l5 8 9-1.6-1.6 9 8 5-8 5 1.6 9-9-1.6L50 68l-5-8-9 1.6 1.6-9-8-5 8-5-1.6-9 9 1.6 5-8Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Tiled Islamic geometric pattern used as a subtle background. */
export function PatternField({ className = "", opacity = 0.5 }: { className?: string; opacity?: number }) {
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id="khatim-tile" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
          <g fill="none" stroke="#2dd4a7" strokeWidth="0.9" opacity={opacity}>
            <path d="M40 8l7 11 13-2.4-2.4 13 11 7-11 7 2.4 13-13-2.4-7 11-7-11-13 2.4 2.4-13-11-7 11-7-2.4-13 13 2.4 7-11Z" />
            <path d="M40 28l4 6 7.5-1.4-1.4 7.5 6 4-6 4 1.4 7.5L44 54l-4 6-4-6-7.5 1.4 1.4-7.5-6-4 6-4-1.4-7.5 7.5 1.4 4-6Z" opacity="0.6" />
            <circle cx="40" cy="40" r="3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#khatim-tile)" />
    </svg>
  );
}
