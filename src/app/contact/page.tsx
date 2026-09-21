import type { Metadata } from "next";
import { BlueprintPage } from "@/components/blueprint-page";
import { Text } from "@/components/ui/text";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Collaborate with ${SITE.name}, aspiring model.`,
};

export default function ContactPage() {
  return (
    <main className="py-6 sm:py-8">
      <BlueprintPage
        index="06"
        label="The booking"
        title="Let's make something"
        lede="Currently open to editorial, campaign, and portrait collaborations. Tell me about your project — I reply within two days."
        meta="Replies in 48h"
      >
        <div className="flex flex-col items-start gap-8 py-4">
          <a
            href={`mailto:${SITE.bookingEmail}`}
            className="inline-flex h-14 items-center justify-center rounded-md bg-peach px-8 text-lg font-medium text-charcoal transition-colors hover:bg-ember hover:text-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
          >
            {SITE.bookingEmail}
          </a>
          {SITE.socials.length > 0 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {SITE.socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href} className="font-mono text-xs tracking-[0.14em] text-charcoal/70 uppercase underline underline-offset-4 hover:text-charcoal">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </BlueprintPage>
    </main>
  );
}
