// src/components/ui/ScrollStagger.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number; // Delay between children in ms (e.g. 100ms)
  distance?: number;
  duration?: number;
}

export default function ScrollStagger({
  children,
  className = "",
  staggerDelay = 90,
  distance = 28,
  duration = 800,
}: ScrollStaggerProps) {
  const [hasScrolledIn, setHasScrolledIn] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledIn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);
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
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translate3d(0, 0, 0) scale(1)"
                : `translate3d(0, ${distance}px, 0) scale(0.97)`,
              filter: isVisible ? "blur(0px)" : "blur(4px)",
              transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms ease-out ${delay}ms`,
              willChange: "transform, opacity, filter",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}