import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Mail,
  Minus,
  Phone,
  Plus,
  Send,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { paidTrafficAnalytics } from "@/assets/images";
import {
  WHATSAPP_SPECIALIST,
  WHATSAPP_COMPANY,
  CONTACT_EMAIL,
  PHONE_SPECIALIST_DISPLAY,
  PHONE_COMPANY_DISPLAY,
} from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CtaFaq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  // Email / WhatsApp quick message box
  const [userMsg, setUserMsg] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMsg.trim()) return;
    const subject = encodeURIComponent("Dúvida sobre Serviços da HVM Digital Performance");
    const body = encodeURIComponent(
      `Olá equipe da HVM Digital Performance,\n\nGostaria de esclarecer a seguinte dúvida:\n\n"${userMsg}"\n\nPor favor, entrem em contato comigo!`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  const handleSendWhatsApp = () => {
    if (!userMsg.trim()) {
      window.open(WHATSAPP_SPECIALIST, "_blank");
      return;
    }
    const text = encodeURIComponent(
      `Olá! Tenho uma dúvida sobre a HVM Digital Performance:\n\n"${userMsg}"`
    );
    window.open(`${WHATSAPP_SPECIALIST}?text=${text}`, "_blank");
  };

  return (
    <section id="faq" className="relative overflow-hidden py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 size-[560px] ambient-blue opacity-20"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* Banner com imagem suave e tranquila de tráfego pago */}
        <div className="mb-16 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/40 shadow-xl">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)]">
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                <Sparkles className="size-3.5 text-primary" />
                Gestão com Tranquilidade & Previsibilidade
              </span>

              <h2 className="mt-4 text-[clamp(1.7rem,3.2vw,2.4rem)] font-extrabold leading-tight text-slate-900">
                Tráfego Pago com <span className="text-gradient-blue">Controle Absoluto</span> das Métricas
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Acabe com a ansiedade de não saber para onde vai o seu investimento. Nossas campanhas são monitoradas diariamente com foco rigoroso em CPL (custo por lead), taxa de fechamento e ROAS comprovado.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_SPECIALIST}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110 hover:glow-blue"
                >
                  <UserCheck className="size-4" />
                  <span>Falar com Especialista: {PHONE_SPECIALIST_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_COMPANY}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:border-primary/50"
                >
                  <Phone className="size-4 text-primary" />
                  <span>Empresa: {PHONE_COMPANY_DISPLAY}</span>
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[280px] lg:min-h-[420px]">
              <img
                src={paidTrafficAnalytics}
                alt="Visão calma e analítica da gestão de tráfego pago da HVM"
                className="h-full w-full object-cover transition-opacity hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/90 lg:via-transparent lg:to-transparent" />
              <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg border border-blue-200/80 bg-white/95 px-3 py-1.5 shadow-md backdrop-blur-md">
                <span className="size-2 rounded-full bg-primary" />
                <span className="text-[11px] font-bold text-slate-800">HVM Traffic Intelligence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grade FAQ + Caixa de Envio de Dúvida por E-mail */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)]">
          {/* FAQ Accordion */}
          <div>
            <div className="flex items-center gap-2">
              <HelpCircle className="size-5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Tire Suas Dúvidas
              </span>
            </div>
            
            <h3 className="mt-2 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-slate-900">
              {t.ctaFaq.faqTitle}{" "}
              <span className="text-gradient-blue">{t.ctaFaq.faqHighlight}</span>
            </h3>

            <ul className="mt-8 space-y-3">
              {t.ctaFaq.faqItems.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={item.q}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-primary"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
                    >
                      <span className="text-sm font-bold text-slate-900">{item.q}</span>
                      {isOpen ? (
                        <Minus className="size-4 shrink-0 text-primary" />
                      ) : (
                        <Plus className="size-4 shrink-0 text-slate-400" />
                      )}
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden px-5 pb-5 text-[13px] leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                        {item.a}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Card Interativo para Enviar Mensagem por E-mail ou WhatsApp */}
          <div className="sticky top-28 rounded-2xl border border-blue-200 bg-white p-7 shadow-xl shadow-blue-900/5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-primary">
              <Mail className="size-3.5 text-primary" />
              {t.ctaFaq.emailPromptTitle}
            </span>

            <h4 className="mt-3 text-lg font-extrabold text-slate-900">
              Fale direto com a HVM Digital Performance
            </h4>

            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {t.ctaFaq.emailPromptDesc}
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 inline-block font-mono text-xs font-bold text-primary hover:underline"
            >
              {CONTACT_EMAIL}
            </a>

            {/* Formulário rápido de mensagem */}
            <form onSubmit={handleSendEmail} className="mt-5 space-y-3">
              <div>
                <label htmlFor="faq-msg" className="sr-only">
                  Sua dúvida ou projeto
                </label>
                <textarea
                  id="faq-msg"
                  rows={3}
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="Escreva sua dúvida, segmento da sua empresa ou o que precisa aqui..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {sentSuccess && (
                <div className="flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-xs font-medium text-emerald-700">
                  <CheckCircle className="size-4 shrink-0 text-emerald-600" />
                  <span>Mensagem preparada no seu e-mail!</span>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-xs font-bold text-primary-foreground shadow-md transition-all hover:brightness-110 hover:glow-blue"
                >
                  <Mail className="size-4" />
                  <span>{t.ctaFaq.emailPromptBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 hover:border-primary/40"
                >
                  <Send className="size-3.5 text-primary" />
                  <span>Enviar por WhatsApp (Especialista)</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-200 text-center">
              <p className="text-[11px] text-slate-500">
                Prefere ligar ou chamar agora?
              </p>
              <div className="mt-2 flex flex-col gap-1 text-xs">
                <a
                  href={WHATSAPP_SPECIALIST}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-slate-900 hover:text-primary transition-colors"
                >
                  Especialista: {PHONE_SPECIALIST_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_COMPANY}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  Empresa: {PHONE_COMPANY_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}