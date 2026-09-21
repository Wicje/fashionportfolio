export interface SocialLink {
  label: string;
  href: string;
}

/**
 * Single source for site identity. Owner replaces stand-ins here;
 * no behavior change on swap.
 */
export const SITE = {
  name: "Ava Laurent",
  role: "Fashion photographer",
  bookingEmail: "bookings@avalaurent.studio",
  socials: [] as SocialLink[],
};

export const BIO: string[] = [
  "Ava Laurent is a fashion photographer working between Paris and Milan. Her images favor soft light, honest posture, and clothes caught mid-movement.",
  "Recent commissions span independent magazines, emerging maisons, and portrait sittings for artists. She shoots editorial, campaign, and portrait work — on film and digital.",
];

export const CREDITS: string[] = [
  "Éditions Mode — Editorial, SS26",
  "Maison Clair — Campaign, Resort",
  "The Soft Issue — Cover story",
  "Atelier Nord — Lookbook",
];
