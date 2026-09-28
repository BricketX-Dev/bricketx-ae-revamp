// src/components/ui/Logo.tsx
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({
  variant = "dark",
  className = "",
  showSubtitle = true,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 sm:gap-3.5 group select-none transition-transform duration-200 active:scale-[0.98] ${className}`}
      aria-label="BricketX Project Management L.L.C-FZ"
    >
      {/* Maximized Brand Logo Filling Section Height */}
      <div className="relative h-11 sm:h-12 lg:h-14 w-11 sm:w-12 lg:w-14 aspect-square flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo/logo.png"
          alt="BricketX Emblem"
          fill
          priority
          sizes="(max-width: 640px) 44px, (max-width: 1024px) 48px, 56px"
          className="object-contain filter drop-shadow-[0_2px_12px_rgba(195,153,103,0.25)]"
        />
      </div>

      {/* Corporate Designation Subtitle */}
      {showSubtitle && (
        <div className="flex flex-col justify-center border-l border-white/20 pl-3 sm:pl-3.5 py-0.5">
          <span
            className={`text-xs sm:text-[13px] font-semibold tracking-wide leading-tight transition-colors ${
              isLight ? "text-slate-100" : "text-[#0f172a]"
            }`}
          >
            Project Management
          </span>
          <span className="text-[9.5px] sm:text-[10px] font-mono tracking-widest uppercase text-[#c39967] mt-0.5 font-medium leading-none">
            L.L.C-FZ
          </span>
        </div>
      )}
    </Link>
  );
}