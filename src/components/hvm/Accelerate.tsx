import { LineChart, Megaphone, PenTool, Share2 } from "lucide-react";
import { chess } from "@/assets/images";
import { WHATSAPP } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function Accelerate() {
  const { t } = useLanguage();

  const stats = [
    { value: "100+", label: t.accelerate.statProjects },
    { value: "50+", label: t.accelerate.statClients },
    { value: "500k+", label: t.accelerate.statAds },
  ];

  const structure = [
    { icon: LineChart, label: t.accelerate.structureStrategy },
    { icon: Megaphone, label: t.accelerate.structurePaidTraffic },
    { icon: Share2, label: t.accelerate.structureSocialMedia },
    { icon: PenTool, label: t.accelerate.structureWebDesign },
  ];

  return (
    <section id="sobre" className="relative overflow-hidden py-16 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-10 size-[620px] ambient-blue opacity-25" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:px-8">
        <div>
          <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">
            {t.accelerate.title1}
            <br />
            {t.accelerate.title2}
            <br />
            <span className="text-gradient-blue">{t.accelerate.titleHighlight}</span>
          </h2>
          <p className="mt-6 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">
              {t.accelerate.descriptionBold}
            </span>{" "}
            {t.accelerate.descriptionRest}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary px-7 py-3.5 text-[13px] font-bold text-primary-foreground transition-all hover:brightness-110 hover:glow-blue"
            >
              {t.accelerate.ctaButton}
            </a>
            <dl className="flex gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-border px-4 py-2.5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-lg font-bold leading-none text-foreground">{s.value}</dd>
                  <dd className="mt-1 text-[10px] text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-12 text-[15px] font-semibold text-foreground">{t.accelerate.structureTitle}</p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4 panel-card px-6 py-5">
            {structure.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-full bg-primary/15 text-cyan">
                  <Icon className="size-4" />
                </span>
                <span className="text-[11px] font-semibold text-foreground">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src={chess}
            alt={t.accelerate.imgAlt}
            loading="lazy"
            width={1200}
            height={1008}
            className="w-full rounded-2xl border border-border/40 shadow-2xl object-cover"
          />
          <article className="absolute left-[6%] top-[8%] w-[124px] rounded-xl bg-primary p-3 text-primary-foreground shadow-lg">
            <p className="text-[9px] opacity-80">{t.accelerate.investmentLabel}</p>
            <p className="mt-1 text-base font-bold">3480<span className="text-[10px]">{t.accelerate.investmentPeriod}</span></p>
            <p className="mt-1 text-[9px] opacity-80">{t.accelerate.roiLabel}</p>
          </article>
          <article className="absolute bottom-[6%] left-0 w-[190px] panel-card p-3.5">
            <p className="text-[10px] text-muted-foreground">{t.accelerate.organicGrowthLabel}</p>
            <p className="mt-1 text-base font-bold text-foreground">68%</p>
            <p className="mt-1 text-[9px] text-muted-foreground">{t.accelerate.organicGrowthPeriod}</p>
          </article>
        </div>
      </div>
    </section>
  );
}