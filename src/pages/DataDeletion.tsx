import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHero, EmailCallout, H2, Prose } from "@/components/Legal";
import { localize, t } from "@/lib/i18n";

const subject = t("Permintaan Hapus Data BeJo", "BeJo Data Deletion Request");

const emailBody = t(
  `Halo Tim BeJo,

Saya mau minta akun dan semua data saya dihapus.

Nama:
Email/username akun:
Nomor HP yang terdaftar:

Terima kasih.`,
  `Hi BeJo team,

I'd like my account and all of my data deleted.

Name:
Account email/username:
Registered phone number:

Thank you.`
);

const steps = t(
  [
    ["Buka email kamu", "lalu bikin pesan baru ke moobejo@gmail.com."],
    ["Pakai judul", `"${subject}".`],
    ["Tulis data akun kamu", "biar kami bisa cek: nama, email atau username akun, dan nomor HP yang terdaftar."],
    ["Kirim emailnya", "kami proses setelah datanya cocok."],
  ],
  [
    ["Open your email", "and start a new message to moobejo@gmail.com."],
    ["Use the subject", `"${subject}".`],
    ["Include your account details", "so we can verify them: name, account email or username, and registered phone number."],
    ["Send the email", "and we'll process it once the details match."],
  ]
);

export default function DataDeletion() {
  return (
    <>
      <Header variant="inner" />
      <LegalHero
        title={t("Hapus Data", "Delete Data")}
        desc={t(
          "Data kamu, kamu yang pegang. Halaman ini menjelaskan cara meminta akun dan semua datamu dihapus dari BeJo.",
          "Your data is yours. This page explains how to ask for your account and all of your data to be deleted from BeJo."
        )}
        updated={t("30 Juli 2026", "July 30, 2026")}
      />

      <section className="py-14 md:py-16">
        <div className="container max-w-3xl">
          <Prose>
            <H2>{t("Cara Minta Data Dihapus", "How to Request Deletion")}</H2>
            <p>
              {t(
                <>
                  Buat minta akun dan semua data pribadi kamu di BeJo dihapus, kamu perlu{" "}
                  <strong>mengirim permintaan lewat email</strong> ke alamat resmi kami:
                </>,
                <>
                  To have your BeJo account and all of your personal data deleted, you need
                  to <strong>send a request by email</strong> to our official address:
                </>
              )}
            </p>

            <EmailCallout title={t("Kirim ke:", "Send to:")} subject={subject} body={emailBody}>
              {t(
                "Sampaikan permintaan hapus data kamu lewat email ini. Cuma lewat email ini permintaan hapus data kami terima.",
                "Send your deletion request to this email. It's the only channel we accept deletion requests through."
              )}
            </EmailCallout>

            <H2>{t("Langkah demi Langkah", "Step by Step")}</H2>
            <ol className="my-6 list-none divide-y divide-line border-y border-line p-0">
              {steps.map(([bold, rest], i) => (
                <li key={i} className="flex gap-4 py-4">
                  <span className="font-mono text-sm text-gold-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong>{bold}</strong> {rest}
                  </span>
                </li>
              ))}
            </ol>

            {t(
              <>
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
                  <li><strong>Cuma mau bersihin HP:</strong> kalau kamu cuma mau hapus data di HP, cukup <em>keluar (logout)</em> dari aplikasi. Data pribadimu di HP langsung terhapus. Hanya file model pengolah suara yang sudah diunduh (bukan data pribadi) yang tetap ada; file itu bisa dihapus lewat <em>Hapus suara saya</em> di aplikasi.</li>
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
              </>,
              <>
                <H2>What Gets Deleted</H2>
                <p>Once verified and processed, the following data is deleted:</p>
                <ul>
                  <li>Account data (name, email, phone number, password).</li>
                  <li>Business data (shop name, address, QRIS NMID, bank account details).</li>
                  <li>Transaction history and sales records.</li>
                  <li>Uploaded images (profile photo, business photo, QRIS image).</li>
                  <li>Attendance records and their locations.</li>
                  <li>Product, category, and stock data (if any).</li>
                </ul>

                <H2>Good to Know</H2>
                <ul>
                  <li><strong>We verify first:</strong> for security, we only process requests that match a registered account.</li>
                  <li><strong>Team data:</strong> if you are the main owner of a business, deleting your data may affect data shared with your team. We'll confirm with you before going ahead.</li>
                  <li><strong>Legal requirements:</strong> some data may need to be kept to meet legal or bookkeeping obligations under applicable law.</li>
                  <li><strong>Just want to clear your phone:</strong> if you only want to remove the data on your phone, simply <em>log out</em> of the app. Your personal data on the phone is deleted right away. Only the downloaded speech-model files (not personal data) stay; you can remove them with <em>Hapus suara saya</em> in the app.</li>
                </ul>

                <H2>How Long It Takes</H2>
                <p>
                  We aim to process deletion requests within a reasonable time after
                  verification. You'll get a confirmation email once it's done.
                </p>

                <H2>Need Help?</H2>
                <p>
                  If you have any questions about data deletion or your privacy, reach us
                  any time at <a href="mailto:moobejo@gmail.com">moobejo@gmail.com</a>. See
                  also our <a href={localize("/privacy.html")}>Privacy Policy</a> for the full details.
                </p>
              </>
            )}
          </Prose>
        </div>
      </section>

      <Footer />
    </>
  );
}
