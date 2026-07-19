import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHero, EmailCallout, H2, Prose } from "@/components/Legal";

const legalLinks = [
  { href: "/#fitur", label: "Fitur" },
  { href: "/#cara", label: "Cara Pakai" },
  { href: "/privacy.html", label: "Kebijakan Privasi" },
];

const emailBody = `Halo Tim BeJo,

Saya mau minta akun dan semua data saya dihapus.

Nama:
Email/username akun:
Nomor HP yang terdaftar:

Terima kasih.`;

const steps = [
  ["Buka email kamu", "lalu bikin pesan baru ke moobejo@gmail.com."],
  ['Pakai judul', '"Permintaan Hapus Data BeJo".'],
  ["Tulis data akun kamu", "biar kami bisa cek: nama, email atau username akun, dan nomor HP yang terdaftar."],
  ["Kirim emailnya", "kami proses setelah datanya cocok."],
];

export default function DataDeletion() {
  return (
    <>
      <Header links={legalLinks} variant="legal" />
      <LegalHero
        title="Hapus Data"
        desc="Data kamu, kamu yang pegang. Halaman ini menjelaskan cara minta akun dan semua data kamu dihapus dari BeJo."
        updated="19 Juli 2026"
      />

      <section className="py-14 md:py-16">
        <div className="container max-w-3xl">
          <Prose>
            <H2>Cara Minta Data Dihapus</H2>
            <p>
              Buat minta akun dan semua data pribadi kamu di BeJo dihapus, kamu perlu{" "}
              <strong>mengirim permintaan lewat email</strong> ke alamat resmi kami:
            </p>

            <EmailCallout
              title="Kirim ke:"
              subject="Permintaan Hapus Data BeJo"
              body={emailBody}
            >
              Sampaikan permintaan hapus data kamu lewat email ini. Cuma lewat email ini
              permintaan hapus data kami terima.
            </EmailCallout>

            <H2>Langkah demi Langkah</H2>
            <ol className="my-5 flex list-none flex-col gap-4 p-0">
              {steps.map(([bold, rest], i) => (
                <li
                  key={i}
                  className="relative rounded-2xl bg-card py-4 pl-16 pr-5 shadow-soft"
                >
                  <span className="absolute left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  <strong>{bold}</strong> {rest}
                </li>
              ))}
            </ol>

            <H2>Data yang Akan Dihapus</H2>
            <p>Setelah dicek dan diproses, data ini akan dihapus:</p>
            <ul>
              <li>Data akun (nama, email, nomor HP, kata sandi).</li>
              <li>Data usaha (nama toko, alamat, NMID QRIS, data rekening bank).</li>
              <li>Riwayat transaksi dan catatan penjualan.</li>
              <li>Gambar yang diunggah (foto profil, foto usaha, gambar QRIS).</li>
              <li>Data absen dan lokasinya.</li>
              <li>Data produk, kategori, dan stok (kalau ada).</li>
            </ul>

            <H2>Yang Perlu Diingat</H2>
            <ul>
              <li><strong>Kami cek dulu:</strong> demi keamanan, kami cuma proses permintaan yang cocok dengan akun terdaftar.</li>
              <li><strong>Data tim:</strong> kalau kamu pemilik utama sebuah usaha, menghapus data bisa berpengaruh ke data bersama tim. Kami konfirmasi dulu sebelum lanjut.</li>
              <li><strong>Aturan hukum:</strong> sebagian data mungkin perlu kami simpan buat memenuhi kewajiban hukum atau pembukuan, sesuai aturan yang berlaku.</li>
              <li><strong>Cuma mau bersihin HP:</strong> kalau kamu cuma mau hapus data di HP, cukup <em>keluar (logout)</em> dari aplikasi. Semua data di HP langsung terhapus.</li>
            </ul>

            <H2>Berapa Lama Prosesnya</H2>
            <p>
              Kami berusaha memproses permintaan hapus data dalam waktu yang wajar
              setelah dicek. Kamu akan dapat email konfirmasi begitu selesai.
            </p>

            <H2>Butuh Bantuan?</H2>
            <p>
              Kalau ada yang mau ditanya soal hapus data atau privasi kamu, hubungi kami
              kapan saja di <a href="mailto:moobejo@gmail.com">moobejo@gmail.com</a>. Lihat
              juga <a href="/privacy.html">Kebijakan Privasi</a> kami buat penjelasan lengkap.
            </p>
          </Prose>
        </div>
      </section>

      <Footer />
    </>
  );
}
