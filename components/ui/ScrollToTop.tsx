// src/components/ui/ScrollToTop.tsx
"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  // 1. Permanently stop the browser from trying to restore previous scroll positions
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // 2. Reset scroll coordinate synchronously on route changes
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    // If the URL has an anchor hash (e.g. #service-02), let in-page anchor handling take over
    if (typeof window !== "undefined" && window.location.hash) {
      return;
    }

    const forceScrollTop = () => {
      window.scrollTo(0, 0);

      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }

      // If Lenis smooth scroll instance is mounted on window
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      if (win.lenis && typeof win.lenis.scrollTo === "function") {
        win.lenis.scrollTo(0, { immediate: true });
      }
    };

    // Immediate execution
    forceScrollTop();

    // Next animation frame execution after Next.js completes DOM reconciliation
    const rafId = requestAnimationFrame(forceScrollTop);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return null;
}