import { ArrowUpRight, Flame, Phone, ShieldCheck, UserCheck, Zap } from "lucide-react";
import { growthDashboard } from "@/assets/images";
import { WHATSAPP_SPECIALIST, WHATSAPP_COMPANY } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function GrowFast() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-transparent via-cyan/5 to-transparent">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 size-[560px] ambient-blue opacity-30"
      />
      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Imagem de Alto Impacto (Dashboard de Crescimento Exponencial) */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-cyan opacity-25 blur-lg transition duration-500 group-hover:opacity-40" />
            <div className="relative">
              <img
                src={growthDashboard}
                alt={t.growFast.imgAlt}
                loading="lazy"
                width={1200}
                height={900}
                className="w-full rounded-2xl border border-white/20 shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/60 p-3.5 backdrop-blur-md flex items-center justify-between sm:p-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-cyan/20 text-cyan">
                    <Zap className="size-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold text-white uppercase tracking-wider">
                      Crescimento Exponencial
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      Otimização algorítmica contínua
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-cyan/20 px-3 py-1 text-[11px] font-extrabold text-cyan">
                  +315% Tráfego
                </span>
              </div>
            </div>
          </div>

          {/* Texto Expressivo e Ação */}
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan">
              <Flame className="size-3.5 text-cyan" />
              <span>Aceleração Digital</span>
            </div>

            <h2 className="mt-4 text-[clamp(1.7rem,3.4vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-foreground">
              <span className="text-gradient-blue">{t.growFast.titleHighlight}</span>{" "}
              {t.growFast.titleRest}
            </h2>

            <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">
              {t.growFast.p1}
            </p>

            <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
              {t.growFast.p2}
            </p>

            <div className="mt-4 flex items-center gap-2 text-[14px] font-bold text-cyan">
              <ShieldCheck className="size-5 text-cyan" />
              <span>{t.growFast.p3}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_SPECIALIST}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-[13px] font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110 hover:glow-blue"
              >
                <UserCheck className="size-4" />
                <span>{t.growFast.ctaSpecialist}</span>
              </a>

              <a
                href={WHATSAPP_COMPANY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-accent/40 px-5 py-3.5 text-[13px] font-semibold text-foreground transition-all hover:bg-accent"
              >
                <Phone className="size-4 text-cyan" />
                <span>{t.growFast.ctaCompany}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}