export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`} aria-label="HVM Digital Performance">
      <span className="text-xl font-black tracking-tight text-foreground">HVM</span>
      <span className="hidden text-[8px] font-semibold uppercase leading-[1.25] tracking-[0.18em] text-muted-foreground sm:block">
        Digital
        <br />
        Performance
      </span>
    </a>
  );
}