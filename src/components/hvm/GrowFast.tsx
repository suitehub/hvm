import { ArrowUpRight, Flame, Phone, ShieldCheck, UserCheck, Zap } from "lucide-react";
import { growthDashboard } from "@/assets/images";
import { WHATSAPP_SPECIALIST, WHATSAPP_COMPANY } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function GrowFast() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 size-[560px] ambient-blue opacity-30"
      />
      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Imagem de Alto Impacto (Dashboard de Crescimento Exponencial) */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-cyan opacity-20 blur-lg transition duration-500 group-hover:opacity-30" />
            <div className="relative">
              <img
                src={growthDashboard}
                alt={t.growFast.imgAlt}
                loading="lazy"
                width={1200}
                height={900}
                className="w-full rounded-2xl border border-slate-200 shadow-2xl shadow-blue-900/10 object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-slate-200/90 bg-white/95 p-3.5 backdrop-blur-md flex items-center justify-between shadow-xl sm:p-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-blue-50 text-primary">
                    <Zap className="size-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                      HVM Analytics • Crescimento Exponencial
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Tecnologia & Otimização Contínua HVM
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-[11px] font-extrabold text-primary">
                  +315% Tráfego
                </span>
              </div>
            </div>
          </div>

          {/* Texto Expressivo e Ação */}
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              <Flame className="size-3.5 text-primary" />
              <span>Aceleração Digital</span>
            </div>

            <h2 className="mt-4 text-[clamp(1.7rem,3.4vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-slate-900">
              <span className="text-gradient-blue">{t.growFast.titleHighlight}</span>{" "}
              {t.growFast.titleRest}
            </h2>

            <p className="mt-5 text-[14px] leading-relaxed text-slate-600">
              {t.growFast.p1}
            </p>

            <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
              {t.growFast.p2}
            </p>

            <div className="mt-4 flex items-center gap-2 text-[14px] font-bold text-primary">
              <ShieldCheck className="size-5 text-primary" />
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
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3.5 text-[13px] font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-primary/50"
              >
                <Phone className="size-4 text-primary" />
                <span>{t.growFast.ctaCompany}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}