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
        <div className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-card/60 backdrop-blur-md shadow-2xl">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)]">
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan">
                <Sparkles className="size-3.5 text-cyan" />
                Gestão com Tranquilidade & Previsibilidade
              </span>

              <h2 className="mt-4 text-[clamp(1.7rem,3.2vw,2.4rem)] font-extrabold leading-tight text-foreground">
                Tráfego Pago com <span className="text-gradient-blue">Controle Absoluto</span> das Métricas
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Acabe com a ansiedade de não saber para onde vai o seu investimento. Nossas campanhas são monitoradas diariamente com foco rigoroso em CPL (custo por lead), taxa de fechamento e ROAS comprovado.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_SPECIALIST}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110"
                >
                  <UserCheck className="size-4" />
                  <span>Falar com Especialista: {PHONE_SPECIALIST_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_COMPANY}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-accent/40 px-5 py-3.5 text-xs font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <Phone className="size-4 text-cyan" />
                  <span>Empresa: {PHONE_COMPANY_DISPLAY}</span>
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[280px] lg:min-h-[420px]">
              <img
                src={paidTrafficAnalytics}
                alt="Visão calma e analítica da gestão de tráfego pago da HVM"
                className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r lg:from-background lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </div>

        {/* Grade FAQ + Caixa de Envio de Dúvida por E-mail */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)]">
          {/* FAQ Accordion */}
          <div>
            <div className="flex items-center gap-2">
              <HelpCircle className="size-5 text-cyan" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">
                Tire Suas Dúvidas
              </span>
            </div>
            
            <h3 className="mt-2 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-foreground">
              {t.ctaFaq.faqTitle}{" "}
              <span className="text-gradient-blue">{t.ctaFaq.faqHighlight}</span>
            </h3>

            <ul className="mt-8 space-y-3">
              {t.ctaFaq.faqItems.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={item.q}
                    className="overflow-hidden rounded-xl border border-white/10 bg-card/60 backdrop-blur-sm transition-colors hover:border-cyan/40"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/5"
                    >
                      <span className="text-sm font-semibold text-foreground">{item.q}</span>
                      {isOpen ? (
                        <Minus className="size-4 shrink-0 text-cyan" />
                      ) : (
                        <Plus className="size-4 shrink-0 text-muted-foreground" />
                      )}
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden px-5 pb-5 text-[13px] leading-relaxed text-muted-foreground border-t border-white/5 pt-3">
                        {item.a}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Card Interativo para Enviar Mensagem por E-mail ou WhatsApp */}
          <div className="sticky top-28 rounded-2xl border border-cyan/30 bg-card/80 p-7 backdrop-blur-xl shadow-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/15 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-cyan">
              <Mail className="size-3.5" />
              {t.ctaFaq.emailPromptTitle}
            </span>

            <h4 className="mt-3 text-lg font-extrabold text-foreground">
              Fale direto com a HVM Digital Performance
            </h4>

            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {t.ctaFaq.emailPromptDesc}
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 inline-block font-mono text-xs font-bold text-cyan hover:underline"
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
                  className="w-full rounded-xl border border-white/10 bg-background/80 p-3.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
                />
              </div>

              {sentSuccess && (
                <div className="flex items-center gap-2 rounded-lg bg-emerald-500/20 p-2.5 text-xs font-medium text-emerald-400">
                  <CheckCircle className="size-4 shrink-0" />
                  <span>Mensagem preparada no seu e-mail!</span>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-xs font-bold text-primary-foreground shadow-md transition-all hover:brightness-110"
                >
                  <Mail className="size-4" />
                  <span>{t.ctaFaq.emailPromptBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-accent/60 py-2.5 text-xs font-bold text-foreground transition-colors hover:bg-accent"
                >
                  <Send className="size-3.5 text-cyan" />
                  <span>Enviar por WhatsApp (Especialista)</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-border/60 text-center">
              <p className="text-[11px] text-muted-foreground">
                Prefere ligar ou chamar agora?
              </p>
              <div className="mt-2 flex flex-col gap-1 text-xs">
                <a
                  href={WHATSAPP_SPECIALIST}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-foreground hover:text-cyan transition-colors"
                >
                  Especialista: {PHONE_SPECIALIST_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_COMPANY}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-muted-foreground hover:text-cyan transition-colors"
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