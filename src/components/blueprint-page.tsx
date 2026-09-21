import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { GridPlus } from "@/components/grid-plus";

export interface BlueprintPageProps {
  index: string;
  label: string;
  title: string;
  lede?: string;
  /** Right-aligned mono note (e.g. a count). */
  meta?: string;
  children: ReactNode;
}

/**
 * Shared blueprint shell for sub-pages: bordered frame, corner plus marks,
 * mono index lane, display title, and an optional hatch divider.
 */
export function BlueprintPage({ index, label, title, lede, meta, children }: BlueprintPageProps) {
  return (
    <div className="px-3 sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-6xl border-x border-charcoal/15">
        <GridPlus edge="left" className="top-0 left-0" />
        <GridPlus edge="right" className="top-0 left-full" />

        <Container className="border-b border-charcoal/15 py-10 sm:py-14">
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-ember uppercase">
            <span aria-hidden="true">{index}</span>
            <span aria-hidden="true" className="h-px w-10 bg-ember/60" />
            <span>{label}</span>
            {meta && (
              <span className="ml-auto text-charcoal/60">
                {meta}
              </span>
            )}
          </p>
          <Text as="h1" className="mt-4 font-display text-charcoal">
            {title}
          </Text>
          {lede && (
            <Text className="mt-3 max-w-xl text-charcoal/70">
              {lede}
            </Text>
          )}
        </Container>

        <Container className="py-10 sm:py-14">
          {children}
        </Container>

        <GridPlus edge="left" className="top-full left-0" />
        <GridPlus edge="right" className="top-full left-full" />
      </div>
    </div>
  );
}
