import { chessAuthority } from "@/assets/images";
import { useLanguage } from "@/i18n/LanguageContext";
import { Award, ShieldCheck, TrendingUp } from "lucide-react";

export function Authority() {
  const { t } = useLanguage();

  const stats = [
    { v: t.authority.statYearsVal, l: t.authority.statYears, icon: Award },
    { v: t.authority.statRetentionVal, l: t.authority.statRetention, icon: ShieldCheck },
    { v: t.authority.statInvestedVal, l: t.authority.statInvested, icon: TrendingUp },
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-0 size-[520px] ambient-blue opacity-20"
      />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:px-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Autoridade & Confiança
          </span>
          <h2 className="mt-3 text-[clamp(1.4rem,2.8vw,2rem)] font-extrabold leading-snug tracking-[-0.02em] text-slate-900">
            {t.authority.title1}
            <br />
            <span className="text-gradient-blue">{t.authority.titleHighlight}</span>
            <br />
            {t.authority.title3Prefix} <span className="text-primary">{t.authority.title3Highlight}</span>
          </h2>
          
          <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-slate-600">
            {t.authority.description}
          </p>

          <dl className="mt-9 flex flex-wrap gap-6 sm:gap-10">
            {stats.map(({ v, l, icon: Icon }) => (
              <div
                key={l}
                className="rounded-xl border border-slate-200 bg-white p-4 min-w-[140px] shadow-sm"
              >
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Icon className="size-4" />
                </div>
                <dt className="sr-only">{l}</dt>
                <dd className="text-2xl font-black leading-none text-slate-900">{v}</dd>
                <dd className="mt-1.5 text-[11px] font-semibold text-slate-500">{l}</dd>
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
            className="w-56 sm:w-64 lg:w-80 rounded-2xl border border-slate-200 object-cover shadow-2xl shadow-blue-900/10"
          />
        </div>
      </div>
    </section>
  );
}