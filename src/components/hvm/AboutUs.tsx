import { Award, CheckCircle2, ChevronRight, Mail, Phone, Shield, Sparkles, UserCheck, Users } from "lucide-react";
import { founderProfile, isabellaProfile } from "@/assets/images";
import { WHATSAPP_SPECIALIST, WHATSAPP_COMPANY, CONTACT_EMAIL } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function AboutUs() {
  const { t } = useLanguage();
  const a = t.aboutSection;

  return (
    <section id="quem-somos" className="relative overflow-hidden py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[650px] ambient-blue opacity-30"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-50 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            <Users className="size-3.5 text-primary" />
            {a.badge}
          </span>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] text-slate-900">
            {a.title}{" "}
            <span className="text-gradient-blue">{a.titleHighlight}</span>
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed text-slate-600">
            {a.intro}
          </p>
        </div>

        {/* Os Dois Lideres (Fundador e Isabella) com imagens profissionais genéricas */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Fundador */}
          <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="relative size-32 sm:size-36 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/40 shadow-md">
                <img
                  src={founderProfile}
                  alt={a.founderName}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2 right-2 size-3.5 rounded-full bg-primary ring-4 ring-white" />
              </div>

              <div className="flex-1">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-primary">
                  Estratégia & Crescimento
                </span>
                <h3 className="mt-1 text-xl font-black text-slate-900">
                  {a.founderName}
                </h3>
                <p className="text-xs font-bold text-primary">
                  {a.founderRole}
                </p>
                <p className="mt-3.5 text-xs leading-relaxed text-slate-600">
                  {a.founderBio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 border border-blue-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    <Award className="size-3 text-primary" /> 2+ anos de mercado
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 border border-blue-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    <Shield className="size-3 text-primary" /> +100 clientes
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Isabella */}
          <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="relative size-32 sm:size-36 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/40 shadow-md">
                <img
                  src={isabellaProfile}
                  alt={a.isabellaName}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2 right-2 size-3.5 rounded-full bg-primary ring-4 ring-white" />
              </div>

              <div className="flex-1">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-primary">
                  Operações & Conversão
                </span>
                <h3 className="mt-1 text-xl font-black text-slate-900">
                  {a.isabellaName}
                </h3>
                <p className="text-xs font-bold text-primary">
                  {a.isabellaRole}
                </p>
                <p className="mt-3.5 text-xs leading-relaxed text-slate-600">
                  {a.isabellaBio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 border border-blue-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    <Sparkles className="size-3 text-primary" /> CRO & Funis
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 border border-blue-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    <Users className="size-3 text-primary" /> 96% de Retenção
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* O que Fazemos e Metodologia Comercial */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Nossa Filosofia
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                {a.methodTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {a.methodDesc}
              </p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span>Tráfego orientado a margem de lucro real</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span>Dashboards transparentes em tempo real</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span>Comunicação direta e reuniões estratégicas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span>Testes contínuos de criativos e copys</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-6 flex flex-col gap-4 text-center sm:text-left">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Fale diretamente com nossa liderança
                </p>
                <p className="text-xs text-slate-600 mt-1">
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
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
                >
                  <Phone className="size-3.5 text-primary" />
                  <span>Falar com a Empresa: 11 93402-4647</span>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-4 py-2 text-[11px] font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  <Mail className="size-3 text-primary" />
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
