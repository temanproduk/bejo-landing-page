/**
 * Celengan ayam: the chicken money box Indonesian households keep, drawn in the
 * same line-art style as the lucide icons used elsewhere.
 *
 * Kept deliberately sparse so it still reads at ~40px: comb, beak and tail sit
 * clear of the body outline, and nothing crosses the middle of the body, which
 * is what made an earlier attempt look like a snout.
 */
export function CelenganAyam({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* body */}
      <ellipse cx="10" cy="15" rx="6.2" ry="5" />

      {/* neck */}
      <path d="M15.7 8.7 13.9 10.9" />

      {/* head */}
      <circle cx="17.3" cy="7" r="2.2" />

      {/* comb, two clear points */}
      <path d="M15.5 5.3c.2-1 1.1-1.1 1.4-.3.3-.9 1.2-.8 1.4.2" />

      {/* beak */}
      <path d="M19.5 6.5 22 7.2 19.5 7.9" />

      {/* coin slot on the back */}
      <path d="M7.2 11.4h4" />

      {/* folded wing, kept off-centre */}
      <path d="M11.4 14.6c1.4-.4 2.5.2 2.9 1.4-1.3.4-2.5-.1-2.9-1.4Z" />

      {/* tail feathers */}
      <path d="M4.5 12.2C3 11.4 2.4 9.8 2.9 8.4" />
      <path d="M4.1 13.9C2.6 13.7 1.5 12.6 1.4 11.2" />

      {/* legs */}
      <path d="M7.4 19.9v1.7M12.6 19.9v1.7" />
    </svg>
  );
}
