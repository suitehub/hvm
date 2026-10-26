import { useState } from "react";
import logoHorizontalBranco from "@/assets/logohorizontalbranco.png";

interface LogoProps {
  className?: string;
  variant?: "top" | "footer" | "horizontal" | "icon";
  showText?: boolean;
}

const LOGO_PATHS = [
  "/assets/logomonocromática.png",
  "/assets/logomonocrom%C3%A1tica.png",
  logoHorizontalBranco,
];

export function Logo({ className = "", variant = "top" }: LogoProps) {
  const [attemptIndex, setAttemptIndex] = useState(0);
  const isTop = variant === "top" || variant === "horizontal";
  const isFooter = variant === "footer";

  const handleError = () => {
    if (attemptIndex < LOGO_PATHS.length - 1) {
      setAttemptIndex((prev) => prev + 1);
    } else {
      setAttemptIndex(-1); // Switch to text fallback
    }
  };

  const currentSrc = attemptIndex >= 0 ? LOGO_PATHS[attemptIndex] : null;

  return (
    <a
      href="#top"
      className={`group inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
      aria-label="HVM Digital Performance"
    >
      {currentSrc ? (
        <div className="flex items-center py-1">
          <img
            src={currentSrc}
            alt="HVM Digital Performance"
            className={`${
              isTop
                ? "h-8 sm:h-9 md:h-10 w-auto max-w-[210px] sm:max-w-[250px]"
                : "h-8 sm:h-9 w-auto max-w-[190px]"
            } object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
            onError={handleError}
          />
        </div>
      ) : (
        <span className="text-xl font-black tracking-tight text-slate-900">
          HVM <span className="text-primary font-bold">↗</span>
        </span>
      )}
    </a>
  );
}