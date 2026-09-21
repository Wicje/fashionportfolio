"use client";

type PlusEdge = "left" | "right" | "top" | "bottom";

export interface GridPlusProps {
  className?: string;
  /** Wing(s) to drop (outward sides with no line to meet). */
  edge?: PlusEdge | PlusEdge[];
  markClassName?: string;
}

/** Thin plus mark for blueprint grid intersections. Decorative. */
export function GridPlus({ className, edge, markClassName = "bg-charcoal/25" }: GridPlusProps) {
  const omit = new Set(Array.isArray(edge) ? edge : edge ? [edge] : []);

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-30 size-[11px] -translate-x-1/2 -translate-y-1/2 ${className ?? ""}`}
    >
      {!omit.has("top") && (
        <span className={`absolute top-0 left-1/2 h-1/2 w-px -translate-x-1/2 rounded-full ${markClassName}`} />
      )}
      {!omit.has("bottom") && (
        <span className={`absolute bottom-0 left-1/2 h-1/2 w-px -translate-x-1/2 rounded-full ${markClassName}`} />
      )}
      {!omit.has("left") && (
        <span className={`absolute top-1/2 left-0 h-px w-1/2 -translate-y-1/2 rounded-full ${markClassName}`} />
      )}
      {!omit.has("right") && (
        <span className={`absolute top-1/2 right-0 h-px w-1/2 -translate-y-1/2 rounded-full ${markClassName}`} />
      )}
    </span>
  );
}
