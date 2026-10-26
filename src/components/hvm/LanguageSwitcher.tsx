import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-0.5 text-xs font-semibold shadow-sm backdrop-blur-md ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLang("pt")}
        className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] transition-all ${
          lang === "pt"
            ? "bg-primary text-primary-foreground shadow-sm glow-blue"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={lang === "pt"}
      >
        <span>PT</span>
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] transition-all ${
          lang === "en"
            ? "bg-primary text-primary-foreground shadow-sm glow-blue"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={lang === "en"}
      >
        <span>EN</span>
      </button>
    </div>
  );
}
