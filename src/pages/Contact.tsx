import { useState } from "react";
import { Mail, Copy, Check, Clock, MessageSquare } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHero } from "@/components/Legal";
import { Button } from "@/components/ui/button";
import { localize, t } from "@/lib/i18n";

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
      <Header variant="inner" />
      <LegalHero
        label={t("Hubungi kami", "Contact us")}
        title={t("Ada yang mau ditanyakan?", "Got a question?")}
        desc={t(
          "Kalau ada kendala, masukan, atau mau kerja sama, kirim email ke kami. Dengan senang hati kami bantu.",
          "Running into a problem, have feedback, or want to work together? Send us an email. We're happy to help."
        )}
      />

      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <div className="border border-line-strong bg-white">
            <div className="border-b border-line px-6 py-3">
              <span className="eyebrow text-ink-faint">{t("Alamat email", "Email address")}</span>
            </div>

            <div className="p-6 md:p-8">
              {!shown ? (
                <>
                  <p className="text-[17px] text-ink-soft">
                    {t(
                      "Ketuk tombol di bawah untuk menampilkan alamat email kami.",
                      "Tap the button below to show our email address."
                    )}
                  </p>
                  <Button size="lg" className="mt-6" onClick={() => setShown(true)}>
                    <Mail aria-hidden="true" /> {t("Tampilkan alamat email", "Show email address")}
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
                    {copied ? t("Tersalin", "Copied") : t("Salin", "Copy")}
                  </Button>
                </div>
              )}

              <dl className="mt-8 grid gap-6 border-t border-line pt-7 sm:grid-cols-2">
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-none text-green" aria-hidden="true" />
                  <div>
                    <dt className="font-bold">{t("Waktu balasan", "Response time")}</dt>
                    <dd className="mt-1 text-[15px] text-ink-soft">
                      {t(
                        "Kami usahakan balas secepatnya di hari kerja.",
                        "We aim to reply as soon as we can on working days."
                      )}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 flex-none text-green" aria-hidden="true" />
                  <div>
                    <dt className="font-bold">{t("Biar cepat dibantu", "For a faster answer")}</dt>
                    <dd className="mt-1 text-[15px] text-ink-soft">
                      {t(
                        "Sebutkan nama usahamu dan ceritakan kendalanya sejelas mungkin.",
                        "Include your business name and describe the problem as clearly as you can."
                      )}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          <p className="mt-6 text-sm text-ink-faint">
            {t("Mau menghapus datamu? Lihat halaman", "Want your data deleted? See the")}{" "}
            <a
              href={localize("/data-deletion.html")}
              className="font-semibold text-green underline underline-offset-2"
            >
              {t("Hapus Data", "Delete Data")}
            </a>
            {t(".", " page.")}
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
