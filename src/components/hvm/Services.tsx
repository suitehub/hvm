import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Globe,
  Layers,
  Search,
  Share2,
  Sparkles,
  UserCheck,
  Phone,
  X,
  Target,
  BarChart,
  Code2,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { WHATSAPP_SPECIALIST, WHATSAPP_COMPANY } from "./site-data";

export function Services() {
  const { t } = useLanguage();
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);

  const topics = t.services.topics;
  const activeTopic = topics.find((item) => item.id === activeTopicId);

  // Listen to hash changes if someone navigates to a specific topic
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.includes("posicionamento-google")) {
        setActiveTopicId("posicionamento-google");
      } else if (hash.includes("meta-ads")) {
        setActiveTopicId("meta-ads");
      } else if (hash.includes("design-web")) {
        setActiveTopicId("design-web");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const getTopicIcon = (id: string) => {
    switch (id) {
      case "posicionamento-google":
        return Search;
      case "meta-ads":
        return Share2;
      case "design-web":
        return Globe;
      default:
        return Target;
    }
  };

  return (
    <section id="servicos" className="relative py-20 lg:py-28">
      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-50 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="size-3 text-primary" />
            {t.services.sectionBadge}
          </span>
          <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,2.7rem)] font-extrabold tracking-[-0.03em] text-slate-900">
            {t.services.sectionTitle}{" "}
            <span className="text-gradient-blue">{t.services.sectionHighlight}</span>
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
            {t.services.sectionDesc}
          </p>
        </div>

        {/* 3 Cards Principais */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = getTopicIcon(topic.id);
            return (
              <article
                key={topic.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-[12px] font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-primary">
                    {topic.subtitle}
                  </p>
                  <p className="mt-4 text-[13px] leading-relaxed text-slate-600">
                    {topic.shortDesc}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {topic.benefits.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActiveTopicId(topic.id)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50/80 px-4 py-2.5 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white hover:border-primary"
                  >
                    <span>{t.services.viewDetails}</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Modal / Página Expandida de Detalhes para os 3 Tópicos */}
        {activeTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
              {/* Fechar */}
              <button
                type="button"
                onClick={() => setActiveTopicId(null)}
                className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                aria-label="Fechar detalhes"
              >
                <X className="size-4" />
              </button>

              {/* Cabeçalho do Tópico */}
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-primary">
                  {(() => {
                    const Icon = getTopicIcon(activeTopic.id);
                    return <Icon className="size-6" />;
                  })()}
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    HVM Digital Performance • Especialidade
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                    {activeTopic.title}
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-sm font-bold text-primary">
                {activeTopic.subtitle}
              </p>

              {/* Informação aprofundada */}
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700">
                <p>{activeTopic.fullDesc}</p>
              </div>

              {/* Benefícios & Diferenciais */}
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <Target className="size-4 text-primary" />
                    Principais Vantagens
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-slate-600">
                    {activeTopic.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <BarChart className="size-4 text-primary" />
                    Entregáveis & Metodologia
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-slate-600">
                    {activeTopic.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="size-3.5 mt-0.5 shrink-0 text-primary" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ações de Conversão Diretas */}
              <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-slate-200 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Deseja implementar esta solução no seu negócio?
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Converse diretamente com nosso time para receber o plano de ação.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={`${WHATSAPP_SPECIALIST}?text=${encodeURIComponent(
                      `Olá, gostaria de saber mais detalhes e contratar o serviço de ${activeTopic.title} com a HVM!`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground transition-all hover:brightness-110"
                  >
                    <UserCheck className="size-3.5" />
                    <span>Falar com Especialista</span>
                  </a>

                  <a
                    href={WHATSAPP_COMPANY}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <Phone className="size-3.5 text-primary" />
                    <span>Empresa</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}