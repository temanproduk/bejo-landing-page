import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { playUrl } from "@/lib/constants";

type NavLink = { href: string; label: string };

const homeLinks: NavLink[] = [
  { href: "#uang-masuk", label: "Uang Masuk QRIS" },
  { href: "#kirim-qris", label: "Tagih Lewat QRIS" },
  { href: "#tim", label: "Kelola Tim & Absensi" },
  { href: "#catatan", label: "Catatan Transaksi" },
  { href: "/brand.html", label: "Untuk Brand" },
];

const isExternal = (href: string) => /^https?:\/\//.test(href);
const externalProps = (href: string) =>
  isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};

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

  useEffect(() => {
    if (variant === "inner") return;
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const cta = {
    label: ctaLabel ?? (variant === "inner" ? "Beranda" : "Pasang Gratis"),
    href: ctaHref ?? (variant === "inner" ? "/" : playUrl("header")),
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b border-line bg-paper/95 backdrop-blur-sm" : "border-b border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2.5">
          <img
            src="/assets/bejo-icon-round.png"
            alt=""
            className="h-9 w-9"
            aria-hidden="true"
          />
          <span className="font-display text-2xl leading-none">
            Be<span className="text-green">Jo</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-semibold text-ink-soft transition-colors hover:text-green"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          {ctaSlot ?? (
            <Button asChild variant={ctaVariant}>
              <a href={cta.href} {...externalProps(cta.href)}>
                {cta.label}
              </a>
            </Button>
          )}
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Buka menu"
                className="rounded-control border border-line-strong p-2.5 text-ink"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <span className="font-display text-2xl">
                Be<span className="text-green">Jo</span>
              </span>
              <nav className="mt-8 flex flex-col">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
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
