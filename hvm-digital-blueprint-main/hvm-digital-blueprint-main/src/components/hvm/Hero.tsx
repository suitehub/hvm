import { ArrowUpRight, BarChart3, Crosshair, MessageCircle, TrendingUp } from "lucide-react";
import heroMonitors from "@/assets/hero-monitors.jpg";
import { Sparkline } from "./Sparkline";
import { WHATSAPP } from "./site-data";

const PARTNERS = ["Google Partner", "Meta Business Partner", "RD Station Partner", "Google Analytics"];

const DIFFS = [
  { icon: Crosshair, label: "Estratégias\npersonalizadas" },
  { icon: BarChart3, label: "Foco em dados\ne resultados" },
  { icon: TrendingUp, label: "Acompanhamento\npróximo" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* elemento circular azul ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 size-[520px] rounded-full border-[36px] border-primary/45 blur-[2px] lg:size-[620px]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-40 size-[560px] ambient-blue opacity-40" />

      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
        <div className="grid items-center gap-10 pb-10 pt-12 lg:grid-cols-[minmax(0,44%)_minmax(0,56%)] lg:gap-6 lg:pb-16 lg:pt-16">
          {/* Coluna esquerda */}
          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cyan">
              Agência de marketing digital
            </p>
            <h1 className="mt-5 text-[clamp(2.25rem,5.2vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-foreground">
              Performance que
              <br />
              <span className="text-gradient-blue">gera crescimento</span>
              <br />
              de verdade<span className="text-cyan">.</span>
            </h1>
            <p className="mt-6 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
              Estratégias personalizadas, gestão de tráfego e marketing orientado por dados para escalar
              seu negócio todos os meses.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-[13px] font-bold text-primary-foreground transition-all hover:brightness-110 hover:glow-blue"
              >
                <MessageCircle className="size-4" />
                Quero escalar meu negócio
              </a>
              <a
                href="#cases"
                className="inline-flex items-center rounded-md border border-border px-6 py-3.5 text-[13px] font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-accent"
              >
                Ver cases reais
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {DIFFS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <Icon className="size-4 shrink-0 text-cyan" />
                  <span className="whitespace-pre-line text-[11px] leading-tight text-muted-foreground">
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
                alt="Especialista da HVM analisando dashboards de performance em múltiplos monitores"
                width={1408}
                height={1200}
                className="w-full [mask-image:radial-gradient(120%_100%_at_60%_45%,black_55%,transparent_88%)]"
              />
              <span className="pointer-events-none absolute inset-x-6 bottom-1/3 top-1/4 -z-10 ambient-blue opacity-30" />
              <span className="pointer-events-none absolute bottom-[28%] left-[26%] text-center text-[clamp(1.5rem,3.4vw,2.4rem)] font-black leading-none tracking-tight text-foreground/85">
                HVM
                <span className="mt-1 block text-[0.28em] font-semibold tracking-[0.42em] text-foreground/60">
                  DIGITAL
                  <br />
                  PERFORMANCE
                </span>
              </span>
            </div>

            <article className="absolute -top-2 right-[16%] w-[172px] panel-card p-3.5 backdrop-blur-md sm:w-[196px]">
              <p className="text-[10px] text-muted-foreground">Faturamento gerado</p>
              <p className="mt-1 text-lg font-bold text-foreground">R$ 1.280.000</p>
              <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-cyan">
                <ArrowUpRight className="size-3" /> 137% vs. período anterior
              </p>
              <Sparkline className="mt-2 h-8 w-full" />
            </article>

            <article className="absolute bottom-[14%] right-0 w-[160px] panel-card p-3.5 backdrop-blur-md sm:w-[182px]">
              <p className="text-[10px] text-muted-foreground">Leads gerados</p>
              <p className="mt-1 text-lg font-bold text-foreground">2.642</p>
              <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-cyan">
                <ArrowUpRight className="size-3" /> 190% vs. período anterior
              </p>
              <Sparkline className="mt-2 h-8 w-full" />
            </article>
          </div>
        </div>

        {/* Barra de parceiros */}
        <div className="mb-16 flex flex-col gap-6 panel-card px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-[15px] font-semibold leading-snug text-foreground">
            Estratégia, tráfego e performance.
            <br />
            Tudo <span className="text-cyan">em um só lugar.</span>
          </p>
          <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:gap-10">
            {PARTNERS.map((p) => (
              <li
                key={p}
                className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/80"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}