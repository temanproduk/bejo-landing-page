const productLinks = [
  { href: "/#fitur", label: "Fitur" },
  { href: "/#cara", label: "Cara Pakai" },
  { href: "/#rekap", label: "Catatan Penjualan" },
  { href: "/#unduh", label: "Pasang" },
];

const legalLinks = [
  { href: "/privacy.html", label: "Kebijakan Privasi" },
  { href: "/data-deletion.html", label: "Hapus Data" },
];

export function Footer() {
  return (
    <footer className="bg-[#10201a] py-16 text-[#c7d3cb]">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xl font-extrabold text-white">
              <img
                src="/assets/bejo-icon-round.png"
                alt="BeJo"
                className="h-10 w-10 rounded-xl"
              />
              <span>Be<span className="text-[#6fc79b]">Jo</span></span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              Aplikasi untuk membunyikan uang masuk dari QRIS tanpa harus liat HP.
              Dihadirkan untuk pemilik usaha yang menggunakan pembayaran dengan QRIS.
            </p>
          </div>

          <FooterCol title="Produk" links={productLinks} />
          <FooterCol title="Ketentuan" links={legalLinks} />

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-white">
              Hubungi Kami
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="/contact.html"
                  className="text-[14.5px] transition-colors hover:text-[#6fc79b]"
                >
                  Kirim pesan ke kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-11 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-[13.5px] text-[#8a9990] sm:flex-row sm:text-left">
          <span>© 2026 BeJo. Dibuat untuk warung, kios, dan toko kecil di Indonesia.</span>
          <span className="flex gap-2">
            <a href="/" className="hover:text-[#6fc79b]">Beranda</a>
            <span>·</span>
            <a href="/privacy.html" className="hover:text-[#6fc79b]">Privasi</a>
            <span>·</span>
            <a href="/data-deletion.html" className="hover:text-[#6fc79b]">Hapus Data</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-white">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[14.5px] transition-colors hover:text-[#6fc79b]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
