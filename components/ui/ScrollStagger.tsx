// src/components/ui/ScrollStagger.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number; // Delay between children in ms
  distance?: number;
  duration?: number;
}

export default function ScrollStagger({
  children,
  className = "",
  staggerDelay = 80,
  distance = 20,
  duration = 700,
}: ScrollStaggerProps) {
  const [hasScrolledIn, setHasScrolledIn] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledIn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;

        const isVisible = hasScrolledIn;
        const delay = idx * staggerDelay;

        return (
          <div
            className="h-full w-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translate3d(0, 0, 0)"
                : `translate3d(0, ${distance}px, 0)`,
              transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
              willChange: isVisible ? "auto" : "transform, opacity",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}