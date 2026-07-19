import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function LegalHero({
  title,
  desc,
  updated,
}: {
  title: string;
  desc: string;
  updated: string;
}) {
  return (
    <section className="bg-[radial-gradient(800px_400px_at_80%_0%,rgba(224,163,46,0.12),transparent_60%),linear-gradient(170deg,#F5F8F4,#E7F1EA)] pb-14 pt-36">
      <div className="container">
        <Badge>Ketentuan</Badge>
        <h1 className="mt-4 text-[clamp(2.2rem,4vw,3.2rem)]">{title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{desc}</p>
        <p className="mt-3.5 text-[0.95rem] text-muted-foreground">
          <strong>Terakhir diperbarui:</strong> {updated}
        </p>
      </div>
    </section>
  );
}

/** Green info box that surfaces the deletion email as a big tappable button. */
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
    <div className="my-7 flex items-start gap-4 rounded-2xl border border-primary/20 bg-mint p-6">
      <Mail className="mt-0.5 h-7 w-7 flex-none text-primary" />
      <div>
        <h3 className="mb-1.5 text-lg font-bold text-primary-deep">{title}</h3>
        <p className="text-primary-deep">{children}</p>
        <a
          href={href}
          className="mt-3.5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[14.5px] font-bold text-white shadow-soft transition-transform hover:-translate-y-0.5"
        >
          <Mail className="h-4 w-4" />
          moobejo@gmail.com
        </a>
      </div>
    </div>
  );
}

export function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-3.5 mt-10 text-2xl font-bold text-primary-deep first:mt-0">
      {children}
    </h2>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-[1.03rem] leading-relaxed text-[#2f3b34] [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-1 [&_strong]:text-foreground [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6">
      {children}
    </div>
  );
}
