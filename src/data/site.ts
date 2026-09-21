export interface SocialLink {
  label: string;
  href: string;
}

/**
 * Single source for site identity. Real owner details — no stand-ins left
 * except gallery imagery (owner photos pending).
 */
export const SITE = {
  name: "Ani Chisom",
  aka: "ArchJosephan · Duke Africanus",
  tagline: "Engineer · Aspiring model",
  role: "Aspiring model",
  bookingEmail: "anichisom4top@gmail.com",
  socials: [] as SocialLink[],
};

export const BIO: string[] = [
  "Ani Chisom — ArchJosephan to friends, Duke Africanus on occasion — is a hardware and software engineer who builds things and enjoys looking good doing it.",
  "Now stepping in front of the camera: an aspiring model open to editorial, campaign, and portrait collaborations. Technical mind, model presence.",
];

export const CREDITS: string[] = [];
