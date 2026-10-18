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
        updated={t("18 Oktober 2026", "October 18, 2026")}
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
                  <li><strong>Suara (kalau dipakai):</strong> rekaman suara singkat saat kamu menekan tombol mikrofon di kolom nominal atau tombol "Isi dengan suara" di form transaksi manual. Rekaman ini tidak kami simpan (lihat bagian 5 dan 6). Untuk "Isi dengan suara", daftar produk tokomu (nama dan harga) ikut dikirim bersama rekamannya. Rekaman buat paket suara dari suaramu sendiri diolah di HP dan tidak dikirim ke server kami (lihat bagian 7).</li>
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

                <H2>6. Catat Penjualan dengan Suara (Pilihan)</H2>
                <p>
                  Di form <strong>catat transaksi manual</strong> ada tombol{" "}
                  <strong>Isi dengan suara</strong>. Kamu menyebutkan satu penjualan (paling
                  lama 30 detik), misalnya "dua bungkus nasi goreng, dua puluh ribu, bayar
                  tunai", lalu BeJo mengisi formulirnya. Fitur ini{" "}
                  <strong>hanya jalan saat kamu menekan tombol itu</strong>. Kalau kamu
                  memakainya:
                </p>
                <ul>
                  <li>BeJo meminta izin mikrofon saat pertama kali kamu menekan tombolnya. Kalau izin ditolak, kamu tetap bisa mengisi formulirnya dengan mengetik. BeJo <strong>tidak</strong> merekam suara di waktu lain, termasuk di latar belakang.</li>
                  <li>Rekaman dikirim ke server kami bersama <strong>daftar produk tokomu (nama dan harga)</strong>, supaya produk yang kamu sebut bisa dikenali.</li>
                  <li>Server kami meneruskan keduanya ke layanan AI <strong>Gemini milik Google</strong> (lewat Google Cloud Vertex AI), semata-mata buat memahami penjualannya: jumlah uang, cara bayar, keterangan pelanggan atau merchant (kalau kamu menyebutkannya), dan produknya.</li>
                  <li>Kami <strong>tidak menyimpan</strong> rekaman suara kamu maupun teks hasil pengenalannya, dan kami tidak menuliskannya di catatan log.</li>
                  <li>Hasilnya tampil di layar konfirmasi. <strong>Belum ada yang tersimpan sampai kamu menekan konfirmasi.</strong> Setelah kamu konfirmasi, transaksinya (dan produk baru yang kamu sebut, kalau ada) disimpan seperti catatan biasa.</li>
                  <li>AI bisa salah dengar atau salah paham. Periksa hasilnya sebelum kamu konfirmasi. Kamu juga selalu bisa mengisi formulirnya secara manual.</li>
                  <li>Kamu bisa menarik izin mikrofon kapan saja lewat pengaturan HP.</li>
                </ul>

                <H2>7. Suara Sendiri buat Paket Suara (Pilihan)</H2>
                <p>
                  BeJo punya fitur pilihan buat membuat <strong>paket suara dari suaramu
                  sendiri</strong>, jadi uang masuk bisa diumumkan dengan suaramu. Fitur ini
                  bisa saja belum tersedia di versi aplikasi kamu. Kalau kamu
                  memakainya:
                </p>
                <ul>
                  <li>Kamu merekam suaramu sendiri selama 5 sampai 15 detik, setelah mencentang kotak persetujuan. <strong>Hanya suaramu sendiri</strong> yang boleh dipakai; kotak persetujuannya menyatakan itu. Rekaman hanya dimulai setelah kamu sendiri menekan tombol rekam.</li>
                  <li>Model suara dan klip pengumumannya dibuat <strong>di HP kamu</strong>. Rekamannya <strong>tidak diunggah</strong> ke server kami maupun ke pihak lain, dan tidak disimpan setelah model suaranya selesai dibuat.</li>
                  <li>Model suara dan klip itu tetap ada di HP kamu dan bisa kamu hapus dari aplikasi kapan saja. Keduanya juga ikut terhapus saat kamu keluar (logout).</li>
                  <li>Model pengolah suara yang dipakai fitur ini diunduh sekali dari <strong>Hugging Face</strong> (pihak ketiga) saat kamu memulai fitur ini. Hugging Face bisa melihat alamat IP perangkatmu selama unduhan itu. Yang diunduh hanya file model; tidak ada rekaman suaramu yang dikirim ke sana.</li>
                </ul>

                <H2>8. Kami Pakai Data Buat Apa</H2>
                <ul>
                  <li>Menyebutkan dan mencatat uang yang masuk.</li>
                  <li>Memahami ucapanmu buat mengisi nominal dan formulir transaksi, hanya saat kamu memakai fitur suara.</li>
                  <li>Menampilkan riwayat transaksi serta ringkasan harian dan bulanan.</li>
                  <li>Mengatur kode QRIS, produk, stok, tim, dan absen.</li>
                  <li>Mengirim pemberitahuan soal aktivitas akun kamu.</li>
                  <li>Menjaga keamanan, mencegah penyalahgunaan, dan memperbaiki aplikasi.</li>
                </ul>

                <H2>9. Berbagi Data</H2>
                <p>Kami <strong>tidak menjual</strong> data pribadi kamu. Data cuma dibagikan dalam hal berikut:</p>
                <ul>
                  <li><strong>Ke tim kamu:</strong> karyawan dalam satu usaha berbagi data transaksi, produk, dan pengaturan sesuai perannya.</li>
                  <li><strong>Ke penyedia layanan:</strong> layanan pendukung seperti Firebase (notifikasi), layanan analitik, layanan pengenalan suara, dan layanan AI Google (Gemini) (dua yang terakhir hanya saat kamu memakai tombol mikrofon atau "Isi dengan suara"), dengan perjanjian pengolahan data.</li>
                  <li><strong>Ke Hugging Face (hanya unduh model):</strong> kalau kamu memakai fitur paket suara dari suara sendiri, model pengolah suaranya diunduh dari Hugging Face. Mereka tidak menerima rekaman atau data akunmu dari kami, tapi bisa melihat alamat IP perangkatmu saat unduhan berlangsung.</li>
                  <li><strong>Kalau diminta hukum:</strong> bila diwajibkan oleh aturan yang berlaku.</li>
                </ul>

                <H2>10. Analitik</H2>
                <p>
                  BeJo bisa memakai alat analitik (Amplitude) buat memahami cara aplikasi
                  dipakai. Kami sengaja <strong>tidak pernah</strong> mengirim token masuk
                  atau gambar (foto usaha atau profil) ke sistem analitik. Yang dikirim cuma
                  penanda ringkas, misalnya "punya foto profil: ya atau tidak". Kalau fitur
                  rekam layar aktif, data penting seperti jumlah uang, nomor rekening, dan
                  lokasi <strong>ditutupi</strong> dulu sebelum direkam.
                </p>

                <H2>11. Berapa Lama Data Disimpan</H2>
                <p>
                  Kami menyimpan data akun dan transaksi selama akun kamu aktif. Saat kamu{" "}
                  <strong>keluar (logout)</strong>, data pribadimu di HP dihapus, termasuk sesi,
                  gambar QRIS, foto profil, paket suara, model suara kamu, dan cache. Yang
                  tetap ada hanya file model pengolah suara yang sudah diunduh (bukan data
                  pribadi); file itu bisa kamu hapus lewat <em>Hapus suara saya</em> di
                  aplikasi. Data di
                  server disimpan sampai kamu minta akunnya dihapus. Kami tidak menyimpan
                  rekaman suara buat mengisi nominal maupun buat mencatat penjualan, dan tidak
                  menyimpan teks hasil pengenalannya; yang tersimpan hanya transaksi yang kamu
                  konfirmasi sendiri. Rekaman buat paket suara dari suaramu sendiri tidak
                  pernah dikirim ke kami dan tidak disimpan setelah model suaranya selesai
                  dibuat.
                </p>

                <H2>12. Hak Kamu</H2>
                <ul>
                  <li>Melihat dan mengubah data akun lewat aplikasi.</li>
                  <li>Menarik izin (misalnya akses notifikasi, lokasi, atau mikrofon) kapan saja.</li>
                  <li>Minta data dan akun kamu dihapus (lihat bagian di bawah).</li>
                </ul>

                <H2>13. Hapus Data</H2>
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

                <H2>14. Keamanan</H2>
                <p>
                  Kami berusaha menjaga data kamu dengan cara yang wajar, seperti mengacak
                  kata sandi, memakai token buat masuk, dan pilihan kunci sidik jari atau
                  wajah buat membuka aplikasi. Tapi, tidak ada cara pengiriman atau
                  penyimpanan yang benar-benar 100% aman.
                </p>

                <H2>15. Hubungi Kami</H2>
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
                  <li><strong>Voice (when used):</strong> a short voice recording when you tap the microphone button in the amount field or the "Isi dengan suara" (fill in by voice) button in the manual transaction form. We do not keep this recording (see sections 5 and 6). For "Isi dengan suara", your shop's product list (names and prices) is sent along with the recording. A recording for a sound pack in your own voice is processed on your phone and is not sent to our server (see section 7).</li>
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

                <H2>6. Record a Sale by Voice (Optional)</H2>
                <p>
                  The <strong>manual transaction</strong> form has an{" "}
                  <strong>Isi dengan suara</strong> (fill in by voice) button. You say one
                  sale out loud (up to 30 seconds), for example "dua bungkus nasi goreng, dua
                  puluh ribu, bayar tunai", and BeJo fills in the form. This feature{" "}
                  <strong>only runs when you tap that button</strong>. If you use it:
                </p>
                <ul>
                  <li>BeJo asks for microphone permission the first time you tap the button. If you decline, you can still fill in the form by typing. BeJo does <strong>not</strong> record at any other time, including in the background.</li>
                  <li>The recording is sent to our server together with <strong>your shop's product list (names and prices)</strong>, so the products you mention can be recognized.</li>
                  <li>Our server passes both on to <strong>Google's Gemini</strong> AI service (through Google Cloud Vertex AI), solely to understand the sale: the amount, payment method, customer or merchant note (if you say one), and the products.</li>
                  <li>We <strong>do not keep</strong> your voice recording or the text it was turned into, and we do not write them to our logs.</li>
                  <li>The result appears on a confirmation screen. <strong>Nothing is saved until you tap confirm.</strong> After you confirm, the transaction (and any new product you named) is saved like a normal entry.</li>
                  <li>The AI can mishear or misunderstand. Check the result before you confirm. You can always fill in the form by hand instead.</li>
                  <li>You can withdraw microphone permission at any time in your phone settings.</li>
                </ul>

                <H2>7. Your Own Voice for a Sound Pack (Optional)</H2>
                <p>
                  BeJo has an optional feature for making a <strong>sound pack in your own
                  voice</strong>, so incoming money can be announced in your voice. It may not
                  be available in your version of the app yet. If you use it:
                </p>
                <ul>
                  <li>You record your own voice for 5 to 15 seconds, after ticking a consent box. <strong>Only your own voice</strong> may be used; the consent box says so. Recording starts only after you tap the record button yourself.</li>
                  <li>The voice model and the announcement clips are made <strong>on your phone</strong>. The recording is <strong>not uploaded</strong> to our server or anyone else, and it is not kept once the voice model has been made.</li>
                  <li>The voice model and the clips stay on your phone and you can delete them from the app at any time. They are also deleted when you log out.</li>
                  <li>The voice-processing models this feature uses are downloaded once from <strong>Hugging Face</strong> (a third party) when you start the feature. Hugging Face can see your device's IP address during that download. Only the model files are downloaded; none of your voice recording is sent there.</li>
                </ul>

                <H2>8. How We Use Data</H2>
                <ul>
                  <li>Announcing and recording incoming money.</li>
                  <li>Understanding what you say, to fill in the amount and the transaction form, only when you use a voice feature.</li>
                  <li>Showing transaction history and daily and monthly summaries.</li>
                  <li>Managing QRIS codes, products, stock, teams, and attendance.</li>
                  <li>Sending notifications about activity on your account.</li>
                  <li>Keeping things secure, preventing abuse, and improving the app.</li>
                </ul>

                <H2>9. Sharing Data</H2>
                <p>We <strong>do not sell</strong> your personal data. Data is only shared in these cases:</p>
                <ul>
                  <li><strong>With your team:</strong> employees in the same business share transaction, product, and settings data according to their role.</li>
                  <li><strong>With service providers:</strong> supporting services such as Firebase (notifications), analytics services, a speech recognition service, and Google's Gemini AI service (the last two only when you use the microphone button or "Isi dengan suara"), under data processing agreements.</li>
                  <li><strong>With Hugging Face (model download only):</strong> if you use the sound pack in your own voice feature, its voice-processing models are downloaded from Hugging Face. They do not receive your recording or account data from us, but they can see your device's IP address while the download happens.</li>
                  <li><strong>When required by law:</strong> where applicable regulations require it.</li>
                </ul>

                <H2>10. Analytics</H2>
                <p>
                  BeJo may use an analytics tool (Amplitude) to understand how the app is
                  used. We deliberately <strong>never</strong> send sign-in tokens or images
                  (business or profile photos) to the analytics system. Only short flags are
                  sent, such as "has a profile photo: yes or no". If session recording is
                  on, sensitive data like amounts, account numbers, and location is{" "}
                  <strong>masked</strong> before recording.
                </p>

                <H2>11. How Long Data Is Kept</H2>
                <p>
                  We keep account and transaction data for as long as your account is
                  active. When you <strong>log out</strong>, your personal data on the phone is
                  deleted, including the session, QRIS image, profile photo, sound packs,
                  your voice model, and cache. Only the downloaded speech-model files stay
                  (they are not personal data); you can remove them with <em>Hapus suara
                  saya</em> in the app. Data on the server is kept until you ask for
                  your account to be deleted. We do not keep voice recordings used to fill in
                  an amount or to record a sale, or the text they were turned into; the only
                  thing kept is the transaction you confirm yourself. A recording made for a
                  sound pack in your own voice is never sent to us and is not kept once the
                  voice model has been made.
                </p>

                <H2>12. Your Rights</H2>
                <ul>
                  <li>View and change your account data in the app.</li>
                  <li>Withdraw permissions (such as notification, location, or microphone access) at any time.</li>
                  <li>Ask for your data and account to be deleted (see below).</li>
                </ul>

                <H2>13. Deleting Your Data</H2>
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

                <H2>14. Security</H2>
                <p>
                  We take reasonable steps to protect your data, such as hashing passwords,
                  using tokens for sign-in, and offering a fingerprint or face lock to open
                  the app. Still, no method of transmission or storage is 100% secure.
                </p>

                <H2>15. Contact Us</H2>
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
