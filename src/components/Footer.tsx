import { localize, t } from "@/lib/i18n";
import { LangSwitch } from "@/components/LangSwitch";

const columns = [
  {
    title: t("Produk", "Product"),
    links: [
      { href: "/#uang-masuk", label: t("Uang Masuk QRIS", "QRIS Payments") },
      { href: "/#kirim-qris", label: t("Tagih Lewat QRIS", "Bill via QRIS") },
      { href: "/#tim", label: t("Kelola Tim & Absensi", "Team & Attendance") },
      { href: "/#catatan", label: t("Catatan Transaksi", "Sales Records") },
    ],
  },
  {
    title: t("Informasi", "Information"),
    links: [
      { href: "/#cara", label: t("Cara Pakai", "How It Works") },
      { href: "/perbandingan.html", label: t("Banding Harga", "Compare Prices") },
      { href: "/brand.html", label: t("Untuk Brand", "For Brands") },
      { href: "/contact.html", label: t("Hubungi Kami", "Contact Us") },
    ],
  },
  {
    title: t("Ketentuan", "Legal"),
    links: [
      { href: "/privacy.html", label: t("Kebijakan Privasi", "Privacy Policy") },
      { href: "/data-deletion.html", label: t("Hapus Data", "Delete Data") },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night pb-10 pt-16 text-white">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/assets/bejo-icon-round.png"
                alt=""
                className="h-12 w-12"
                aria-hidden="true"
              />
              <span className="font-display text-[28px] leading-none">
                Be<span className="text-gold">Jo</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {t(
                "Aplikasi untuk membunyikan uang masuk dari QRIS tanpa harus liat HP. Dihadirkan untuk pemilik usaha yang menggunakan pembayaran dengan QRIS.",
                "An app that announces incoming QRIS payments out loud, so you never have to check your phone. Made for business owners who take payments by QRIS."
              )}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-white/40">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={localize(l.href)}
                      className="text-sm text-white/75 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} BeJo.{" "}
            {t(
              "Dibuat untuk warung, kios, dan toko kecil di Indonesia.",
              "Made for warungs, kiosks, and small shops across Indonesia."
            )}
          </span>
          <span className="flex items-center gap-5">
            <a href={localize("/contact.html")} className="transition-colors hover:text-gold">
              {t("Ada yang mau ditanyakan?", "Got a question?")}
            </a>
            <LangSwitch tone="dark" />
          </span>
        </div>
      </div>
    </footer>
  );
}
