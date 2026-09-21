export interface Work {
  id: string;
  title: string;
  /** Path under `public/`. */
  src: string;
  alt: string;
}

function frame(n: number, alt: string): Work {
  const ext = n === 49 ? "png" : "jpg";
  const id = `ani-${String(n).padStart(2, "0")}`;
  return { id, title: `Frame Nº ${String(n).padStart(2, "0")}`, src: `/book/${id}.${ext}`, alt };
}

const GENERIC = "Outdoor portrait of Ani Chisom from the Africanus session";

/**
 * The full book — every frame from the session, in shoot order.
 * Alts are specific where the frame was inspected, conservative otherwise.
 */
export const WORKS: Work[] = [
  frame(1, "Ani Chisom crouching mid-street, floral shirt and beige trousers"),
  frame(2, GENERIC),
  frame(3, GENERIC),
  frame(4, GENERIC),
  frame(5, GENERIC),
  frame(6, GENERIC),
  frame(7, GENERIC),
  frame(8, "Ani Chisom standing mid-street giving two thumbs up, floral shirt and beige trousers"),
  frame(9, GENERIC),
  frame(10, GENERIC),
  frame(11, GENERIC),
  frame(12, GENERIC),
  frame(13, GENERIC),
  frame(14, "Ani Chisom walking down a tree-lined street, smiling, floral shirt and beige trousers"),
  frame(15, GENERIC),
  frame(16, GENERIC),
  frame(17, GENERIC),
  frame(18, GENERIC),
  frame(19, GENERIC),
  frame(20, GENERIC),
  frame(21, "Close-up of Ani Chisom against the sky, hand raised to his face, rings visible"),
  frame(22, GENERIC),
  frame(23, GENERIC),
  frame(24, GENERIC),
  frame(25, GENERIC),
  frame(26, GENERIC),
  frame(27, GENERIC),
  frame(28, GENERIC),
  frame(29, "Ani Chisom in a green printed shirt and satchel, low-angle outdoor portrait"),
  frame(30, GENERIC),
  frame(31, GENERIC),
  frame(32, GENERIC),
  frame(33, GENERIC),
  frame(34, GENERIC),
  frame(35, GENERIC),
  frame(36, GENERIC),
  frame(37, GENERIC),
  frame(38, GENERIC),
  frame(39, GENERIC),
  frame(40, GENERIC),
  frame(41, GENERIC),
  frame(42, GENERIC),
  frame(43, GENERIC),
  frame(44, GENERIC),
  frame(45, GENERIC),
  frame(46, GENERIC),
  frame(47, GENERIC),
  frame(48, GENERIC),
  frame(49, "Ani Chisom walking away down a red-earth road, beige shirt and patterned trousers, seen from behind"),
];

export const PORTRAIT_SRC = "/book/ani-14.jpg";
export const PORTRAIT_ALT = "Ani Chisom walking down a tree-lined street, smiling";
