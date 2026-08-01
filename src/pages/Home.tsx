import {
  ArrowRight,
  Volume2,
  Gauge,
  Radio,
  MicVocal,
  MapPin,
  QrCode,
  Calculator,
  CalendarRange,
  Tags,
  LayoutGrid,
  Fingerprint,
  Smartphone,
  Feather,
  Megaphone,
  Check,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroDemo } from "@/components/HeroDemo";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { AppQrisScreen } from "@/components/phone/AppQrisScreen";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { useParallax } from "@/hooks/useParallax";
import { playUrl } from "@/lib/constants";

const apps = [
  "GoPay", "Dana", "OVO", "ShopeePay", "BCA mobile", "BRImo",
  "Livin' Mandiri", "SeaBank", "Jenius", "LinkAja", "Blu", "Neo",
];

const voiceDetails = [
  {
    icon: Volume2,
    title: "Suaranya dibikin kencang",
    body: "Rekamannya sudah disetel biar tetap kedengeran di warung yang ramai. Ada juga pilihan supaya volume otomatis penuh tiap kali uang masuk.",
  },
  {
    icon: MicVocal,
    title: "Lebih dari 10 pilihan suara",
    body: "Pilih suara yang paling enak didengar, atau rekam suaramu sendiri dan simpan jadi paket suara.",
  },
  {
    icon: Gauge,
    title: "Atur cepat lambatnya",
    body: "Mau pelan biar jelas atau cepat biar ringkas, suaranya tetap terdengar wajar.",
  },
  {
    icon: Radio,
    title: "Ikut dengar aplikasi lain",
    body: "BeJo bisa baca notifikasi dari 40+ aplikasi bank dan dompet digital. Promo dan iklan disaring, jadi cuma uang masuk yang bunyi.",
  },
];

const qrisPoints = [
  ["Jumlahnya sudah terisi", "Ketik nominal pesanan, QRIS-nya langsung dibuat dengan jumlah itu. Pembeli tidak bisa salah ketik."],
  ["Kirim ke chat mana saja", "WhatsApp, Telegram, atau aplikasi chat lain, lewat tombol bagikan yang biasa kamu pakai."],
  ["Sekalian nomor rekening", "Kalau pembeli mau transfer bank, data rekening usahamu ikut terkirim."],
];

const teamPoints = [
  ["QRIS sendiri per karyawan", "Tiap karyawan bisa dikasih QRIS masing-masing, jadi kamu tahu setoran datang dari lapak siapa."],
  ["Absen pakai lokasi", "Karyawan absen masuk dan pulang, lengkap dengan titik lokasinya."],
  ["Rekap kehadiran", "Lihat siapa yang masuk, siapa yang belum, dirapikan per tanggal."],
];

const recordPoints = [
  ["Total yang gampang dibaca", "Hari ini, kemarin, dan bulan ini langsung kelihatan."],
  ["Catat penjualan tunai", "Ada tombol angka seperti kalkulator, jadi cepat waktu tangan sibuk."],
  ["Tahu asal tiap catatan", "Dari QRIS, dicatat sendiri, atau kebaca dari aplikasi lain."],
];

const attendance = [
  { name: "Sari", initial: "S", note: "Masuk 08.02", present: true },
  { name: "Budi", initial: "B", note: "Masuk 08.15", present: true },
  { name: "Rina", initial: "R", note: "Belum absen", present: false },
];

const stats = [
  ["1000+", "Warung telah bergabung"],
  ["10+", "Suara unik"],
  ["Rp 0", "Biaya pakai"],
  ["40+", "Aplikasi yang didukung"],
];

