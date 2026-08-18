import chessAuthority from "@/assets/chess-authority.jpg";

/** Logos reais dos clientes a serem fornecidos — placeholders identificáveis. */
const CLIENTS = ["[Logo cliente 01]", "[Logo cliente 02]", "[Logo cliente 03]", "[Logo cliente 04]"];

export function Authority() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute right-1/4 top-0 size-[520px] ambient-blue opacity-20" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[minmax(0,38%)_minmax(0,42%)_minmax(0,20%)] lg:px-8">
        <div>
          <h2 className="text-[clamp(1.2rem,2.2vw,1.5rem)] font-extrabold leading-snug tracking-[-0.02em] text-foreground">
            A HVM É RESPONSÁVEL
            <br />
            <span className="text-gradient-blue">PELO CRESCIMENTO DE</span>
            <br />
            GRANDES <span className="text-cyan">NEGÓCIOS</span>
          </h2>
          <p className="mt-5 max-w-sm text-[12px] leading-relaxed text-muted-foreground">
            Essas grandes empresas confiam na HVM devido ao nosso método desenvolvido exclusivamente para
            performance e receita.
          </p>
          <dl className="mt-8 flex flex-wrap gap-8">
            {[
              { v: "[00]+", l: "Anos de operação" },
              { v: "[00]%", l: "Retenção de clientes" },
              { v: "R$ [000]k", l: "Investimento gerido" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="text-lg font-bold leading-none text-foreground">{s.v}</dd>
                <dd className="mt-1 text-[10px] text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-8">
          {CLIENTS.map((c) => (
            <li
              key={c}
              className="grid h-14 place-items-center rounded-lg border border-dashed border-border text-[11px] font-semibold text-muted-foreground"
            >
              {c}
            </li>
          ))}
        </ul>

        <img
          src={chessAuthority}
          alt="Peças de xadrez rei e rainha em vidro azul iluminado"
          loading="lazy"
          width={800}
          height={1008}
          className="mx-auto w-40 opacity-80 [mask-image:radial-gradient(110%_100%_at_50%_50%,black_55%,transparent_92%)] lg:w-full"
        />
      </div>
    </section>
  );
}