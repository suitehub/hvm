import { useLanguage } from "@/i18n/LanguageContext";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    { n: "01", text: t.process.step1 },
    { n: "02", text: t.process.step2 },
    { n: "03", text: t.process.step3 },
    { n: "04", text: t.process.step4 },
    { n: "05", text: t.process.step5 },
  ];

  return (
    <section id="como-funciona" className="py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <h2 className="text-center text-[clamp(1.35rem,2.6vw,1.75rem)] font-extrabold tracking-[-0.02em] text-foreground">
          {t.process.title.includes("HVM") ? (
            <>
              {t.process.title.split("HVM")[0]}
              <span className="border-b-2 border-primary pb-1 text-gradient-blue">HVM</span>
              {t.process.title.split("HVM")[1]}
            </>
          ) : (
            t.process.title
          )}
        </h2>

        <ol className="relative mt-14 grid gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent lg:block"
          />
          {steps.map((s) => (
            <li key={s.n} className="relative pr-6">
              <span className="relative z-10 grid size-3.5 place-items-center rounded-full bg-primary glow-blue">
                <span className="size-1 rounded-full bg-primary-foreground" />
              </span>
              <p className="mt-5 text-[11px] font-bold tracking-[0.18em] text-cyan">{s.n}</p>
              <p className="mt-2 max-w-[220px] text-[12px] leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}