const extras = [
  { icon: QrCode, title: "Foto usaha di tengah QRIS", body: "QRIS-mu bisa dikasih foto usaha, dan tetap aman discan." },
  { icon: Tags, title: "Produk dan stok", body: "Catat barang, kategori, tambah stok, dan stok opname." },
  { icon: LayoutGrid, title: "Widget di layar HP", body: "Lihat setoran hari ini tanpa buka aplikasi." },
  { icon: Fingerprint, title: "Kunci sidik jari", body: "Cuma kamu yang bisa buka catatan usahamu." },
  { icon: Calculator, title: "Tombol angka cepat", body: "Masukkan nominal seperti pakai kalkulator." },
  { icon: Feather, title: "Ringan, jalan di HP lama", body: "Aplikasinya ringan, tidak harus pakai HP baru." },
];

const steps: { title: string; body: string; cta?: string }[] = [
  {
    title: "Install BeJo",
    body: "Unduh gratis dari Google Play. Aplikasinya ringan, HP lama pun tetap bisa.",
    cta: "Buka Google Play",
  },
  {
    title: "Pasang QRIS & kasih izin",
    body: "Bikin akun usahamu, tampilkan atau unggah kode QRIS, lalu kasih izin notifikasi. Ada tuntunan bergambar di dalam aplikasi, ikuti saja sampai selesai.",
  },
  {
    title: "Layani pembeli, dengarkan",
    body: "Tiap uang masuk langsung dibunyikan. Sat Set! Suaranya pun bisa kamu ganti sesuka hati.",
  },
];

