// src/components/providers/SmoothScrollProvider.tsx
"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
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
    // 1. Disable native browser scroll restoration so it does not fight Lenis
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Initialize Lenis with refined luxury damping physics
    const lenis = new Lenis({
      duration: 1.2, // Momentum duration (higher = silkier)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential ease-out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Attach to window so external actions can control it
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    // Connect into browser requestAnimationFrame loop
    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    // Global in-page anchor link handler (#services, #contact, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80, // Adjust for fixed navbar height
            duration: 1.4,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("click", handleAnchorClick);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).lenis;
      lenis.destroy();
    };
  }, []);

  // 3. Force scroll-to-top whenever Next.js path changes
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    // If navigating to an anchor hash on the same or new page, preserve it
    if (typeof window !== "undefined" && window.location.hash) {
      return;
    }

    const resetScroll = () => {
      if (lenisRef.current) {
        // Immediate reset inside the Lenis virtual engine
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    };

    resetScroll();

    // Secondary microtask execution ensures Next.js finished page painting
    const rafId = requestAnimationFrame(resetScroll);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return <>{children}</>;
}