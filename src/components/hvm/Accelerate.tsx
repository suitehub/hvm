import {
  BarChart3,
  CheckCircle2,
  Filter,
  Globe,
  Layers,
  LineChart,
  Megaphone,
  Search,
  Sparkles,
  TrendingUp,
  UserCheck,
  Phone,
} from "lucide-react";
import { chess } from "@/assets/images";
import { WHATSAPP_SPECIALIST, WHATSAPP_COMPANY } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function Accelerate() {
  const { t } = useLanguage();

  const stats = [
    { value: "+100", label: t.accelerate.statProjects },
    { value: "+100", label: t.accelerate.statClients },
    { value: "+100k", label: t.accelerate.statAds },
  ];

  const structureIcons = [
    Megaphone, // 1. Gestão de Tráfego Pago
    Layers,    // 2. Google Ads e Meta Ads
    Search,    // 3. SEO e Posicionamento no Google
    Filter,    // 4. Geração de Leads
    Globe,     // 5. Landing Pages
    LineChart, // 6. Análise de Dados e Resultados
  ];

  return (
    <section id="estrutura" className="relative overflow-hidden py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 size-[620px] ambient-blue opacity-25"
      />
      
      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,48%)_minmax(0,52%)]">
          {/* Coluna de texto & stats */}
          <div>
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900">
              {t.accelerate.title1}
              <br />
              {t.accelerate.title2}
              <br />
              <span className="text-gradient-blue">{t.accelerate.titleHighlight}</span>
            </h2>

            <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-slate-600">
              <span className="font-bold text-slate-900">
                {t.accelerate.descriptionBold}
              </span>{" "}
              {t.accelerate.descriptionRest}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_SPECIALIST}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-[13px] font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110 hover:glow-blue"
              >
                <UserCheck className="size-4" />
                {t.accelerate.ctaSpecialist}
              </a>

              <a
                href={WHATSAPP_COMPANY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3.5 text-[13px] font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-primary/50"
              >
                <Phone className="size-4 text-primary" />
                {t.accelerate.ctaCompany}
              </a>
            </div>

            {/* 3 Estatísticas Atualizadas */}
            <dl className="mt-9 flex flex-wrap gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="min-w-[120px] rounded-xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl font-black leading-none text-primary">
                    {s.value}
                  </dd>
                  <dd className="mt-1.5 text-[11px] font-semibold text-slate-600">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Imagem de autoridade estratégica */}
          <div className="relative group">
            <img
              src={chess}
              alt={t.accelerate.imgAlt}
              loading="lazy"
              width={1200}
              height={1008}
              className="w-full rounded-2xl border border-slate-200 shadow-2xl shadow-blue-900/10 object-cover"
            />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-xl border border-blue-200/90 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold text-slate-900">Planejamento Estratégico HVM</span>
              <span className="text-[10px] font-semibold text-primary">• Métricas & Escala</span>
            </div>
          </div>
        </div>

        {/* ESTRUTURA COMPLETA (6 ITENS ESPECÍFICOS) */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Arquitetura de Conversão
            </span>
            <h3 className="mt-2 text-[clamp(1.4rem,2.5vw,1.9rem)] font-extrabold tracking-tight text-slate-900">
              {t.accelerate.structureTitle}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {t.accelerate.structureSubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.accelerate.structureItems.map((item, index) => {
              const Icon = structureIcons[index % structureIcons.length];
              return (
                <article
                  key={item.title}
                  className="group relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <h4 className="text-[13.5px] font-bold text-slate-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-3.5 text-[12px] leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}