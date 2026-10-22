import { ArrowUpRight, BarChart3, Crosshair, MessageCircle, Phone, TrendingUp, UserCheck } from "lucide-react";
import { heroMonitors } from "@/assets/images";
import { Sparkline } from "./Sparkline";
import { WHATSAPP_SPECIALIST, WHATSAPP_COMPANY } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

const PARTNERS = ["Google Partner", "Meta Business Partner", "RD Station Partner", "Google Analytics 4"];

export function Hero() {
  const { t } = useLanguage();

  const diffs = [
    { icon: Crosshair, label: t.hero.diff1 },
    { icon: BarChart3, label: t.hero.diff2 },
    { icon: TrendingUp, label: t.hero.diff3 },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-20">
      {/* Elemento de iluminação circular azul */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 size-[540px] rounded-full border-[36px] border-primary/35 blur-[2px] lg:size-[640px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-32 size-[580px] ambient-blue opacity-35"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid items-center gap-10 pb-12 pt-10 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-8 lg:pb-16 lg:pt-14">
          {/* Coluna esquerda */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan">
              <span className="size-2 rounded-full bg-cyan animate-pulse" />
              {t.hero.badge}
            </span>

            <h1 className="mt-5 text-[clamp(2.3rem,5vw,3.6rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground">
              {t.hero.titleLine1}
              <br />
              <span className="text-gradient-blue">{t.hero.titleHighlight}</span>
              <br />
              {t.hero.titleLine3}
              <span className="text-cyan">.</span>
            </h1>

            <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-muted-foreground">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_SPECIALIST}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-[13px] font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110 hover:glow-blue"
              >
                <UserCheck className="size-4" />
                <span>{t.hero.ctaSpecialist}</span>
              </a>

              <a
                href={WHATSAPP_COMPANY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-accent/40 px-5 py-3.5 text-[13px] font-semibold text-foreground transition-all hover:bg-accent hover:border-cyan/50"
              >
                <Phone className="size-4 text-cyan" />
                <span>{t.hero.ctaCompany}</span>
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-border/50">
              {diffs.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className="grid size-7 place-items-center rounded-md bg-primary/15 text-cyan">
                    <Icon className="size-3.5" />
                  </span>
                  <span className="whitespace-pre-line text-[11px] font-medium leading-tight text-muted-foreground">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna direita: imagem + cards flutuantes */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroMonitors}
                alt={t.hero.imgAlt}
                width={1408}
                height={1200}
                className="w-full rounded-2xl border border-border/40 shadow-2xl object-cover"
              />
              <span className="pointer-events-none absolute inset-x-6 bottom-1/3 top-1/4 -z-10 ambient-blue opacity-30" />
            </div>

            <article className="absolute -top-3 right-[12%] w-[180px] panel-card p-3.5 backdrop-blur-md sm:w-[200px] border border-cyan/20 shadow-xl">
              <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                {t.hero.revenueLabel}
              </p>
              <p className="mt-1 text-lg font-black text-foreground">{t.hero.revenueValue}</p>
              <p className="mt-1 flex items-center gap-1 text-[10px] font-bold text-cyan">
                <ArrowUpRight className="size-3" /> {t.hero.revenueGrowth}
              </p>
              <Sparkline className="mt-2 h-7 w-full" />
            </article>

            <article className="absolute bottom-[10%] right-0 w-[170px] panel-card p-3.5 backdrop-blur-md sm:w-[190px] border border-cyan/20 shadow-xl">
              <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                {t.hero.leadsLabel}
              </p>
              <p className="mt-1 text-lg font-black text-foreground">{t.hero.leadsValue}</p>
              <p className="mt-1 flex items-center gap-1 text-[10px] font-bold text-cyan">
                <ArrowUpRight className="size-3" /> {t.hero.leadsGrowth}
              </p>
              <Sparkline className="mt-2 h-7 w-full" />
            </article>
          </div>
        </div>

        {/* Barra de parceiros */}
        <div className="mb-14 flex flex-col gap-6 panel-card px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 border border-white/5">
          <p className="text-[14px] font-semibold leading-snug text-foreground">
            {t.hero.partnersTitle1}
            <br />
            {t.hero.partnersTitle2}{" "}
            <span className="text-cyan font-bold">{t.hero.partnersHighlight}</span>
          </p>
          <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:gap-10">
            {PARTNERS.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80"
              >
                <span className="size-1.5 rounded-full bg-cyan/70" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}