import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Editorial, campaign, and portrait fashion photography. Filter by category.",
};

export default function WorkPage() {
  return (
    <main>
      <Gallery />
    </main>
  );
}
