import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected shots from Ani Chisom's book. Filter by category.",
};

export default function WorkPage() {
  return (
    <main>
      <Gallery />
    </main>
  );
}
