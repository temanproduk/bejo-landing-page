import { cn } from "@/lib/utils";
import { lang, otherLangHref, type Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: "id", label: "ID", name: "Bahasa Indonesia" },
  { code: "en", label: "EN", name: "English" },
];

/** Two-letter toggle between the Indonesian and English copy of this page. */
export function LangSwitch({
  tone = "light",
  className,
}: {
  /** "light" sits on paper, "dark" on the ink footer. */
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center overflow-hidden rounded-control border font-mono text-[11px] font-bold tracking-[0.12em]",
        tone === "dark" ? "border-white/20" : "border-line-strong",
        className
      )}
    >
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <a
            key={l.code}
            href={active ? undefined : otherLangHref()}
            hrefLang={l.code}
            lang={l.code}
            title={l.name}
            aria-current={active ? "true" : undefined}
            onClick={active ? undefined : (e) => (e.currentTarget.href = otherLangHref())}
            className={cn(
              "px-2.5 py-1.5 transition-colors",
              active
                ? tone === "dark"
                  ? "bg-white/15 text-white"
                  : "bg-ink text-white"
                : tone === "dark"
                  ? "text-white/60 hover:text-gold"
                  : "text-ink-soft hover:text-green"
            )}
          >
            {l.label}
          </a>
        );
      })}
    </span>
  );
}
