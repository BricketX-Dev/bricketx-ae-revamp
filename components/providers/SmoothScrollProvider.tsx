// src/components/providers/SmoothScrollProvider.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // 1. Completely disable native browser scroll restoration fighting
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Initialize Lenis without resistance deadzones
    const lenis = new Lenis({
      duration: 1.0, // Snappier response eliminates the 'lag/deadzone' feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1, // Gives immediate response to directional flicks
      touchMultiplier: 1.0,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    // 3. Keep RAF in perfect sync
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 4. In-page anchor click handler
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80,
            duration: 1.1,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).lenis;
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 5. Handle path change without deadzone locking
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      lenisRef.current.resize(); // Re-measures document height so scroll range is immediately accurate
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}