import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PLAY_URL } from "@/lib/constants";

const externalProps = (href: string) =>
  /^https?:\/\//.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

type Link = { href: string; label: string };

const homeLinks: Link[] = [
  { href: "#uang-masuk", label: "Uang Masuk QRIS" },
  { href: "#tim", label: "Kelola Tim & Absensi" },
  { href: "#catatan", label: "Catatan Transaksi" },
  { href: "/brand.html", label: "Untuk Brand" },
];

export function Header({
  links = homeLinks,
  variant = "home",
  ctaLabel,
  ctaHref,
}: {
  links?: Link[];
  variant?: "home" | "legal";
  ctaLabel?: string;
  ctaHref?: string;
}) {
  // On legal / standalone pages the header starts in its condensed (solid) state.
  const [scrolled, setScrolled] = useState(variant === "legal");

  useEffect(() => {
    if (variant === "legal") return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const cta = {
    label: ctaLabel ?? (variant === "legal" ? "Balik ke Beranda" : "Pasang Gratis"),
    href: ctaHref ?? (variant === "legal" ? "/" : PLAY_URL),
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/80 py-2.5 shadow-[0_1px_0_rgba(14,74,46,0.08)] backdrop-blur-md backdrop-saturate-150"
          : "py-4"
      )}
    >
      <div className="container flex items-center justify-between gap-5">
        <a href="/" className="flex items-center gap-3 text-xl font-extrabold">
          <img
            src="/assets/bejo-icon-round.png"
            alt="BeJo"
            className="h-10 w-10 rounded-xl shadow-soft"
          />
          <span>Be<span className="text-primary">Jo</span></span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild>
            <a href={cta.href} {...externalProps(cta.href)}>
              {cta.label}
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Buka menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <a href="/" className="flex items-center gap-3 text-xl font-extrabold">
                <img
                  src="/assets/bejo-icon-round.png"
                  alt="BeJo"
                  className="h-9 w-9 rounded-lg"
                />
                <span>Be<span className="text-primary">Jo</span></span>
              </a>
              <nav className="mt-10 flex flex-col gap-1">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
                      className="rounded-xl px-3 py-3 text-lg font-semibold text-foreground transition-colors hover:bg-mint hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6">
                <SheetClose asChild>
                  <Button asChild className="w-full" size="lg">
                    <a href={cta.href} {...externalProps(cta.href)}>
                      {cta.label}
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
