export function Sparkline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 36" fill="none" className={className} aria-hidden="true">
      <path
        d="M1 32 L14 27 L24 30 L34 20 L46 24 L58 14 L70 18 L82 10 L94 13 L108 5 L118 2"
        stroke="var(--cyan)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M1 32 L14 27 L24 30 L34 20 L46 24 L58 14 L70 18 L82 10 L94 13 L108 5 L118 2 L118 36 L1 36 Z"
        fill="url(#spark)"
        opacity="0.35"
      />
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}