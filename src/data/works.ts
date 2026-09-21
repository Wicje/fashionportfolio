export type WorkCategory = "Editorial" | "Campaign" | "Portrait" | "Backstage";

export interface Work {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "Backstage">;
  alt: string;
  /** Stand-in palette key; replaced by real photography later. */
  palette: "stone" | "sand" | "rose" | "clay" | "mist" | "noir";
}

export const CATEGORIES: WorkCategory[] = ["Editorial", "Campaign", "Portrait", "Backstage"];

/**
 * Stand-in works. Owner photography replaces `palette` blocks with real
 * images (keeping `alt`); no behavior change on swap.
 */
export const WORKS: Work[] = [
  { id: "linen-study-i", title: "Linen Study I", category: "Editorial", alt: "Stand-in: editorial fashion figure in natural linen tones", palette: "stone" },
  { id: "linen-study-ii", title: "Linen Study II", category: "Editorial", alt: "Stand-in: editorial fashion figure in warm sand tones", palette: "sand" },
  { id: "atelier-notes", title: "Atelier Notes", category: "Editorial", alt: "Stand-in: editorial fashion figure in soft rose tones", palette: "rose" },
  { id: "maison-ss26", title: "Maison SS26", category: "Campaign", alt: "Stand-in: campaign fashion figure in clay tones", palette: "clay" },
  { id: "soft-tailoring", title: "Soft Tailoring", category: "Campaign", alt: "Stand-in: campaign fashion figure in cool mist tones", palette: "mist" },
  { id: "muse-noir", title: "Muse, Noir", category: "Portrait", alt: "Stand-in: portrait fashion figure in deep neutral tones", palette: "noir" },
];
