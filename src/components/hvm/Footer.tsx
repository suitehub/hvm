import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/i18n/LanguageContext";

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.services, href: "#servicos" },
    { label: t.nav.howItWorks, href: "#como-funciona" },
    { label: t.nav.cases, href: "#cases" },
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-[220px] text-[11px] leading-relaxed text-muted-foreground">
            {t.footer.slogan}
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan">{t.footer.navTitle}</p>
          <ul className="mt-4 space-y-2">
            {navItems.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-[11.5px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan">{t.footer.servicesTitle}</p>
          <ul className="mt-4 space-y-2">
            {t.footer.servicesList.map((s) => (
              <li key={s} className="text-[11.5px] text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan">{t.footer.contactTitle}</p>
          <ul className="mt-4 space-y-2 text-[11.5px] text-muted-foreground">
            <li>{t.footer.contactPhone}</li>
            <li>{t.footer.contactEmail}</li>
            <li>{t.footer.contactLocation}</li>
          </ul>
          <ul className="mt-5 flex gap-3">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <li key={label}>
                <a
                  href="#top"
                  aria-label={label}
                  className="grid size-8 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-cyan"
                >
                  <Icon className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1200px] border-t border-border px-5 pt-6 lg:px-8">
        <p className="text-[10.5px] text-muted-foreground">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}