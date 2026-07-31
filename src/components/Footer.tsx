const columns = [
  {
    title: "Produk",
    links: [
      { href: "/#uang-masuk", label: "Uang Masuk QRIS" },
      { href: "/#kirim-qris", label: "Tagih Lewat QRIS" },
      { href: "/#tim", label: "Kelola Tim & Absensi" },
      { href: "/#catatan", label: "Catatan Transaksi" },
    ],
  },
  {
    title: "Informasi",
    links: [
      { href: "/#cara", label: "Cara Pakai" },
      { href: "/perbandingan.html", label: "Banding Harga" },
      { href: "/brand.html", label: "Untuk Brand" },
      { href: "/contact.html", label: "Hubungi Kami" },
    ],
  },
  {
    title: "Ketentuan",
    links: [
      { href: "/privacy.html", label: "Kebijakan Privasi" },
      { href: "/data-deletion.html", label: "Hapus Data" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-10 pt-16 text-white">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
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
              Aplikasi untuk membunyikan uang masuk dari QRIS tanpa harus liat HP.
              Dihadirkan untuk pemilik usaha yang menggunakan pembayaran dengan QRIS.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-white/40">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
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
            © {new Date().getFullYear()} BeJo. Dibuat untuk warung, kios, dan toko
            kecil di Indonesia.
          </span>
          <a href="/contact.html" className="transition-colors hover:text-gold">
            Ada yang mau ditanyakan?
          </a>
        </div>
      </div>
    </footer>
  );
}
