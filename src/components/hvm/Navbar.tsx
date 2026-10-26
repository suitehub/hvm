import { useEffect, useState } from "react";
import { Menu, Phone, UserCheck, X } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_SPECIALIST, WHATSAPP_COMPANY, PHONE_SPECIALIST_DISPLAY } from "./site-data";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#top" },
    { label: t.nav.about, href: "#quem-somos" },
    { label: t.nav.structure, href: "#estrutura" },
    { label: t.nav.services, href: "#servicos" },
    { label: t.nav.cases, href: "#cases" },
    { label: t.nav.faq, href: "#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm shadow-blue-900/5" : "bg-white/80 backdrop-blur-md border-b border-slate-100/60"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <Logo variant="top" />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {/* Falar com a Empresa */}
          <a
            href={WHATSAPP_COMPANY}
            target="_blank"
            rel="noreferrer"
            title="Falar com a Empresa: 11 93402-4647"
            className="hidden items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-2 text-[12px] font-bold text-primary transition-all hover:bg-blue-100 hover:border-primary/50 xl:inline-flex"
          >
            <Phone className="size-3.5 text-primary" />
            <span>Empresa</span>
          </a>

          {/* Falar com o Especialista (Primary CTA) */}
          <a
            href={WHATSAPP_SPECIALIST}
            target="_blank"
            rel="noreferrer"
            title={`Falar com Especialista: ${PHONE_SPECIALIST_DISPLAY}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[12.5px] font-bold text-primary-foreground transition-all hover:brightness-110 hover:glow-blue sm:inline-flex"
          >
            <UserCheck className="size-3.5" />
            <span>{t.nav.ctaSpecialist}</span>
            <span className="grid size-4 place-items-center rounded-full bg-primary-foreground/20 text-[9px]">
              ↗
            </span>
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-border bg-background/98 px-5 py-5 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-2.5 pt-3 border-t border-border">
              <a
                href={WHATSAPP_SPECIALIST}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground shadow-md"
              >
                <UserCheck className="size-4" />
                <span>Falar com Especialista: 11 95585-5376</span>
              </a>

              <a
                href={WHATSAPP_COMPANY}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-accent/40 px-4 py-2.5 text-center text-sm font-medium text-foreground"
              >
                <Phone className="size-4 text-cyan" />
                <span>Falar com a Empresa: 11 93402-4647</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}