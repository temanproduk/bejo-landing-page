import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { playUrl } from "@/lib/constants";
import { localize, t } from "@/lib/i18n";
import { LangSwitch } from "@/components/LangSwitch";

type NavLink = { href: string; label: string };

const homeLinks: NavLink[] = [
  { href: "#uang-masuk", label: t("Uang Masuk QRIS", "QRIS Payments") },
  { href: "#kirim-qris", label: t("Tagih Lewat QRIS", "Bill via QRIS") },
  { href: "#tim", label: t("Kelola Tim & Absensi", "Team & Attendance") },
  { href: "#catatan", label: t("Catatan Transaksi", "Sales Records") },
  { href: "/brand.html", label: t("Untuk Brand", "For Brands") },
];

const isExternal = (href: string) => /^https?:\/\//.test(href);
const externalProps = (href: string) =>
  isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

/**
 * The shared menu's section links belong to the homepage, so away from it they
 * have to travel there first. A page carrying its own menu points at its own
 * sections, and those anchors are left alone.
 */
const resolve = (href: string, awayFromHome: boolean) =>
  localize(awayFromHome && href.startsWith("#") ? `/${href}` : href);

export function Header({
  links = homeLinks,
  variant = "home",
  ctaLabel,
  ctaHref,
  ctaVariant = "solid",
  ctaSlot,
}: {
  links?: NavLink[];
  variant?: "home" | "inner";
  ctaLabel?: string;
  ctaHref?: string;
  /** Keep the header CTA matching the page's own accent. */
  ctaVariant?: "solid" | "gold";
  /** Replaces the link button when the CTA needs its own behaviour. */
  ctaSlot?: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(variant === "inner");
  const awayFromHome = variant === "inner" && links === homeLinks;

  useEffect(() => {
    if (variant === "inner") return;
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  // Every page asks for the same thing, so the button reads the same on all of
  // them. Pages may still point it at their own placement for attribution.
  const cta = {
    label: ctaLabel ?? t("Pasang Gratis", "Install Free"),
    href: ctaHref ?? playUrl("header"),
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b border-line bg-paper/95 backdrop-blur-sm" : "border-b border-transparent"
      )}
    >
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <a href={localize("/")} className="group flex items-center gap-3">
          <img
            src="/assets/bejo-icon-round.png"
            alt=""
            className="h-12 w-12 transition-transform duration-300 group-hover:-rotate-6"
            aria-hidden="true"
          />
          <span className="font-display text-[28px] leading-none">
            Be<span className="text-green">Jo</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={resolve(l.href, awayFromHome)}
              className="group relative text-[14px] font-semibold text-ink-soft transition-colors hover:text-green"
            >
              {l.label}
              <span
                className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitch />
          {ctaSlot ?? (
            <Button asChild variant={ctaVariant}>
              <a href={cta.href} {...externalProps(cta.href)}>
                {cta.label}
              </a>
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2.5 lg:hidden">
          <LangSwitch />
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={t("Buka menu", "Open menu")}
                className="rounded-control border border-line-strong p-2.5 text-ink"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <span className="flex items-center gap-2.5">
                <img src="/assets/bejo-icon-round.png" alt="" className="h-10 w-10" aria-hidden="true" />
                <span className="font-display text-2xl">
                  Be<span className="text-green">Jo</span>
                </span>
              </span>
              <nav className="mt-8 flex flex-col">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={resolve(l.href, awayFromHome)}
                      className="border-b border-line py-4 text-lg font-bold text-ink transition-colors hover:text-green"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-7">
                {ctaSlot ? (
                  <SheetClose asChild>{ctaSlot}</SheetClose>
                ) : (
                  <SheetClose asChild>
                    <Button asChild size="lg" variant={ctaVariant} className="w-full">
                      <a href={cta.href} {...externalProps(cta.href)}>
                        {cta.label}
                      </a>
                    </Button>
                  </SheetClose>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
