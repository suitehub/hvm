import { laptop } from "@/assets/images";
import { WHATSAPP } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function GrowFast() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-1/4 size-[560px] ambient-blue opacity-25" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={laptop}
            alt={t.growFast.imgAlt}
            loading="lazy"
            width={1200}
            height={912}
            className="w-full rounded-2xl border border-border/40 shadow-2xl object-cover"
          />
        </div>

        <div>
          <h2 className="text-[clamp(1.6rem,3.2vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-foreground">
            <span className="text-gradient-blue">{t.growFast.titleHighlight}</span>{" "}
            {t.growFast.titleRest}
          </h2>
          <p className="mt-6 max-w-lg text-[13.5px] leading-relaxed text-muted-foreground">
            {t.growFast.p1}
          </p>
          <p className="mt-4 max-w-lg text-[13.5px] leading-relaxed text-muted-foreground">
            {t.growFast.p2}
          </p>
          <p className="mt-4 text-[13.5px] font-semibold text-cyan">
            {t.growFast.p3}
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-md bg-primary px-8 py-3.5 text-[13px] font-bold text-primary-foreground transition-all hover:brightness-110 hover:glow-blue"
          >
            {t.growFast.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}