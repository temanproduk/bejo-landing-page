import { useEffect } from "react";

/**
 * Lightweight scroll parallax. Elements marked with data-parallax="<speed>"
 * shift vertically as they pass the viewport center. Disabled when the user
 * prefers reduced motion, and on narrow (touch) screens where it adds jank.
 */
export function useParallax() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isNarrow = window.matchMedia("(max-width: 768px)").matches;
    if (reduced || isNarrow) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    ).map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        el,
        center: rect.top + window.scrollY + rect.height / 2,
        speed: parseFloat(el.dataset.parallax || "0"),
      };
    });

    let ticking = false;
    const update = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      for (const item of els) {
        const y = (viewportCenter - item.center) * item.speed * -1;
        item.el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
