import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone, UserCheck, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  WHATSAPP_SPECIALIST,
  WHATSAPP_COMPANY,
  CONTACT_EMAIL,
  PHONE_SPECIALIST_DISPLAY,
  PHONE_COMPANY_DISPLAY,
} from "./site-data";

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#top" },
    { label: t.nav.about, href: "#quem-somos" },
    { label: t.nav.structure, href: "#estrutura" },
    { label: t.nav.services, href: "#servicos" },
    { label: t.nav.cases, href: "#cases" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 text-slate-600 py-16">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Coluna 1: Logo & Slogan */}
        <div>
          <Logo variant="footer" />
          <p className="mt-5 max-w-[240px] text-[12px] leading-relaxed text-slate-600">
            {t.footer.slogan}
          </p>

          <div className="mt-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
              Canais Oficiais
            </span>
            <div className="mt-2 flex flex-col gap-1.5 text-xs">
              <a
                href={WHATSAPP_SPECIALIST}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-primary transition-colors"
              >
                <UserCheck className="size-3.5 text-primary" />
                <span>Especialista: {PHONE_SPECIALIST_DISPLAY}</span>
              </a>

              <a
                href={WHATSAPP_COMPANY}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-medium text-slate-600 hover:text-primary transition-colors"
              >
                <Phone className="size-3.5 text-primary" />
                <span>Empresa: {PHONE_COMPANY_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <nav aria-label="Navegação do rodapé">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {t.footer.navTitle}
          </p>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-xs text-slate-600 transition-colors hover:text-primary hover:font-medium"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Coluna 3: Estrutura e Serviços */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {t.footer.servicesTitle}
          </p>
          <ul className="mt-4 space-y-2.5">
            {t.footer.servicesList.map((s) => (
              <li key={s} className="text-xs text-slate-600">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 4: Contatos e E-mail */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {t.footer.contactTitle}
          </p>
          <ul className="mt-4 space-y-3 text-xs text-slate-600">
            <li>
              <a
                href={WHATSAPP_SPECIALIST}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-slate-900 transition-colors hover:text-primary"
              >
                <MessageCircle className="size-4 text-primary" />
                <span>{t.footer.contactPhoneSpecialist}</span>
              </a>
            </li>

            <li>
              <a
                href={WHATSAPP_COMPANY}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-slate-600 transition-colors hover:text-primary"
              >
                <Phone className="size-4 text-primary" />
                <span>{t.footer.contactPhoneCompany}</span>
              </a>
            </li>

            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 font-medium text-slate-600 transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" />
                <span>{CONTACT_EMAIL}</span>
              </a>
            </li>

            <li className="pt-1 text-[11px] text-slate-500">
              {t.footer.contactLocation}
            </li>
          </ul>

          <ul className="mt-6 flex gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-primary hover:text-primary hover:bg-blue-50/70 shadow-xs"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1240px] border-t border-slate-200 px-5 pt-8 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-4">
            <a href="#top" className="hover:text-primary transition-colors font-medium">Voltar ao topo ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}