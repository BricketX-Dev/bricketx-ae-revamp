// src/components/ui/ScrollToTop.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  // 1. Ensure manual browser restoration once on mount
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // 2. Clean, single-authority scroll reset ONLY when the pathname actually changes
  useEffect(() => {
    // Ignore initial mount or in-page hash jumps (#contact, etc.)
    if (prevPathRef.current === pathname) return;
    prevPathRef.current = pathname;

    if (typeof window !== "undefined" && window.location.hash) return;

    // Use Lenis as the primary authority if available; fallback to native without fighting
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (win.lenis && typeof win.lenis.scrollTo === "function") {
      win.lenis.scrollTo(0, { immediate: true });
      win.lenis.resize(); // Re-measures document bounds so scroll range never clamps
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}