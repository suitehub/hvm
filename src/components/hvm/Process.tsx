import { useLanguage } from "@/i18n/LanguageContext";
import { CheckCircle2, Compass, Cpu, LineChart, Target, Zap } from "lucide-react";

export function Process() {
  const { t } = useLanguage();

  const stepIcons = [Target, Compass, Cpu, Zap, LineChart];

  return (
    <section id="como-funciona" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">
            Metodologia & Execução
          </span>
          <h2 className="mt-3 text-[clamp(1.6rem,3.2vw,2.4rem)] font-extrabold tracking-tight text-foreground">
            {t.process.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {t.process.subtitle || "Uma metodologia estruturada passo a passo para transformar tráfego em vendas consistentes:"}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <article
                key={step.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan/50 hover:bg-card/90 hover:shadow-xl hover:shadow-cyan/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/20 text-cyan transition-colors group-hover:bg-cyan group-hover:text-black">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-sm font-extrabold text-cyan">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[14px] font-bold text-foreground group-hover:text-cyan transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[11px] font-semibold text-cyan/80">
                  <CheckCircle2 className="size-3.5" />
                  <span>Etapa Validada</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}