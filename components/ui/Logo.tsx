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
      className={`inline-flex items-center gap-3 group select-none transition-transform duration-200 active:scale-[0.98] ${className}`}
      aria-label="BricketX Project Management L.L.C"
    >
      {/* 
        Official Logo PNG from /public/logo.png
        Adjust the filename or path if your file has a different name
      */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo/logo.png"
          alt="BricketX UAE Logo"
          width={80}
          height={80}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center leading-none">
          <span
            className={`font-black tracking-[0.14em] text-xl sm:text-[22px] uppercase transition-colors ${
              isLight ? "text-white" : "text-[#111827]"
            }`}
          >
            BRICKET<span className="text-[#c39967]">X</span>
          </span>

          {/* UAE Domain Pill Badge */}
          <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-tight text-[#c39967] bg-[#c39967]/15 border border-[#c39967]/30">
            .ae
          </span>
        </div>

        {/* Corporate Designation Subtitle */}
        {showSubtitle && (
          <span
            className={`text-[8.5px] font-semibold tracking-[0.24em] uppercase mt-1 transition-colors ${
              isLight ? "text-white/60" : "text-[#64748b]"
            }`}
          >
            Project Management L.L.C
          </span>
        )}
      </div>
    </Link>
  );
}