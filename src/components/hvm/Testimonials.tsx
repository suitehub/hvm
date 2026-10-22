import { useState } from "react";
import { Star, CheckCircle, TrendingUp, MessageCircle, Quote } from "lucide-react";
import { WHATSAPP_SPECIALIST } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

function GoogleMark({ label }: { label: string }) {
  return (
    <span
      aria-label={label}
      className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-bold text-cyan"
    >
      <span className="font-extrabold">G</span>
      <span className="text-[9px] uppercase tracking-wider">5.0</span>
    </span>
  );
}

export function Testimonials() {
  const { t } = useLanguage();
  const [page, setPage] = useState(0);

  const testimonials = t.testimonials.items;
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const visible = testimonials.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section id="cases" className="relative py-20 lg:py-28 bg-gradient-to-b from-transparent via-cyan/5 to-transparent">
      <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">
            Casos de Sucesso & Resultados
          </span>
          <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight tracking-[-0.02em] text-foreground">
            <span className="text-gradient-blue">{t.testimonials.titleHighlight}</span>{" "}
            {t.testimonials.titleRest1}
            <br />
            {t.testimonials.titleRest2}
          </h2>
          <p className="mt-3 text-xs text-muted-foreground">
            Resultados reais de empresas que escalaram sua operação com a HVM Digital Performance.
          </p>
        </div>

        {/* Depoimentos */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visible.map((item, idx) => (
            <article
              key={`${page}-${idx}`}
              className="relative rounded-2xl border border-white/10 bg-card/70 p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-cyan/40 hover:shadow-cyan/5"
            >
              <Quote className="absolute right-5 top-5 size-8 text-white/5 pointer-events-none" />

              <header className="flex items-start gap-3.5">
                {/* Avatar elegante com iniciais estilizadas (sem imagens não autorizadas) */}
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-cyan text-xs font-black text-white shadow-md">
                  {getInitials(item.name)}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-bold text-foreground">{item.name}</p>
                    <CheckCircle className="size-3.5 text-cyan" />
                  </div>
                  <p className="truncate text-[11px] text-muted-foreground">
                    {item.role} • <span className="text-foreground/80 font-medium">{item.company}</span>
                  </p>
                </div>

                <GoogleMark label={t.testimonials.googleReview} />
              </header>

              <div className="mt-4 flex gap-1" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-3.5 fill-cyan text-cyan" />
                ))}
              </div>

              <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground italic">
                "{item.text}"
              </p>

              {/* Métrica de Destaque */}
              {item.metric && (
                <div className="mt-5 flex items-center gap-2 rounded-lg border border-cyan/20 bg-cyan/10 px-3 py-2 text-xs font-bold text-cyan">
                  <TrendingUp className="size-4 shrink-0 text-cyan" />
                  <span>{item.metric}</span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ver página de depoimentos ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === page ? "w-8 bg-cyan" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_SPECIALIST}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-[13px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110 hover:glow-blue"
          >
            <MessageCircle className="size-4" />
            <span>{t.testimonials.ctaButton}</span>
          </a>
        </div>
      </div>
    </section>
  );
}