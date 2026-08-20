import { AlertTriangle, MessageCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { chessAuthority } from "@/assets/images";
import { WHATSAPP } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

export function CtaFaq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/3 top-1/2 size-[520px] ambient-blue opacity-20" />
      <div className="relative mx-auto grid max-w-[1200px] items-start gap-10 px-5 lg:grid-cols-[minmax(0,28%)_minmax(0,44%)_minmax(0,28%)] lg:px-8">
        {/* Bloco CTA */}
        <div className="relative">
          <article className="panel-card p-6">
            <header className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 size-5 shrink-0 text-cyan" />
              <div>
                <p className="text-[13px] font-bold text-cyan">{t.ctaFaq.warningTag}</p>
                <p className="text-[13px] font-bold text-foreground">
                  {t.ctaFaq.warningTitle}
                </p>
              </div>
            </header>
            <p className="mt-4 text-[11.5px] leading-relaxed text-muted-foreground">
              {t.ctaFaq.warningDesc}
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-5 block rounded-md bg-primary px-5 py-3 text-center text-[12px] font-bold text-primary-foreground transition-all hover:brightness-110 hover:glow-blue"
            >
              {t.ctaFaq.warningCta}
            </a>
          </article>
          <img
            src={chessAuthority}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={800}
            height={1008}
            className="mt-6 hidden w-40 rounded-xl border border-border/30 opacity-80 object-cover lg:block"
          />
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-[clamp(1.1rem,2vw,1.4rem)] font-extrabold text-foreground">
            {t.ctaFaq.faqTitle}
            <br />
            <span className="text-gradient-blue">{t.ctaFaq.faqHighlight}</span>
          </h2>
          <ul className="mt-6 space-y-2.5">
            {t.ctaFaq.faqItems.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="panel-card overflow-hidden">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:bg-accent/60"
                  >
                    <span className="text-[12px] font-medium text-foreground">{item.q}</span>
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
                    <p className="overflow-hidden px-4 pb-4 text-[11.5px] leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Dúvidas */}
        <div>
          <h2 className="text-[clamp(1.1rem,2vw,1.4rem)] font-extrabold leading-snug text-foreground">
            {t.ctaFaq.doubtTitle1}
            <br />
            {t.ctaFaq.doubtTitle2}
          </h2>
          <p className="mt-4 text-[11.5px] leading-relaxed text-muted-foreground">
            {t.ctaFaq.doubtDesc}
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-[12px] font-bold text-primary-foreground transition-all hover:brightness-110 hover:glow-blue"
          >
            <MessageCircle className="size-4" />
            {t.ctaFaq.doubtCta}
          </a>
        </div>
      </div>
    </section>
  );
}