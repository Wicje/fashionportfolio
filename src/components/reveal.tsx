"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms between siblings for a staggered cascade. */
  delay?: number;
}

/**
 * Scroll reveal: fades + rises content once when it enters the viewport.
 * Under `prefers-reduced-motion` the `motion-safe:` variants never apply,
 * so content renders immediately with no transition. No libraries.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay >= 200 ? "motion-safe:delay-200" : delay >= 100 ? "motion-safe:delay-100" : "";

  return (
    <div
      ref={ref}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${delayClass} ${
        visible ? "motion-safe:translate-y-0 motion-safe:opacity-100" : "motion-safe:translate-y-6 motion-safe:opacity-0"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
