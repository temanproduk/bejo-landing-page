import { useState } from "react";
import { Mail, Copy, Check, Clock, MessageSquare } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHero } from "@/components/Legal";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#uang-masuk", label: "Uang Masuk QRIS" },
  { href: "/brand.html", label: "Untuk Brand" },
  { href: "/privacy.html", label: "Kebijakan Privasi" },
];

// Assembled at runtime so the address is not sitting in the page source.
const USER = "moobejo";
const DOMAIN = "gmail.com";

export default function Contact() {
  const [shown, setShown] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = `${USER}@${DOMAIN}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; the mail link still works.
    }
  };

  return (
    <>
      <Header links={links} variant="inner" />
      <LegalHero
        label="Hubungi kami"
        title="Ada yang mau ditanyakan?"
        desc="Kalau ada kendala, masukan, atau mau kerja sama, kirim email ke kami. Dengan senang hati kami bantu."
      />

      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <div className="border border-line-strong bg-white">
            <div className="border-b border-line px-6 py-3">
              <span className="eyebrow text-ink-faint">Alamat email</span>
            </div>

            <div className="p-6 md:p-8">
              {!shown ? (
                <>
                  <p className="text-[17px] text-ink-soft">
                    Ketuk tombol di bawah untuk menampilkan alamat email kami.
                  </p>
                  <Button size="lg" className="mt-6" onClick={() => setShown(true)}>
                    <Mail aria-hidden="true" /> Tampilkan alamat email
                  </Button>
                </>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={`mailto:${email}`}
                    className="flex flex-1 items-center justify-center gap-2.5 border border-green bg-mint px-5 py-4 font-mono text-[15px] font-bold text-green-deep transition-colors hover:bg-green hover:text-white"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {email}
                  </a>
                  <Button variant="outline" size="lg" onClick={copy}>
                    {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                    {copied ? "Tersalin" : "Salin"}
                  </Button>
                </div>
              )}

              <dl className="mt-8 grid gap-6 border-t border-line pt-7 sm:grid-cols-2">
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-none text-green" aria-hidden="true" />
                  <div>
                    <dt className="font-bold">Waktu balasan</dt>
                    <dd className="mt-1 text-[15px] text-ink-soft">
                      Kami usahakan balas secepatnya di hari kerja.
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 flex-none text-green" aria-hidden="true" />
                  <div>
                    <dt className="font-bold">Biar cepat dibantu</dt>
                    <dd className="mt-1 text-[15px] text-ink-soft">
                      Sebutkan nama usahamu dan ceritakan kendalanya sejelas mungkin.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          <p className="mt-6 text-sm text-ink-faint">
            Mau menghapus datamu? Lihat halaman{" "}
            <a
              href="/data-deletion.html"
              className="font-semibold text-green underline underline-offset-2"
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
