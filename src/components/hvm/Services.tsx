import { Globe, Search, Share2 } from "lucide-react";

const SERVICES = [
  {
    icon: Search,
    title: ["POSICIONAMENTO NAS", "BUSCAS DO GOOGLE."],
    text: "Seja encontrado por quem realmente está buscando pelos seus produtos ou serviços.",
  },
  {
    icon: Share2,
    title: ["META ADS: FACEBOOK", "& INSTAGRAM."],
    text: "Alcance potenciais clientes, promova seus posts e conquiste mais resultados.",
  },
  {
    icon: Globe,
    title: ["DESIGN & WEB, SOCIAL", "MEDIA, BRANDING."],
    text: "Sua empresa merece um visual impactante e presença de forma estratégica.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1200px] gap-5 px-5 md:grid-cols-3 lg:px-8">
        {SERVICES.map(({ icon: Icon, title, text }) => (
          <article
            key={title[0]}
            className="group panel-card px-7 py-8 text-center transition-all duration-300 hover:border-primary/50 hover:glow-blue"
          >
            <span className="mx-auto grid size-11 place-items-center rounded-full bg-primary/15 text-cyan transition-colors group-hover:bg-primary/25">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-5 text-[13px] font-bold uppercase leading-snug tracking-wide text-cyan">
              {title[0]}
              <br />
              <span className="text-foreground">{title[1]}</span>
            </h3>
            <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}