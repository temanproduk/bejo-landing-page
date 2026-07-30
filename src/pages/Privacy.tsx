import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHero, EmailCallout, H2, Prose } from "@/components/Legal";

const legalLinks = [
  { href: "/#uang-masuk", label: "Uang Masuk QRIS" },
  { href: "/#cara", label: "Cara Pakai" },
  { href: "/data-deletion.html", label: "Hapus Data" },
];

export default function Privacy() {
  return (
    <>
      <Header links={legalLinks} variant="inner" />
      <LegalHero
        title="Kebijakan Privasi"
        desc="Penjelasan soal data apa yang BeJo simpan, dipakai untuk apa, dan hak kamu. Kami hanya mengambil yang memang perlu supaya aplikasinya jalan."
        updated="30 Juli 2026"
      />

      <section className="py-14 md:py-16">
        <div className="container max-w-3xl">
          <Prose>
            <H2>1. Pembuka</H2>
            <p>
              BeJo (kami) adalah aplikasi buat memberi tahu pembayaran masuk untuk
              pedagang QRIS di Indonesia. Halaman ini menjelaskan data apa yang kami
              kumpulkan saat kamu pakai BeJo, kami pakai buat apa, dan pilihan yang
              kamu punya. Dengan memakai BeJo, kamu setuju dengan cara kerja yang
              dijelaskan di sini.
            </p>

            <H2>2. Data yang Kami Simpan</H2>
            <p>Kami menyimpan data berikut supaya fungsi utama aplikasi bisa jalan:</p>
            <ul>
              <li><strong>Data akun:</strong> nama, email, nomor HP, dan kata sandi (disimpan dalam bentuk teracak).</li>
              <li><strong>Data usaha:</strong> nama toko, alamat, jenis usaha, ukuran usaha, NMID QRIS, dan data rekening bank buat pencairan.</li>
              <li><strong>Data transaksi:</strong> catatan uang masuk (jumlah, waktu, sumbernya), baik dari QRIS, dicatat sendiri, atau dibaca dari notifikasi aplikasi lain.</li>
              <li><strong>Lokasi (kalau dipakai):</strong> saat karyawan absen masuk atau pulang, dan saat iklan suara diputar bila kamu menyalakan fitur itu. Lokasi hanya diambil ketika fitur tersebut dipakai.</li>
              <li><strong>Gambar (kalau dipakai):</strong> foto profil, foto usaha, dan gambar QRIS yang kamu unggah.</li>
              <li><strong>Data perangkat:</strong> token notifikasi (FCM) buat mengirim pesan pembayaran ke HP kamu.</li>
            </ul>

            <H2>3. Izin Membaca Notifikasi Aplikasi Lain</H2>
            <p>
              BeJo bisa minta izin buat membaca notifikasi dari aplikasi bank dan
              dompet digital lain yang kamu pilih, cuma buat mengenali uang masuk lalu
              menyebutkannya. Saat izin ini aktif:
            </p>
            <ul>
              <li>BeJo cuma membaca notifikasi dari aplikasi yang kamu masukkan sendiri ke daftar pantau.</li>
              <li>Notifikasi diperiksa <strong>di HP kamu</strong> buat mengenali jumlah pembayaran. Pesan iklan dan yang bukan pembayaran disaring.</li>
              <li>Isi notifikasi tidak kami bagikan ke pihak lain buat iklan.</li>
            </ul>
            <p>Kamu bisa matikan izin ini kapan saja lewat pengaturan HP atau halaman Profil di aplikasi.</p>

            <H2>4. Iklan Suara (Pilihan)</H2>
            <p>
              BeJo punya fitur <strong>Terima Iklan Suara</strong> yang{" "}
              <strong>mati secara bawaan</strong>. Fitur ini hanya jalan kalau pemilik
              usaha menyalakannya sendiri dari pengaturan aplikasi. Kalau kamu
              menyalakannya:
            </p>
            <ul>
              <li>Iklan suara singkat, paling lama sekitar 20 detik, bisa diputar di HP kamu.</li>
              <li>Kami mencatat bahwa iklan itu sudah diputar, kapan, dan di lokasi mana. Lokasi dipakai untuk laporan kampanye ke pemilik brand.</li>
              <li>Laporan ke pemilik brand berbentuk rangkuman. Kami <strong>tidak</strong> memberikan nama, nomor HP, atau data transaksi kamu ke pemilik brand.</li>
              <li>Kamu bisa mematikan fitur ini kapan saja, dan iklan berhenti dikirim.</li>
            </ul>

            <H2>5. Kami Pakai Data Buat Apa</H2>
            <ul>
              <li>Menyebutkan dan mencatat uang yang masuk.</li>
              <li>Menampilkan riwayat transaksi serta ringkasan harian dan bulanan.</li>
              <li>Mengatur kode QRIS, produk, stok, tim, dan absen.</li>
              <li>Mengirim pemberitahuan soal aktivitas akun kamu.</li>
              <li>Menjaga keamanan, mencegah penyalahgunaan, dan memperbaiki aplikasi.</li>
            </ul>

            <H2>6. Berbagi Data</H2>
            <p>Kami <strong>tidak menjual</strong> data pribadi kamu. Data cuma dibagikan dalam hal berikut:</p>
            <ul>
              <li><strong>Ke tim kamu:</strong> karyawan dalam satu usaha berbagi data transaksi, produk, dan pengaturan sesuai perannya.</li>
              <li><strong>Ke penyedia layanan:</strong> layanan pendukung seperti Firebase (notifikasi) dan layanan analitik, dengan perjanjian pengolahan data.</li>
              <li><strong>Kalau diminta hukum:</strong> bila diwajibkan oleh aturan yang berlaku.</li>
            </ul>

            <H2>7. Analitik</H2>
            <p>
              BeJo bisa memakai alat analitik (Amplitude) buat memahami cara aplikasi
              dipakai. Kami sengaja <strong>tidak pernah</strong> mengirim token masuk
              atau gambar (foto usaha atau profil) ke sistem analitik. Yang dikirim cuma
              penanda ringkas, misalnya "punya foto profil: ya atau tidak". Kalau fitur
              rekam layar aktif, data penting seperti jumlah uang, nomor rekening, dan
              lokasi <strong>ditutupi</strong> dulu sebelum direkam.
            </p>

            <H2>8. Berapa Lama Data Disimpan</H2>
            <p>
              Kami menyimpan data akun dan transaksi selama akun kamu aktif. Saat kamu{" "}
              <strong>keluar (logout)</strong>, semua data di HP dihapus, termasuk sesi,
              gambar QRIS, foto profil, paket suara, dan cache. Data di server disimpan
              sampai kamu minta akunnya dihapus.
            </p>

            <H2>9. Hak Kamu</H2>
            <ul>
              <li>Melihat dan mengubah data akun lewat aplikasi.</li>
              <li>Menarik izin (misalnya akses notifikasi atau lokasi) kapan saja.</li>
              <li>Minta data dan akun kamu dihapus (lihat bagian di bawah).</li>
            </ul>

            <H2>10. Hapus Data</H2>
            <EmailCallout
              title="Mau hapus data kamu?"
              subject="Permintaan Hapus Data BeJo"
            >
              Buat minta akun dan semua data kamu dihapus, kirim permintaan ke email di
              bawah ini. Nanti kami proses.
            </EmailCallout>
            <p>
              Panduan lengkapnya ada di halaman{" "}
              <a href="/data-deletion.html">Hapus Data</a>.
            </p>

            <H2>11. Keamanan</H2>
            <p>
              Kami berusaha menjaga data kamu dengan cara yang wajar, seperti mengacak
              kata sandi, memakai token buat masuk, dan pilihan kunci sidik jari atau
              wajah buat membuka aplikasi. Tapi, tidak ada cara pengiriman atau
              penyimpanan yang benar-benar 100% aman.
            </p>

            <H2>12. Hubungi Kami</H2>
            <p>
              Kalau ada pertanyaan soal privasi ini atau mau memakai hak kamu, hubungi
              kami di <a href="mailto:moobejo@gmail.com">moobejo@gmail.com</a>.
            </p>
          </Prose>
        </div>
      </section>

      <Footer />
    </>
  );
}