export default function Home() {
  useParallax();

  return (
    <>
      <Header />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line pb-14 pt-24 md:pb-16 md:pt-28">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Colour field placed in the same grid cell as the device, so its
              edge lines up with the column instead of the viewport. Negative
              margins cancel the section padding to run its full height. */}
          <div
            aria-hidden="true"
            className="hidden self-stretch border-l border-line bg-paper-warm lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:-mb-16 lg:-mt-28 lg:block"
          />

          <div className="relative lg:col-start-1 lg:col-span-7 lg:row-start-1">
            <Eyebrow>Untuk pemilik warung, kios, dan toko</Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,8.5vw,4.6rem)] uppercase">
              Uang Masuk, Warungmu Jadi <span className="struck">Viral!</span>
            </h1>
            <p className="mt-6 max-w-xl text-[17px] text-ink-soft md:text-lg">
              Setiap pembayaran QRIS yang masuk, langsung dibunyikan bunyinya, berikut dengan suara Jingle. Tangan tetap sibuk melayani
              pembeli, ga' bakal kena penipuan lagi!
            </p>
            <p className="mt-4 max-w-xl text-[17px] text-ink-soft md:text-lg">
              Suaranya bisa kamu ganti sesuka hati: pilih dari 10+ suara, rekam
              suaramu sendiri, atau bikin jingle khas warungmu. Bunyi yang beda
              bikin pembeli hafal, ikut merekam, dan Warungmu jadi terkenal dan makin laris!
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={playUrl("hero")} target="_blank" rel="noopener noreferrer">
                  Pasang Gratis <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#cara">Lihat cara pakainya</a>
              </Button>
            </div>

            <dl className="mt-8 grid max-w-lg grid-cols-3 border-t border-line pt-4">
              {[
                ["1000+", "warung pakai"],
                ["Rp 0", "biaya"],
                ["40+", "aplikasi"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="tnum font-display text-2xl md:text-3xl">{v}</dt>
                  <dd className="eyebrow mt-1 text-ink-faint">{k}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-start-8 lg:col-span-5 lg:row-start-1">
            <HeroDemo />
          </div>
        </div>
      </section>

      {/* ── APP TICKER ───────────────────────────────────────── */}
      <section className="border-b border-line bg-ink py-5 text-white">
        <div className="container mb-4">
          <p className="eyebrow text-white/50">
            Ikut mendengar notifikasi dari aplikasi ini
          </p>
        </div>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center">
            {[...apps, ...apps].map((name, i) => (
              <span key={i} className="flex items-center">
                <span className="whitespace-nowrap px-5 font-mono text-sm text-white/85">
                  {name}
                </span>
                <span className="h-1 w-1 bg-gold" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── UANG MASUK QRIS ──────────────────────────────────── */}
      <section id="uang-masuk" className="border-b border-line py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <Eyebrow>Uang masuk QRIS</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
              Ga' perlu bolak-balik lihat HP
            </h2>
            <p className="mt-5 text-[17px] text-ink-soft">
              Begitu pembayaran masuk, BeJo membunyikan lonceng lalu menyebut
              jumlahnya. Kamu tahu uangnya sudah sampai tanpa berhenti melayani.
            </p>
          </div>

          {/* The cost most QRIS merchants are already paying, removed. */}
          <div className="mt-10 flex flex-col gap-5 border-l-4 border-gold bg-white p-6 sm:flex-row sm:items-center sm:gap-7 sm:p-7">
            <Smartphone className="h-11 w-11 flex-none text-gold-dark" aria-hidden="true" />
            <div>
              <h3 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] uppercase">
                HP kamu sudah jadi soundbox
              </h3>
              <p className="mt-2 max-w-2xl text-ink-soft">
                Tidak perlu sewa soundbox atau bayar langganan tiap bulan. Suara
                uang masuk keluar dari HP yang sudah ada di tanganmu, dan tidak
                ada biaya bulanan sama sekali.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <ul className="divide-y divide-line border-y border-line">
                {voiceDetails.map((d) => (
                  <li key={d.title} className="flex gap-5 py-6">
                    <span className="flex h-10 w-10 flex-none items-center justify-center border border-line-strong text-green">
                      <d.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[17px] font-bold">{d.title}</h3>
                      <p className="mt-1.5 text-ink-soft">{d.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 lg:pl-4">
              <VoiceSettings />
            </div>
          </div>
        </div>
      </section>

      {/* ── KIRIM QRIS ───────────────────────────────────────── */}
      <section id="kirim-qris" className="border-b border-line bg-paper-warm py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="order-last lg:order-first lg:col-span-5">
            <PhoneFrame className="mx-auto w-[252px]" time="14.06">
              <AppQrisScreen />
            </PhoneFrame>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>Kirim QRIS</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
              Tagih pesanan lewat WhatsApp
            </h2>
            <p className="mt-5 max-w-xl text-[17px] text-ink-soft">
              Pembeli pesan dari rumah? Ketik jumlahnya, lalu kirim QRIS-nya
              langsung lewat WhatsApp atau aplikasi chat lain. Pembeli tinggal
              scan dan bayar, tidak perlu datang dulu ke warung.
            </p>
            <dl className="mt-9 space-y-6">
              {qrisPoints.map(([t, b]) => (
                <div key={t} className="border-l-2 border-green pl-5">
                  <dt className="text-[17px] font-bold">{t}</dt>
                  <dd className="mt-1 text-ink-soft">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── KELOLA TIM & ABSENSI ─────────────────────────────── */}
      <section id="tim" className="border-b border-line bg-paper-warm py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Attendance board */}
          <div className="order-last lg:order-first lg:col-span-5" data-parallax="0.05">
            <div className="border border-line-strong bg-white">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="eyebrow text-ink-faint">Absensi hari ini</span>
                <span className="eyebrow text-green">2 dari 3 masuk</span>
              </div>
              <ul className="divide-y divide-line">
                {attendance.map((m) => (
                  <li key={m.name} className="flex items-center gap-3 px-5 py-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center bg-mint font-display text-lg text-green-deep">
                      {m.initial}
                    </span>
                    <span className="flex-1 font-bold">{m.name}</span>
                    <span
                      className={[
                        "font-mono text-[11px] uppercase tracking-wider",
                        m.present ? "text-green" : "text-gold-dark",
                      ].join(" ")}
                    >
                      {m.note}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="flex items-center gap-2 border-t border-line bg-paper px-5 py-3.5 text-xs text-ink-soft">
                <MapPin className="h-4 w-4 flex-none text-green" aria-hidden="true" />
                Toko Utama, Jl. Merdeka No. 12
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div>
              <Eyebrow>Kelola tim &amp; absensi</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
                Satu usaha, semua karyawan ikut rapi
              </h2>
              <p className="mt-5 max-w-xl text-[17px] text-ink-soft">
                Ajak karyawan pakai data usaha yang sama, dan pantau siapa yang
                sedang jaga. Kamu yang punya usaha tetap pegang kendali.
              </p>
            </div>
            <dl className="mt-9 space-y-6">
              {teamPoints.map(([t, b]) => (
                <div key={t} className="border-l-2 border-green pl-5">
                  <dt className="text-[17px] font-bold">{t}</dt>
                  <dd className="mt-1 text-ink-soft">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CATATAN TRANSAKSI ────────────────────────────────── */}
      <section id="catatan" className="border-b border-line py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div>
              <Eyebrow>Catatan transaksi</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
                Catatan penjualan yang bisa dipegang
              </h2>
              <p className="mt-5 max-w-xl text-[17px] text-ink-soft">
                Semua yang masuk tercatat sendiri. Mau lihat penjualan minggu lalu
                atau bulan ini, tinggal pilih tanggalnya.
              </p>
            </div>
            <dl className="mt-9 space-y-6">
              {recordPoints.map(([t, b]) => (
                <div key={t} className="border-l-2 border-gold pl-5">
                  <dt className="text-[17px] font-bold">{t}</dt>
                  <dd className="mt-1 text-ink-soft">{b}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Ledger card */}
          <div className="lg:col-span-5" data-parallax="0.05">
            <div className="border border-line-strong bg-white">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="eyebrow text-ink-faint">Ringkasan</span>
                <span className="eyebrow flex items-center gap-1.5 text-ink-faint">
                  <CalendarRange className="h-3.5 w-3.5" aria-hidden="true" />
                  Juli
                </span>
              </div>
              <dl className="grid grid-cols-3 divide-x divide-line border-b border-line">
                {[
                  ["Hari ini", "2,48jt"],
                  ["Kemarin", "2,21jt"],
                  ["Bulan ini", "58,9jt"],
                ].map(([k, v], i) => (
                  <div key={k} className="px-4 py-4">
                    <dt className="eyebrow text-ink-faint">{k}</dt>
                    <dd
                      className={[
                        "tnum mt-1.5 font-display text-xl",
                        i === 2 ? "text-gold-dark" : "text-green",
                      ].join(" ")}
                    >
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="px-5 py-6">
                <p className="eyebrow text-ink-faint">7 hari terakhir</p>
                <div className="mt-4 flex h-28 items-end gap-2">
                  {[42, 65, 50, 78, 60, 88, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className={i === 6 ? "flex-1 bg-green" : "flex-1 bg-mint"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUMBERS BOARD ────────────────────────────────────── */}
      <section className="bg-green-deep py-16 text-white md:py-20">
        <div className="container">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/15">
            {stats.map(([v, k], i) => (
              <div key={k} className={i > 0 ? "md:pl-8" : ""}>
                <dt className="tnum font-display text-[clamp(2.4rem,5vw,3.6rem)]">{v}</dt>
                <dd className="mt-2 text-sm text-white/70">{k}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── EXTRAS ───────────────────────────────────────────── */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Yang lain</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,2.8rem)] uppercase">
                Hal kecil yang bikin dagang lebih enteng
              </h2>
            </div>
          </div>

          <ul className="mt-12 grid gap-x-12 gap-y-1 sm:grid-cols-2">
            {extras.map((e) => (
              <li key={e.title} className="flex gap-4 border-b border-line py-5">
                <e.icon className="mt-0.5 h-5 w-5 flex-none text-green" aria-hidden="true" />
                <div>
                  <h3 className="font-bold">{e.title}</h3>
                  <p className="mt-1 text-[15px] text-ink-soft">{e.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CARA PAKAI (a real sequence, so it is numbered) ──── */}
      <section id="cara" className="border-b border-line bg-paper-warm py-20 md:py-28">
        <div className="container">
          <div className="max-w-xl">
            <Eyebrow>Cara pakai</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
              Pasang sekali, tinggal pakai
            </h2>
          </div>
          <ol className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-paper-warm p-7 md:p-8">
                <span className="font-mono text-sm text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.body}</p>
                {s.cta && (
                  <a
                    href={playUrl("cara-pakai")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-bold text-green underline underline-offset-4 transition-colors hover:text-green-dark"
                  >
                    {s.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── BRAND ────────────────────────────────────────────── */}
      <section className="border-b border-line bg-gold py-16 md:py-20">
        <div className="container grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow tone="gold" className="!text-ink/60">
              <Megaphone className="h-3.5 w-3.5" aria-hidden="true" /> Untuk brand
            </Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,2.9rem)] uppercase text-ink">
              Punya brand? Sapa ribuan warung lewat iklan suara
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] text-ink/80">
              BeJo bisa memutar iklan suara singkat di HP pedagang yang bersedia
              menerimanya, dipilih sesuai lokasi dan jenis usahanya.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button asChild size="lg" variant="outline" className="!border-ink hover:!bg-ink">
              <a href="/brand.html">
                Lihat untuk brand <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] uppercase">
              Jangan ada uang masuk yang kelewat
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              Pasang BeJo hari ini. Gratis, dan langsung bisa dipakai di HP yang
              sekarang ada di tanganmu.
            </p>
            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {["Tanpa sewa soundbox", "Jalan di HP lama", "Dipakai 1000+ warung"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="h-4 w-4 flex-none text-gold" aria-hidden="true" />
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button asChild size="lg" variant="gold">
              <a href={playUrl("penutup")} target="_blank" rel="noopener noreferrer">
                Pasang di Google Play <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/** The sound settings a merchant actually controls, drawn as the app panel. */
function VoiceSettings() {
  return (
    <div className="border border-line-strong bg-white">
      <p className="border-b border-line px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">
        Kelola Suara Uang Masuk
      </p>

      <div className="divide-y divide-line">
        <div className="px-4 py-3.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-green">
            Suara terpilih
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Iwan", "Anita", "Dhea", "Hendro"].map((v, i) => (
              <span
                key={v}
                className={`rounded-control border px-2.5 py-1 text-[12px] font-semibold ${
                  i === 0
                    ? "border-green bg-mint text-green-deep"
                    : "border-line text-ink-soft"
                }`}
              >
                {v}
              </span>
            ))}
            <span className="rounded-control border border-dashed border-line-strong px-2.5 py-1 text-[12px] text-ink-faint">
              + suaramu
            </span>
          </div>
        </div>

        <div className="px-4 py-3.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-green">
            Kecepatan
          </p>
          <div className="mt-2 grid grid-cols-3 divide-x divide-line overflow-hidden rounded-control border border-line">
            {["Pelan", "Normal", "Cepat"].map((s, i) => (
              <span
                key={s}
                className={`py-1.5 text-center text-[12px] font-semibold ${
                  i === 1 ? "bg-green text-white" : "text-ink-soft"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {[
          "Volume penuh saat bunyi",
          "Ikut dengar aplikasi lain",
          "Saring iklan dan promo",
        ].map((label) => (
          <div key={label} className="flex items-center gap-3 px-4 py-3">
            <span className="flex-1 text-[13.5px]">{label}</span>
            <span
              className="flex h-5 w-9 flex-none items-center justify-end rounded-full bg-green px-0.5"
              aria-hidden="true"
            >
              <span className="h-4 w-4 rounded-full bg-white" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
