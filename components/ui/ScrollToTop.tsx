// src/components/ui/ScrollToTop.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Instantly scroll to the top left of the window whenever the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "instant" to avoid a visible scrolling jump
    });
  }, [pathname]);

  return null; // This component renders nothing visually
}