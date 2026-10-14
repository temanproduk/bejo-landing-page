export type Lang = "id" | "en";

/**
 * Each page is built twice, once per language, and the HTML shell says which
 * one it is. Bahasa Indonesia lives at the root, English under /en/.
 */
export const lang: Lang = document.documentElement.lang === "en" ? "en" : "id";
export const isEn = lang === "en";

/** Picks the copy for the page's language. Works for strings and JSX alike. */
export function t<T>(id: T, en: T): T {
  return isEn ? en : id;
}

/** Points a site path at the same page in the current language. */
export function localize(href: string): string {
  if (!isEn || !href.startsWith("/") || href.startsWith("/en/")) return href;
  return `/en${href}`;
}

/** The current page in the other language, keeping the section in view. */
export function otherLangHref(): string {
  const { pathname, hash } = window.location;
  const path = isEn
    ? pathname.replace(/^\/en(?=\/|$)/, "") || "/"
    : `/en${pathname}`;
  return path + hash;
}
