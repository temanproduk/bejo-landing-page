import { Mail } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";

export function LegalHero({
  label = "Ketentuan",
  title,
  desc,
  updated,
}: {
  label?: string;
  title: string;
  desc: string;
  updated?: string;
}) {
  return (
    <section className="border-b border-line pb-12 pt-28 md:pb-16 md:pt-36">
      <div className="container max-w-3xl">
        <Eyebrow>{label}</Eyebrow>
        <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] uppercase">
          {title}
        </h1>
        <p className="mt-5 text-[17px] text-ink-soft">{desc}</p>
        {updated && (
          <p className="eyebrow mt-6 text-ink-faint">Diperbarui {updated}</p>
        )}
      </div>
    </section>
  );
}

/** Panel that surfaces the deletion address as a single tappable action. */
export function EmailCallout({
  title,
  children,
  subject,
  body,
}: {
  title: string;
  children: React.ReactNode;
  subject: string;
  body?: string;
}) {
  const href =
    `mailto:moobejo@gmail.com?subject=${encodeURIComponent(subject)}` +
    (body ? `&body=${encodeURIComponent(body)}` : "");

  return (
    <div className="my-8 border-l-2 border-green bg-mint/60 p-6">
      <h3 className="font-display text-xl uppercase text-green-deep">{title}</h3>
      <p className="mt-2 text-ink-soft">{children}</p>
      <a
        href={href}
        className="mt-4 inline-flex items-center gap-2 rounded-control bg-green px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-dark"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        moobejo@gmail.com
      </a>
    </div>
  );
}

export function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-3 mt-12 border-t border-line pt-8 font-display text-2xl uppercase text-ink first:mt-0 first:border-0 first:pt-0"
    >
      {children}
    </h2>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-ink-soft [&_a]:font-semibold [&_a]:text-green [&_a]:underline [&_a]:underline-offset-2 [&_li]:pl-1 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
      {children}
    </div>
  );
}
