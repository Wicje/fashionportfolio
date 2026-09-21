"use client";

import { createElement, type HTMLAttributes, type ReactNode } from "react";

type Element = "h1" | "h2" | "h3" | "h4" | "p" | "span";

const styles: Record<Element, string> = {
  h1: "text-4xl font-bold tracking-tight sm:text-5xl",
  h2: "text-3xl font-semibold tracking-tight sm:text-4xl",
  h3: "text-2xl font-semibold",
  h4: "text-lg font-medium",
  p: "text-base leading-7",
  span: "text-sm",
};

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: Element;
  children: ReactNode;
}

export function Text({ as = "p", className, ...props }: TextProps) {
  return createElement(as, { className: `${styles[as]} ${className ?? ""}`, ...props });
}