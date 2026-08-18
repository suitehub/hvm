const STEPS = [
  {
    n: "01",
    text: "Buscamos o melhor cliente para o seu negócio, aquele que de fato lucra mais, que sua empresa tem afinidade.",
  },
  {
    n: "02",
    text: "Olhamos diariamente para suas vendas e montamos uma estratégia personalizada para alavancar seu faturamento.",
  },
  {
    n: "03",
    text: "Mostramos o seu negócio para tomada de novas decisões, trazendo a previsibilidade viável para os seus momentos.",
  },
  {
    n: "04",
    text: "Com base em métricas válidas, técnicas potencializar e acelerar o crescimento do seu negócio.",
  },
  {
    n: "05",
    text: "Planejamento estratégico, gestão de tráfego pago, design, branding, RR e web em uma só equipe.",
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <h2 className="text-center text-[clamp(1.35rem,2.6vw,1.75rem)] font-extrabold tracking-[-0.02em] text-foreground">
          O QUE A <span className="border-b-2 border-primary pb-1 text-gradient-blue">HVM</span> FAZ?
        </h2>

        <ol className="relative mt-14 grid gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent lg:block"
          />
          {STEPS.map((s) => (
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