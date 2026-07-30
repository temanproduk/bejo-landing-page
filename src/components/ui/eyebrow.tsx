import { cn } from "@/lib/utils";

/**
 * Section register mark: a mono label with a short rule, standing in for the
 * pill-shaped badges this design deliberately avoids.
 */
export function Eyebrow({
  children,
  className,
  tone = "green",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "green" | "gold" | "light";
}) {
  const color =
    tone === "gold" ? "text-gold-dark" : tone === "light" ? "text-white/70" : "text-green";
  const rule =
    tone === "gold" ? "bg-gold" : tone === "light" ? "bg-white/40" : "bg-green";

  return (
    <span className={cn("eyebrow inline-flex items-center gap-3", color, className)}>
      <span className={cn("h-px w-7", rule)} aria-hidden="true" />
      {children}
    </span>
  );
}
