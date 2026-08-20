import { useState } from "react";
import { Star } from "lucide-react";
import { WHATSAPP } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";

function GoogleMark({ label }: { label: string }) {
  return (
    <span
      aria-label={label}
      className="grid size-6 shrink-0 place-items-center rounded-full border border-border text-[11px] font-bold text-cyan"
    >
      G
    </span>
  );
}

export function Testimonials() {
  const { t } = useLanguage();
  const [page, setPage] = useState(0);

  const testimonials = t.testimonials.items;
  const pages = Math.ceil(testimonials.length / 2);
  const visible = testimonials.slice(page * 2, page * 2 + 2);

  return (
    <section id="cases" className="py-16 lg:py-20">
      <div className="mx-auto max-w-[1000px] px-5 lg:px-8">
        <h2 className="text-center text-[clamp(1.35rem,2.6vw,1.75rem)] font-extrabold leading-tight tracking-[-0.02em] text-foreground">
          <span className="text-gradient-blue">{t.testimonials.titleHighlight}</span> {t.testimonials.titleRest1}
          <br />
          {t.testimonials.titleRest2}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {visible.map((item, i) => (
            <article key={`${page}-${i}`} className="panel-card p-5">
              <header className="flex items-start gap-3">
                <span className="size-9 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-bold text-foreground">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground">{item.role}</p>
                </div>
                <GoogleMark label={t.testimonials.googleReview} />
              </header>
              <div className="mt-3 flex gap-0.5" aria-label="5 de 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-3 fill-cyan text-cyan" />
                ))}
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">"{item.text}"</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ver depoimentos ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === page ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-primary px-10 py-3.5 text-[12.5px] font-bold uppercase tracking-wide text-primary-foreground transition-all hover:brightness-110 hover:glow-blue"
          >
            {t.testimonials.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}