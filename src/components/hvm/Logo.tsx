import { useState } from "react";
import logoHorizontalBranco from "@/assets/logohorizontalbranco.png";
import logoBranca from "@/assets/logobranca.png";

interface LogoProps {
  className?: string;
  variant?: "top" | "footer" | "horizontal" | "icon";
  showText?: boolean;
}

export function Logo({ className = "", variant = "top" }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const isTop = variant === "top" || variant === "horizontal";
  const imageSrc = isTop ? logoHorizontalBranco : logoBranca;

  return (
    <a
      href="#top"
      className={`group inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
      aria-label="HVM Digital Performance"
    >
      {!imgError ? (
        <img
          src={imageSrc}
          alt="HVM Digital Performance"
          className={`${
            isTop
              ? "h-9 sm:h-10 md:h-11 w-auto max-w-[220px] sm:max-w-[260px]"
              : "h-9 sm:h-10 w-auto max-w-[180px]"
          } object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-xl font-black tracking-tight text-white">
          HVM <span className="text-cyan font-bold">↗</span>
        </span>
      )}
    </a>
  );
}