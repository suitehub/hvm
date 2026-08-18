import { AlertTriangle, MessageCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";
import chessAuthority from "@/assets/chess-authority.jpg";
import { WHATSAPP } from "./site-data";

const FAQ = [
  {
    q: "Por que a HVM é a melhor escolha?",
    a: "Porque unimos estratégia, gestão de tráfego, design e análise de dados em um único time focado em receita e previsibilidade.",
  },
  {
    q: "Como a HVM pode impulsionar minhas vendas?",
    a: "Estruturamos campanhas orientadas por dados, otimizamos o funil de conversão e acompanhamos as métricas diariamente para escalar o que gera resultado.",
  },
  {
    q: "Quais países posso esperar resultados com a HVM?",
    a: "Atendemos negócios no Brasil e operações internacionais, adaptando estratégia, idioma e canais ao mercado de atuação.",
  },
  {
    q: "Como funciona o relatório com a HVM?",
    a: "Você recebe relatórios periódicos com investimento, leads, custo por resultado e faturamento gerado, além de reuniões de acompanhamento.",
  },
  {
    q: "Quais serviços vocês prestam?",
    a: "Gestão de tráfego pago, SEO e posicionamento no Google, mídias sociais, design, web e branding orientado a performance.",
  },
];

export function CtaFaq() {
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
                <p className="text-[13px] font-bold text-cyan">ATENÇÃO!</p>
                <p className="text-[13px] font-bold text-foreground">
                  Acelere seu crescimento agora com a HVM
                </p>
              </div>
            </header>
            <p className="mt-4 text-[11.5px] leading-relaxed text-muted-foreground">
              Pronto para elevar seu negócio a um novo nível com a HVM? Simplesmente clique no botão
              abaixo, preencha o formulário e nossa equipe de especialistas fará contato para dar início a
              sua transformação.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-5 block rounded-md bg-primary px-5 py-3 text-center text-[12px] font-bold text-primary-foreground transition-all hover:brightness-110 hover:glow-blue"
            >
              Eleve seu Negócio Agora!
            </a>
          </article>
          <img
            src={chessAuthority}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={800}
            height={1008}
            className="mt-6 hidden w-40 opacity-70 [mask-image:radial-gradient(110%_100%_at_50%_50%,black_55%,transparent_92%)] lg:block"
          />
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-[clamp(1.1rem,2vw,1.4rem)] font-extrabold text-foreground">
            Perguntas
            <br />
            <span className="text-gradient-blue">Frequentes</span>
          </h2>
          <ul className="mt-6 space-y-2.5">
            {FAQ.map((item, i) => {
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
            Ainda ficou com
            <br />
            alguma dúvida?
          </h2>
          <p className="mt-4 text-[11.5px] leading-relaxed text-muted-foreground">
            Chame no WhatsApp, envie sua dúvida e converse direto com um dos nossos especialistas.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-[12px] font-bold text-primary-foreground transition-all hover:brightness-110 hover:glow-blue"
          >
            <MessageCircle className="size-4" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}