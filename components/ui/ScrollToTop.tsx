// src/components/ui/ScrollToTop.tsx
"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Permanently stop the browser from trying to remember scroll positions on route changes
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // 2. Synchronous & Raf-backed scroll execution
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    // If the URL has an anchor hash (e.g. #service-02), let standard anchor handling take over
    if (typeof window !== "undefined" && window.location.hash) {
      return;
    }

    const forceScrollTop = () => {
      // Direct window reset
      window.scrollTo(0, 0);

      // Reset document root & body in case overflow styling is on html/body
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }

      // If SmoothScrollProvider uses Lenis on window (common in Next.js smooth scroll setups)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      if (win.lenis && typeof win.lenis.scrollTo === "function") {
        win.lenis.scrollTo(0, { immediate: true });
      }
    };

    // Immediate attempt before paint
    forceScrollTop();

    // Secondary attempt on the next animation frame (after Next.js commits DOM swap)
    const rafId = requestAnimationFrame(() => {
      forceScrollTop();
    });

    // Third safety attempt (catches async image/chunk hydration)
    const timerId = setTimeout(forceScrollTop, 30);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [pathname, searchParams]);

  return null;
}