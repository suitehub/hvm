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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">
            <Sparkles className="size-3 text-cyan" />
            {t.services.sectionBadge}
          </span>
          <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,2.7rem)] font-extrabold tracking-[-0.03em] text-foreground">
            {t.services.sectionTitle}{" "}
            <span className="text-gradient-blue">{t.services.sectionHighlight}</span>
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
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
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-card/50 p-7 backdrop-blur-md transition-all duration-300 hover:border-cyan/50 hover:bg-card/90 hover:shadow-2xl hover:shadow-cyan/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-primary/20 text-cyan transition-colors group-hover:bg-cyan group-hover:text-black">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-[12px] font-mono font-bold text-muted-foreground/60">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground group-hover:text-cyan transition-colors">
                    {topic.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-cyan">
                    {topic.subtitle}
                  </p>
                  <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                    {topic.shortDesc}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-border/60 pt-5">
                    {topic.benefits.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-cyan" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40">
                  <button
                    type="button"
                    onClick={() => setActiveTopicId(topic.id)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-4 py-2.5 text-xs font-bold text-cyan transition-all hover:bg-cyan hover:text-black"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/20 bg-background/98 p-6 shadow-2xl sm:p-8">
              {/* Fechar */}
              <button
                type="button"
                onClick={() => setActiveTopicId(null)}
                className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-border bg-accent text-foreground transition-colors hover:bg-destructive hover:text-white"
                aria-label="Fechar detalhes"
              >
                <X className="size-4" />
              </button>

              {/* Cabeçalho do Tópico */}
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-cyan/20 text-cyan">
                  {(() => {
                    const Icon = getTopicIcon(activeTopic.id);
                    return <Icon className="size-6" />;
                  })()}
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan">
                    HVM Digital Performance • Especialidade
                  </span>
                  <h3 className="text-xl font-extrabold text-foreground sm:text-2xl">
                    {activeTopic.title}
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-sm font-semibold text-cyan">
                {activeTopic.subtitle}
              </p>

              {/* Informação aprofundada */}
              <div className="mt-6 rounded-xl border border-white/10 bg-accent/30 p-5 text-sm leading-relaxed text-muted-foreground">
                <p>{activeTopic.fullDesc}</p>
              </div>

              {/* Benefícios & Diferenciais */}
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card/60 p-4">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                    <Target className="size-4 text-cyan" />
                    Principais Vantagens
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                    {activeTopic.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 mt-0.5 shrink-0 text-cyan" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card/60 p-4">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                    <BarChart className="size-4 text-cyan" />
                    Entregáveis & Metodologia
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                    {activeTopic.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="size-3.5 mt-0.5 shrink-0 text-cyan" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ações de Conversão Diretas */}
              <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-border sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Deseja implementar esta solução no seu negócio?
                  </p>
                  <p className="text-[11px] text-muted-foreground">
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
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-accent/60 px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                  >
                    <Phone className="size-3.5 text-cyan" />
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