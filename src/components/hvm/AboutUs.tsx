import { Award, CheckCircle2, ChevronRight, Mail, Phone, Shield, Sparkles, UserCheck, Users } from "lucide-react";
import { founderProfile, isabellaProfile } from "@/assets/images";
import { WHATSAPP_SPECIALIST, WHATSAPP_COMPANY, CONTACT_EMAIL } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function AboutUs() {
  const { t } = useLanguage();
  const a = t.aboutSection;

  return (
    <section id="quem-somos" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-card/30 via-background to-card/20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[650px] ambient-blue opacity-20"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">
            <Users className="size-3.5 text-cyan" />
            {a.badge}
          </span>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] text-foreground">
            {a.title}{" "}
            <span className="text-gradient-blue">{a.titleHighlight}</span>
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed text-muted-foreground">
            {a.intro}
          </p>
        </div>

        {/* Os Dois Lideres (Fundador e Isabella) com imagens profissionais genéricas */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Fundador */}
          <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan/50 hover:shadow-2xl hover:shadow-cyan/10 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="relative size-32 sm:size-36 shrink-0 overflow-hidden rounded-2xl border-2 border-cyan/40 shadow-xl">
                <img
                  src={founderProfile}
                  alt={a.founderName}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2 right-2 size-3.5 rounded-full bg-cyan ring-4 ring-background" />
              </div>

              <div className="flex-1">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-cyan">
                  Estratégia & Crescimento
                </span>
                <h3 className="mt-1 text-xl font-black text-foreground">
                  {a.founderName}
                </h3>
                <p className="text-xs font-semibold text-primary">
                  {a.founderRole}
                </p>
                <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground">
                  {a.founderBio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-foreground/80">
                    <Award className="size-3 text-cyan" /> 2+ anos de mercado
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-foreground/80">
                    <Shield className="size-3 text-cyan" /> +100 clientes
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Isabella */}
          <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan/50 hover:shadow-2xl hover:shadow-cyan/10 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="relative size-32 sm:size-36 shrink-0 overflow-hidden rounded-2xl border-2 border-cyan/40 shadow-xl">
                <img
                  src={isabellaProfile}
                  alt={a.isabellaName}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2 right-2 size-3.5 rounded-full bg-cyan ring-4 ring-background" />
              </div>

              <div className="flex-1">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-cyan">
                  Operações & Conversão
                </span>
                <h3 className="mt-1 text-xl font-black text-foreground">
                  {a.isabellaName}
                </h3>
                <p className="text-xs font-semibold text-primary">
                  {a.isabellaRole}
                </p>
                <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground">
                  {a.isabellaBio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-foreground/80">
                    <Sparkles className="size-3 text-cyan" /> CRO & Funis
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-foreground/80">
                    <Users className="size-3 text-cyan" /> 96% de Retenção
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* O que Fazemos e Metodologia Comercial */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-accent/20 p-8 backdrop-blur-md">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">
                Nossa Filosofia
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-foreground">
                {a.methodTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {a.methodDesc}
              </p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 text-xs text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-cyan shrink-0" />
                  <span>Tráfego orientado a margem de lucro real</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-cyan shrink-0" />
                  <span>Dashboards transparentes em tempo real</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-cyan shrink-0" />
                  <span>Comunicação direta e reuniões estratégicas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-cyan shrink-0" />
                  <span>Testes contínuos de criativos e copys</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-card/80 p-6 flex flex-col gap-4 text-center sm:text-left">
              <div>
                <p className="text-sm font-bold text-foreground">
                  Fale diretamente com nossa liderança
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Sem intermediários. Vamos analisar o seu modelo de vendas.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={WHATSAPP_SPECIALIST}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-xs font-bold text-primary-foreground shadow-md transition-all hover:brightness-110"
                >
                  <UserCheck className="size-4" />
                  <span>Falar com Especialista: 11 95585-5376</span>
                </a>

                <a
                  href={WHATSAPP_COMPANY}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-border bg-accent/40 px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <Phone className="size-3.5 text-cyan" />
                  <span>Falar com a Empresa: 11 93402-4647</span>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center justify-center gap-2 rounded-lg border border-border/50 px-4 py-2 text-[11px] text-muted-foreground hover:text-cyan transition-colors"
                >
                  <Mail className="size-3 text-cyan" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
