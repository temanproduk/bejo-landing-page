import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalHero, EmailCallout, H2, Prose } from "@/components/Legal";
import { localize, t } from "@/lib/i18n";

export default function Privacy() {
  return (
    <>
      <Header variant="inner" />
      <LegalHero
        title={t("Kebijakan Privasi", "Privacy Policy")}
        desc={t(
          "Penjelasan soal data apa yang BeJo simpan, dipakai untuk apa, dan hak kamu. Kami hanya mengambil yang memang perlu supaya aplikasinya jalan.",
          "What data BeJo keeps, what it's used for, and your rights. We only collect what the app actually needs to work."
        )}
        updated={t("15 Oktober 2026", "October 15, 2026")}
      />

      <section className="py-14 md:py-16">
        <div className="container max-w-3xl">
          <Prose>
            {t(
              <>
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
                  <li><strong>Suara (kalau dipakai):</strong> rekaman suara singkat saat kamu menekan tombol mikrofon di kolom nominal. Rekaman ini tidak kami simpan (lihat bagian 5).</li>
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

                <H2>5. Isi Nominal dengan Suara (Pilihan)</H2>
                <p>
                  Di kolom <strong>Nominal</strong> (saat mencatat transaksi dan saat membuat
                  QRIS dengan nominal) ada tombol mikrofon buat menyebutkan nominalnya, misalnya
                  "dua puluh lima ribu". Fitur ini <strong>hanya jalan saat kamu menekan tombol
                  mikrofon itu</strong>. Kalau kamu memakainya:
                </p>
                <ul>
                  <li>BeJo meminta izin mikrofon saat pertama kali kamu menekan tombolnya. Kalau izin ditolak, kamu tetap bisa mengetik nominalnya seperti biasa.</li>
                  <li>BeJo merekam beberapa detik suara kamu, lalu berhenti sendiri setelah kamu selesai bicara. BeJo <strong>tidak</strong> merekam suara di waktu lain, termasuk di latar belakang.</li>
                  <li>Rekaman dikirim ke server kami dan diteruskan ke penyedia layanan pengenalan suara, semata-mata buat diubah menjadi teks dan angka.</li>
                  <li>Kami <strong>tidak menyimpan</strong> rekaman suara kamu, dan kami tidak mencatat isi rekaman maupun teks hasil pengenalannya. Hasilnya cuma mengisi kolom nominal; kamu yang memeriksa dan menyimpannya.</li>
                  <li>Kamu bisa menarik izin mikrofon kapan saja lewat pengaturan HP.</li>
                </ul>

                <H2>6. Kami Pakai Data Buat Apa</H2>
                <ul>
                  <li>Menyebutkan dan mencatat uang yang masuk.</li>
                  <li>Menampilkan riwayat transaksi serta ringkasan harian dan bulanan.</li>
                  <li>Mengatur kode QRIS, produk, stok, tim, dan absen.</li>
                  <li>Mengirim pemberitahuan soal aktivitas akun kamu.</li>
                  <li>Menjaga keamanan, mencegah penyalahgunaan, dan memperbaiki aplikasi.</li>
                </ul>

                <H2>7. Berbagi Data</H2>
                <p>Kami <strong>tidak menjual</strong> data pribadi kamu. Data cuma dibagikan dalam hal berikut:</p>
                <ul>
                  <li><strong>Ke tim kamu:</strong> karyawan dalam satu usaha berbagi data transaksi, produk, dan pengaturan sesuai perannya.</li>
                  <li><strong>Ke penyedia layanan:</strong> layanan pendukung seperti Firebase (notifikasi), layanan analitik, dan layanan pengenalan suara (hanya saat kamu memakai tombol mikrofon), dengan perjanjian pengolahan data.</li>
                  <li><strong>Kalau diminta hukum:</strong> bila diwajibkan oleh aturan yang berlaku.</li>
                </ul>

                <H2>8. Analitik</H2>
                <p>
                  BeJo bisa memakai alat analitik (Amplitude) buat memahami cara aplikasi
                  dipakai. Kami sengaja <strong>tidak pernah</strong> mengirim token masuk
                  atau gambar (foto usaha atau profil) ke sistem analitik. Yang dikirim cuma
                  penanda ringkas, misalnya "punya foto profil: ya atau tidak". Kalau fitur
                  rekam layar aktif, data penting seperti jumlah uang, nomor rekening, dan
                  lokasi <strong>ditutupi</strong> dulu sebelum direkam.
                </p>

                <H2>9. Berapa Lama Data Disimpan</H2>
                <p>
                  Kami menyimpan data akun dan transaksi selama akun kamu aktif. Saat kamu{" "}
                  <strong>keluar (logout)</strong>, semua data di HP dihapus, termasuk sesi,
                  gambar QRIS, foto profil, paket suara, dan cache. Data di server disimpan
                  sampai kamu minta akunnya dihapus. Rekaman suara buat mengisi nominal tidak
                  disimpan sama sekali.
                </p>

                <H2>10. Hak Kamu</H2>
                <ul>
                  <li>Melihat dan mengubah data akun lewat aplikasi.</li>
                  <li>Menarik izin (misalnya akses notifikasi, lokasi, atau mikrofon) kapan saja.</li>
                  <li>Minta data dan akun kamu dihapus (lihat bagian di bawah).</li>
                </ul>

                <H2>11. Hapus Data</H2>
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

                <H2>12. Keamanan</H2>
                <p>
                  Kami berusaha menjaga data kamu dengan cara yang wajar, seperti mengacak
                  kata sandi, memakai token buat masuk, dan pilihan kunci sidik jari atau
                  wajah buat membuka aplikasi. Tapi, tidak ada cara pengiriman atau
                  penyimpanan yang benar-benar 100% aman.
                </p>

                <H2>13. Hubungi Kami</H2>
                <p>
                  Kalau ada pertanyaan soal privasi ini atau mau memakai hak kamu, hubungi
                  kami di <a href="mailto:moobejo@gmail.com">moobejo@gmail.com</a>.
                </p>
              </>,
              <>
                <H2>1. Introduction</H2>
                <p>
                  BeJo ("we") is an app that notifies QRIS merchants in Indonesia about
                  incoming payments. This page explains what data we collect when you use
                  BeJo, what we use it for, and the choices you have. By using BeJo, you
                  agree to the practices described here.
                </p>

                <H2>2. Data We Store</H2>
                <p>We store the following data so the app's core features can work:</p>
                <ul>
                  <li><strong>Account data:</strong> name, email, phone number, and password (stored hashed).</li>
                  <li><strong>Business data:</strong> shop name, address, business type, business size, QRIS NMID, and bank account details for payouts.</li>
                  <li><strong>Transaction data:</strong> records of incoming money (amount, time, source), whether from QRIS, entered by hand, or read from other apps' notifications.</li>
                  <li><strong>Location (when used):</strong> when employees clock in or out, and when a voice ad plays if you've turned that feature on. Location is only collected while those features are in use.</li>
                  <li><strong>Images (when used):</strong> the profile photo, business photo, and QRIS image you upload.</li>
                  <li><strong>Voice (when used):</strong> a short voice recording when you tap the microphone button in the amount field. We do not keep this recording (see section 5).</li>
                  <li><strong>Device data:</strong> a notification token (FCM) used to send payment messages to your phone.</li>
                </ul>

                <H2>3. Permission to Read Other Apps' Notifications</H2>
                <p>
                  BeJo may ask for permission to read notifications from the banking and
                  e-wallet apps you choose, solely to recognize incoming money and announce
                  it. While this permission is on:
                </p>
                <ul>
                  <li>BeJo only reads notifications from apps you added to the watch list yourself.</li>
                  <li>Notifications are checked <strong>on your phone</strong> to recognize payment amounts. Ads and non-payment messages are filtered out.</li>
                  <li>We don't share notification content with anyone for advertising.</li>
                </ul>
                <p>You can turn this permission off at any time in your phone settings or on the Profile page in the app.</p>

                <H2>4. Voice Ads (Optional)</H2>
                <p>
                  BeJo has a <strong>Receive Voice Ads</strong> feature that is{" "}
                  <strong>off by default</strong>. It only runs if the business owner turns
                  it on in the app settings. If you turn it on:
                </p>
                <ul>
                  <li>Short voice ads, around 20 seconds at most, may play on your phone.</li>
                  <li>We record that the ad was played, when, and where. Location is used for campaign reports to the brand.</li>
                  <li>Reports to brands are aggregated. We do <strong>not</strong> give brands your name, phone number, or transaction data.</li>
                  <li>You can turn the feature off at any time, and ads stop being sent.</li>
                </ul>

                <H2>5. Say the Amount by Voice (Optional)</H2>
                <p>
                  The <strong>Amount</strong> field (when recording a transaction and when
                  creating a QRIS with an amount) has a microphone button for saying the
                  amount out loud, for example "dua puluh lima ribu". This feature{" "}
                  <strong>only runs when you tap that microphone button</strong>. If you use
                  it:
                </p>
                <ul>
                  <li>BeJo asks for microphone permission the first time you tap the button. If you decline, you can still type the amount as usual.</li>
                  <li>BeJo records a few seconds of your voice, then stops by itself once you finish speaking. BeJo does <strong>not</strong> record at any other time, including in the background.</li>
                  <li>The recording is sent to our server and passed on to a speech recognition provider, solely to be turned into text and numbers.</li>
                  <li>We <strong>do not keep</strong> your voice recording, and we do not log what was said or the text it was turned into. The result only fills the amount field; you check it and save it yourself.</li>
                  <li>You can withdraw microphone permission at any time in your phone settings.</li>
                </ul>

                <H2>6. How We Use Data</H2>
                <ul>
                  <li>Announcing and recording incoming money.</li>
                  <li>Showing transaction history and daily and monthly summaries.</li>
                  <li>Managing QRIS codes, products, stock, teams, and attendance.</li>
                  <li>Sending notifications about activity on your account.</li>
                  <li>Keeping things secure, preventing abuse, and improving the app.</li>
                </ul>

                <H2>7. Sharing Data</H2>
                <p>We <strong>do not sell</strong> your personal data. Data is only shared in these cases:</p>
                <ul>
                  <li><strong>With your team:</strong> employees in the same business share transaction, product, and settings data according to their role.</li>
                  <li><strong>With service providers:</strong> supporting services such as Firebase (notifications), analytics services, and a speech recognition service (only when you use the microphone button), under data processing agreements.</li>
                  <li><strong>When required by law:</strong> where applicable regulations require it.</li>
                </ul>

                <H2>8. Analytics</H2>
                <p>
                  BeJo may use an analytics tool (Amplitude) to understand how the app is
                  used. We deliberately <strong>never</strong> send sign-in tokens or images
                  (business or profile photos) to the analytics system. Only short flags are
                  sent, such as "has a profile photo: yes or no". If session recording is
                  on, sensitive data like amounts, account numbers, and location is{" "}
                  <strong>masked</strong> before recording.
                </p>

                <H2>9. How Long Data Is Kept</H2>
                <p>
                  We keep account and transaction data for as long as your account is
                  active. When you <strong>log out</strong>, all data on the phone is
                  deleted, including the session, QRIS image, profile photo, sound packs,
                  and cache. Data on the server is kept until you ask for your account to be
                  deleted. Voice recordings used to fill in an amount are not kept at all.
                </p>

                <H2>10. Your Rights</H2>
                <ul>
                  <li>View and change your account data in the app.</li>
                  <li>Withdraw permissions (such as notification, location, or microphone access) at any time.</li>
                  <li>Ask for your data and account to be deleted (see below).</li>
                </ul>

                <H2>11. Deleting Your Data</H2>
                <EmailCallout
                  title="Want your data deleted?"
                  subject="BeJo Data Deletion Request"
                >
                  To have your account and all of your data deleted, send a request to the
                  email below and we'll take care of it.
                </EmailCallout>
                <p>
                  The full guide is on the{" "}
                  <a href={localize("/data-deletion.html")}>Delete Data</a> page.
                </p>

                <H2>12. Security</H2>
                <p>
                  We take reasonable steps to protect your data, such as hashing passwords,
                  using tokens for sign-in, and offering a fingerprint or face lock to open
                  the app. Still, no method of transmission or storage is 100% secure.
                </p>

                <H2>13. Contact Us</H2>
                <p>
                  If you have questions about this policy or want to exercise your rights,
                  contact us at <a href="mailto:moobejo@gmail.com">moobejo@gmail.com</a>.
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
