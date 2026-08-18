import { LineChart, Megaphone, PenTool, Share2 } from "lucide-react";
import chess from "@/assets/chess-strategy.jpg";
import { WHATSAPP } from "./site-data";

const STATS = [
  { value: "100+", label: "Projetos" },
  { value: "50+", label: "Clientes" },
  { value: "500k+", label: "Em anúncios" },
];

const STRUCTURE = [
  { icon: LineChart, label: "Estratégia" },
  { icon: Megaphone, label: "Tráfego Pago" },
  { icon: Share2, label: "Mídias Sociais" },
  { icon: PenTool, label: "Web Design" },
];

export function Accelerate() {
  return (
    <section id="sobre" className="relative overflow-hidden py-16 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-10 size-[620px] ambient-blue opacity-25" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:px-8">
        <div>
          <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">
            O nosso negócio é
            <br />
            Acelerar os seus
            <br />
            <span className="text-gradient-blue">Resultados.</span>
          </h2>
          <p className="mt-6 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">
              Vamos elaborar o melhor plano de ação para aumentar a sua receita e a do seu negócio,
            </span>{" "}
            no menor tempo possível.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary px-7 py-3.5 text-[13px] font-bold text-primary-foreground transition-all hover:brightness-110 hover:glow-blue"
            >
              Começar Agora!
            </a>
            <dl className="flex gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-lg border border-border px-4 py-2.5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-lg font-bold leading-none text-foreground">{s.value}</dd>
                  <dd className="mt-1 text-[10px] text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-12 text-[15px] font-semibold text-foreground">Estrutura completa</p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4 panel-card px-6 py-5">
            {STRUCTURE.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-full bg-primary/15 text-cyan">
                  <Icon className="size-4" />
                </span>
                <span className="text-[11px] font-semibold text-foreground">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src={chess}
            alt="Peças de xadrez em vidro azul representando estratégia e crescimento"
            loading="lazy"
            width={1200}
            height={1008}
            className="w-full rounded-2xl [mask-image:radial-gradient(115%_105%_at_50%_50%,black_58%,transparent_92%)]"
          />
          <article className="absolute left-[6%] top-[8%] w-[124px] rounded-xl bg-primary p-3 text-primary-foreground shadow-lg">
            <p className="text-[9px] opacity-80">Investimento</p>
            <p className="mt-1 text-base font-bold">3480<span className="text-[10px]">/mês</span></p>
            <p className="mt-1 text-[9px] opacity-80">ROI acompanhado</p>
          </article>
          <article className="absolute bottom-[6%] left-0 w-[190px] panel-card p-3.5">
            <p className="text-[10px] text-muted-foreground">Crescimento orgânico</p>
            <p className="mt-1 text-base font-bold text-foreground">68%</p>
            <p className="mt-1 text-[9px] text-muted-foreground">últimos 6 meses</p>
          </article>
        </div>
      </div>
    </section>
  );
}