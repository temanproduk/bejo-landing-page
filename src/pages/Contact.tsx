import { useState } from "react";
import { Mail, Copy, Check, Clock, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHero } from "@/components/Legal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const legalLinks = [
  { href: "/#fitur", label: "Fitur" },
  { href: "/#cara", label: "Cara Pakai" },
  { href: "/privacy.html", label: "Kebijakan Privasi" },
];

// Split so the address is not sitting in the page as plain text before reveal.
const EMAIL_USER = "moobejo";
const EMAIL_DOMAIN = "gmail.com";

export default function Contact() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = `${EMAIL_USER}@${EMAIL_DOMAIN}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked; the mailto link still works.
    }
  };

  return (
    <>
      <Header links={legalLinks} variant="legal" />
      <LegalHero
        title="Hubungi Kami"
        desc="Ada pertanyaan, masukan, atau butuh bantuan soal BeJo? Kirim email ke kami, dengan senang hati kami bantu."
        updated="20 Juli 2026"
      />

      <section className="py-14 md:py-16">
        <div className="container max-w-2xl">
          <Card className="shadow-card">
            <CardContent className="p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-primary">
                <Mail className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-2xl font-bold">Email kami</h2>
              <p className="mt-2 text-[1.03rem] text-muted-foreground">
                Klik tombol di bawah untuk melihat alamat email kami. Kamu bisa
                langsung kirim pesan atau menyalin alamatnya.
              </p>

              {!revealed ? (
                <Button
                  className="mt-6"
                  size="lg"
                  onClick={() => setRevealed(true)}
                >
                  <Mail /> Tampilkan Alamat Email
                </Button>
              ) : (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={`mailto:${email}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-mint px-5 py-3.5 text-lg font-bold text-primary-deep transition-colors hover:bg-primary hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                    {email}
                  </a>
                  <Button variant="ghost" size="lg" onClick={copy} className="sm:w-auto">
                    {copied ? <Check /> : <Copy />}
                    {copied ? "Tersalin" : "Salin"}
                  </Button>
                </div>
              )}

              <div className="mt-9 grid gap-4 border-t border-border pt-7 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-6 w-6 flex-none text-primary" />
                  <div>
                    <div className="font-bold">Waktu balasan</div>
                    <p className="text-sm text-muted-foreground">
                      Kami usahakan membalas dalam waktu yang wajar di hari kerja.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-6 w-6 flex-none text-primary" />
                  <div>
                    <div className="font-bold">Biar cepat dibantu</div>
                    <p className="text-sm text-muted-foreground">
                      Tulis nama usaha kamu dan jelaskan kendalanya sejelas mungkin.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Mau hapus data kamu? Lihat halaman{" "}
            <a
              href="/data-deletion.html"
              className="font-semibold text-primary underline underline-offset-2"
            >
              Hapus Data
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
