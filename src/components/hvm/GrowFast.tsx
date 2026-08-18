import laptop from "@/assets/laptop-dashboard.jpg";
import { WHATSAPP } from "./site-data";

export function GrowFast() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-1/4 size-[560px] ambient-blue opacity-25" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={laptop}
            alt="Notebook e celular exibindo dashboard de performance da HVM"
            loading="lazy"
            width={1200}
            height={912}
            className="w-full rounded-2xl [mask-image:radial-gradient(115%_105%_at_50%_50%,black_60%,transparent_94%)]"
          />
        </div>

        <div>
          <h2 className="text-[clamp(1.6rem,3.2vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-foreground">
            <span className="text-gradient-blue">CRESÇA RÁPIDO</span> COM
            <br />O PODER DA INTERNET.
          </h2>
          <p className="mt-6 max-w-lg text-[13.5px] leading-relaxed text-muted-foreground">
            Se você quer acelerar o crescimento do seu negócio, precisa atrair mais pessoas e ter uma
            estratégia montada e validada para converter leads em clientes.
          </p>
          <p className="mt-4 max-w-lg text-[13.5px] leading-relaxed text-muted-foreground">
            Quer saber como o seu negócio pode ganhar visibilidade e aumentar o seu poder de vendas? Fale
            com um dos nossos especialistas e vamos te apresentar as ideias e o plano de ação mais
            assertivo para o seu momento.
          </p>
          <p className="mt-4 text-[13.5px] font-semibold text-cyan">
            A HVM está aqui para te ajudar!
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-md bg-primary px-8 py-3.5 text-[13px] font-bold text-primary-foreground transition-all hover:brightness-110 hover:glow-blue"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}