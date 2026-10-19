import { chessAuthority } from "@/assets/images";
import { useLanguage } from "@/i18n/LanguageContext";

export function Authority() {
  const { t } = useLanguage();

  const stats = [
    { v: t.authority.statYearsVal, l: t.authority.statYears },
    { v: t.authority.statRetentionVal, l: t.authority.statRetention },
    { v: t.authority.statInvestedVal, l: t.authority.statInvested },
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute right-1/4 top-0 size-[520px] ambient-blue opacity-20" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:px-8">
        <div>
          <h2 className="text-[clamp(1.2rem,2.2vw,1.5rem)] font-extrabold leading-snug tracking-[-0.02em] text-foreground">
            {t.authority.title1}
            <br />
            <span className="text-gradient-blue">{t.authority.titleHighlight}</span>
            <br />
            {t.authority.title3Prefix} <span className="text-cyan">{t.authority.title3Highlight}</span>
          </h2>
          <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-muted-foreground">
            {t.authority.description}
          </p>
          <dl className="mt-8 flex flex-wrap gap-8">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="text-lg font-bold leading-none text-foreground">{s.v}</dd>
                <dd className="mt-1 text-[10px] text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={chessAuthority}
            alt={t.authority.imgAlt}
            loading="lazy"
            width={800}
            height={1008}
            className="w-48 sm:w-64 lg:w-72 rounded-xl border border-border/30 opacity-90 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}