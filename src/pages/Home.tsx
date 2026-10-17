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
import { localize, t } from "@/lib/i18n";

const apps = [
  "GoPay", "Dana", "OVO", "ShopeePay", "BCA mobile", "BRImo",
  "Livin' Mandiri", "SeaBank", "Jenius", "LinkAja", "Blu", "Neo",
];

const voiceDetails = [
  {
    icon: Volume2,
    title: t("Suaranya dibikin kencang", "Loud by design"),
    body: t(
      "Rekamannya sudah disetel biar tetap kedengeran di warung yang ramai. Ada juga pilihan supaya volume otomatis penuh tiap kali uang masuk.",
      "The recordings are tuned to cut through a busy shop. You can also have the volume jump to full every time money comes in."
    ),
  },
  {
    icon: MicVocal,
    title: t("Lebih dari 10 pilihan suara", "More than 10 voices"),
    body: t(
      "Pilih suara yang paling enak didengar, atau rekam suaramu sendiri dan simpan jadi paket suara.",
      "Pick the voice you like best, or record your own and save it as a sound pack."
    ),
  },
  {
    icon: Gauge,
    title: t("Atur cepat lambatnya", "Set the pace"),
    body: t(
      "Mau pelan biar jelas atau cepat biar ringkas, suaranya tetap terdengar wajar.",
      "Slow for clarity or fast to keep it short, the voice still sounds natural."
    ),
  },
  {
    icon: Radio,
    title: t("Ikut dengar aplikasi lain", "Listens to your other apps"),
    body: t(
      "BeJo bisa baca notifikasi dari 40+ aplikasi bank dan dompet digital. Promo dan iklan disaring, jadi cuma uang masuk yang bunyi.",
      "BeJo reads notifications from 40+ banking and e-wallet apps. Promos and ads are filtered out, so only incoming money makes a sound."
    ),
  },
];

const qrisPoints = [
  t(
    ["Jumlahnya sudah terisi", "Ketik nominal pesanan, QRIS-nya langsung dibuat dengan jumlah itu. Pembeli jadi tidak salah ketik."],
    ["Amount already filled in", "Type the order total and the QRIS is generated for exactly that amount. No more customers typing the wrong number."]
  ),
  t(
    ["Kirim ke chat mana saja", "WhatsApp, Telegram, atau aplikasi chat lain, lewat tombol bagikan yang biasa kamu pakai."],
    ["Send it to any chat", "WhatsApp, Telegram, or any other chat app, using the share button you already know."]
  ),
  t(
    ["Sekalian nomor rekening", "Kalau pembeli mau transfer bank, info data rekening bank kamu ikut dibagikan."],
    ["Bank details included", "If the customer prefers a bank transfer, your account details go along with it."]
  ),
];

const teamPoints = [
  t(
    ["QRIS sendiri per karyawan", "Tiap karyawan bisa dikasih QRIS masing-masing di HPnya, jadi kamu tahu setoran datang dari lapak siapa."],
    ["A QRIS for each employee", "Give every employee their own QRIS on their phone, so you know which stall each payment came from."]
  ),
  t(
    ["Absen pakai lokasi", "Karyawan absen masuk dan pulang, lengkap dengan titik lokasinya. Bisa juga Ping sesekali, biar kamu ingetin untuk fokus kerja."],
    ["Location-based check-in", "Employees clock in and out with their location attached. You can also Ping them now and then as a nudge to stay on task."]
  ),
  t(
    ["Rekap kehadiran", "Lihat siapa yang masuk, siapa yang bolos, dirapikan per tanggal."],
    ["Attendance summary", "See who showed up and who didn't, sorted by date."]
  ),
];

const recordPoints = [
  t(
    ["Total yang gampang dibaca", "Hari ini, kemarin, dan bulan ini langsung kelihatan."],
    ["Totals at a glance", "Today, yesterday, and this month, right there."]
  ),
  t(
    ["Catat penjualan tunai", "Ada tombol input angka seperti kalkulator, jadi cepat waktu tangan sibuk."],
    ["Log cash sales", "A calculator-style keypad makes it quick, even when your hands are full."]
  ),
  t(
    ["Tahu asal tiap catatan", "Dari QRIS, dicatat sendiri, atau otomatis terbaca dari aplikasi lain."],
    ["Know where each entry came from", "From QRIS, entered by hand, or picked up automatically from another app."]
  ),
];

const attendance = [
  { name: "Sari", initial: "S", note: t("Masuk 08.02", "In 08:02"), present: true },
  { name: "Budi", initial: "B", note: t("Masuk 08.15", "In 08:15"), present: true },
  { name: "Rina", initial: "R", note: t("Belum absen", "Not in yet"), present: false },
];

const stats = [
  ["1000+", t("Warung telah bergabung", "Warungs already on board")],
  ["10+", t("Suara unik", "Unique voices")],
  ["Rp 0", t("Biaya pakai", "Cost to use")],
  ["40+", t("Aplikasi yang didukung", "Supported apps")],
];

const extras = [
  { icon: QrCode, title: t("Foto usaha di tengah QRIS", "Your photo inside the QRIS"), body: t("QRIS-mu bisa dikasih foto usaha, dan tetap aman discan.", "Put your shop photo in your QRIS. It still scans just fine.") },
  { icon: Tags, title: t("Produk dan stok", "Products and stock"), body: t("Catat barang, kategori, tambah stok, dan stok opname.", "Track items, categories, restocks, and stock counts.") },
  { icon: LayoutGrid, title: t("Widget di layar HP", "Home-screen widget"), body: t("Lihat setoran hari ini tanpa buka aplikasi.", "See today's takings without opening the app.") },
  { icon: Fingerprint, title: t("Kunci sidik jari", "Fingerprint lock"), body: t("Cuma kamu yang bisa buka catatan usahamu.", "Only you can open your business records.") },
  { icon: Calculator, title: t("Tombol angka cepat", "Quick number pad"), body: t("Masukkan nominal seperti pakai kalkulator.", "Enter amounts like you would on a calculator.") },
  { icon: Feather, title: t("Ringan, jalan di HP lama", "Light, runs on old phones"), body: t("Aplikasinya ringan, tidak harus pakai HP baru.", "The app is lightweight, no new phone needed.") },
];

const steps: { title: string; body: string; cta?: string }[] = [
  {
    title: "Install BeJo",
    body: t(
      "Unduh Gratis dari Google Play. Aplikasinya ringan, HP lama pun tetap bisa pake.",
      "Download it free from Google Play. The app is light, so even an old phone will do."
    ),
    cta: t("Buka Google Play", "Open Google Play"),
  },
  {
    title: t("Pasang QRIS & kasih izin", "Add your QRIS & allow access"),
    body: t(
      "Bikin akun usahamu, Scan atau Unggah kode QRIS punya kamu, terus kasih izin Notifikasi. ",
      "Create your business account, scan or upload your QRIS code, then allow notification access."
    ),
  },
  {
    title: t("Layani pembeli, dengarkan", "Serve customers, just listen"),
    body: t(
      "Tiap Uang Masuk langsung dibunyikan. Suaranya pun bisa kamu ganti sesuka hati. Viraal deh Warungmu!",
      "Every incoming payment is announced right away, in any voice you like. Watch your warung go viral!"
    ),
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
            <Eyebrow>{t("Untuk Pemilik Warung, Kios, dan Toko", "For Warung, Kiosk, and Shop Owners")}</Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,8.5vw,4.6rem)] uppercase">
              {t(
                <>Uang Masuk, Warungmu Jadi <span className="struck">Viral!</span></>,
                <>Money In, Your Warung Goes <span className="struck">Viral!</span></>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] text-ink-soft md:text-lg">
              {t(
                "Setiap Pembayaran QRIS masuk, langsung ada Bunyinya, berikut Suara unik Jingle. Tangan tetap sibuk melayani pembeli, gak bakal kena penipuan lagi!",
                "Every QRIS payment is announced the moment it lands, with its own catchy jingle. Keep your hands busy serving customers, and never get fooled by a fake payment again!"
              )}
            </p>
            <p className="mt-4 max-w-xl text-[17px] text-ink-soft md:text-lg">
              {t(
                "Suaranya bisa diganti sesuka hati: Pilih dari 10+ suara, atau bikin Suara khas buat warungmu. Bunyi yang Unik bikin pembeli hafal, ikut merekam, dan Warungmu jadi terkenal dan makin laris!",
                "Change the voice whenever you like: pick from 10+ voices, or make a signature sound for your warung. A unique sound sticks in customers' heads, they record it and share it, and your warung gets famous and busier!"
              )}
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Button asChild size="lg">
                <a href={playUrl("hero")} target="_blank" rel="noopener noreferrer">
                  {t("Pasang Gratis", "Install Free")} <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#cara">{t("Lihat cara pakainya", "See how it works")}</a>
              </Button>
            </div>

            <dl className="mt-8 grid max-w-lg grid-cols-3 border-t border-line pt-4">
              {[
                ["1000+", t("warung pakai", "warungs")],
                ["Rp 0", t("biaya", "cost")],
                ["40+", t("aplikasi", "apps")],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="tnum font-display text-2xl md:text-3xl">{v}</dt>
                  <dd className="eyebrow mt-1 text-ink-faint">{k}</dd>
                </div>
              ))}
            </dl>

            {/* The BeJo cat, waving from the corner of the hero. Decorative. */}
            <img
              src="/assets/bejo-mascot.svg"
              alt=""
              aria-hidden="true"
              width={140}
              height={140}
              className="pointer-events-none absolute -bottom-2 right-0 hidden w-[150px] select-none lg:block xl:w-[175px]"
            />
          </div>

          <div className="relative lg:col-start-8 lg:col-span-5 lg:row-start-1">
            <HeroDemo />
          </div>
        </div>
      </section>

      {/* ── APP TICKER ───────────────────────────────────────── */}
      <section className="border-b border-line bg-night py-5 text-white">
        <div className="container mb-4">
          <p className="eyebrow text-white/50">
            {t("Ikut mendengar notifikasi dari aplikasi ini", "Also listens to notifications from these apps")}
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
            <Eyebrow>{t("Uang masuk QRIS", "QRIS payments")}</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
              {t("Ga' perlu bolak-balik lihat HP", "No more checking your phone")}
            </h2>
            <p className="mt-5 text-[17px] text-ink-soft">
              {t(
                "Begitu pembayaran masuk, BeJo membunyikan lonceng lalu menyebut jumlahnya. Kamu tahu uangnya sudah sampai tanpa berhenti melayani.",
                "The moment a payment lands, BeJo rings a chime and reads out the amount. You know the money is in without pausing to check."
              )}
            </p>
          </div>

          {/* The cost most QRIS merchants are already paying, removed. */}
          <div className="mt-10 flex flex-col gap-5 border-l-4 border-gold bg-white p-6 sm:flex-row sm:items-center sm:gap-7 sm:p-7">
            <Smartphone className="h-11 w-11 flex-none text-gold-dark" aria-hidden="true" />
            <div>
              <h3 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] uppercase">
                {t("HP kamu sudah jadi Soundbox!", "Your phone is now a soundbox!")}
              </h3>
              <p className="mt-2 max-w-2xl text-ink-soft">
                {t(
                  "Tidak perlu sewa soundbox atau bayar langganan tiap bulan. Suara uang masuk langsung bunyi dari HP yang sudah ada di tanganmu, dan tidak ada biaya bulanan sama sekali.",
                  "No soundbox to rent and no monthly subscription. Payments are announced straight from the phone already in your hand, with no monthly fee at all."
                )}
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
            <Eyebrow>{t("Kirim QRIS", "Send QRIS")}</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
              {t("Tagih pesanan lewat WhatsApp", "Bill orders over WhatsApp")}
            </h2>
            <p className="mt-5 max-w-xl text-[17px] text-ink-soft">
              {t(
                "Pembeli pesan dari rumah? Ketik jumlahnya, lalu kirim QRIS-nya langsung lewat WhatsApp atau aplikasi chat lain. Pembeli tinggal scan dan bayar, tidak perlu datang dulu ke warung.",
                "Customer ordering from home? Type the amount and send the QRIS straight over WhatsApp or any other chat app. They just scan and pay, no trip to the warung needed."
              )}
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
      <section id="tim" className="border-b border-line py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Attendance board */}
          <div className="order-last lg:col-span-5" data-parallax="0.05">
            <div className="border border-line-strong bg-white">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="eyebrow text-ink-faint">{t("Absensi hari ini", "Today's attendance")}</span>
                <span className="eyebrow text-green">{t("2 dari 3 masuk", "2 of 3 in")}</span>
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
                {t("Toko Utama", "Main Store")}, Jl. Merdeka No. 12
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div>
              <Eyebrow>{t("Kelola tim & absensi", "Team & attendance")}</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
                {t("Satu usaha, semua karyawan ikut rapi", "One business, the whole team in order")}
              </h2>
              <p className="mt-5 max-w-xl text-[17px] text-ink-soft">
                {t(
                  "Ajak karyawan pakai data usaha yang sama, dan pantau siapa yang sedang jaga. Kamu yang punya usaha tetap pegang kendali.",
                  "Bring your employees onto the same business data and see who's on shift. As the owner, you stay in control."
                )}
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
      <section id="catatan" className="border-b border-line bg-paper-warm py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div>
              <Eyebrow>{t("Catatan transaksi", "Sales records")}</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
                {t("Catatan penjualan yang bisa dipegang", "Sales records you can rely on")}
              </h2>
              <p className="mt-5 max-w-xl text-[17px] text-ink-soft">
                {t(
                  "Semua yang masuk tercatat sendiri. Mau lihat penjualan minggu lalu atau bulan ini, tinggal pilih tanggalnya.",
                  "Everything that comes in is recorded automatically. Want last week's or this month's sales? Just pick the dates."
                )}
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
          <div className="lg:order-first lg:col-span-5" data-parallax="0.05">
            <div className="border border-line-strong bg-white">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="eyebrow text-ink-faint">{t("Ringkasan", "Summary")}</span>
                <span className="eyebrow flex items-center gap-1.5 text-ink-faint">
                  <CalendarRange className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("Juli", "July")}
                </span>
              </div>
              <dl className="grid grid-cols-3 divide-x divide-line border-b border-line">
                {[
                  [t("Hari ini", "Today"), t("2,48jt", "2.48M")],
                  [t("Kemarin", "Yesterday"), t("2,21jt", "2.21M")],
                  [t("Bulan ini", "This month"), t("58,9jt", "58.9M")],
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
                <p className="eyebrow text-ink-faint">{t("7 hari terakhir", "Last 7 days")}</p>
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
              <Eyebrow>{t("Yang lain", "And more")}</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,2.8rem)] uppercase">
                {t("Hal kecil yang bikin dagang lebih enteng", "Small things that make selling easier")}
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
            <Eyebrow>{t("Cara pakai", "How it works")}</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
              {t("Pasang sekali, tinggal pakai", "Set it up once, then just use it")}
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
              <Megaphone className="h-3.5 w-3.5" aria-hidden="true" /> {t("Untuk brand", "For brands")}
            </Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,2.9rem)] uppercase text-ink">
              {t("Punya brand? Sapa ribuan warung lewat iklan suara", "Own a brand? Reach thousands of warungs with voice ads")}
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] text-ink/80">
              {t(
                "BeJo bisa memutar iklan suara singkat di HP pedagang yang bersedia menerimanya, dipilih sesuai lokasi dan jenis usahanya.",
                "BeJo can play short voice ads on the phones of merchants who opt in, targeted by location and type of business."
              )}
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button asChild size="lg" variant="outline" className="!border-ink hover:!bg-ink">
              <a href={localize("/brand.html")}>
                {t("Lihat untuk brand", "See BeJo for brands")} <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="bg-night py-20 text-white md:py-28">
        <div className="container grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] uppercase">
              {t("Jangan ada uang masuk yang kelewat", "Never miss a payment again")}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              {t(
                "Pasang BeJo hari ini. Gratis, dan langsung bisa dipakai di HP yang sekarang ada di tanganmu.",
                "Install BeJo today. It's free, and works right away on the phone already in your hand."
              )}
            </p>
            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {t(
                ["Tanpa sewa soundbox", "Jalan di HP lama", "Dipakai 1000+ warung"],
                ["No soundbox rental", "Runs on old phones", "Used by 1000+ warungs"]
              ).map(
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
            <img
              src="/assets/bejo-mascot.svg"
              alt=""
              aria-hidden="true"
              width={140}
              height={140}
              loading="lazy"
              className="pointer-events-none mb-6 hidden w-36 select-none sm:block lg:mx-auto"
            />
            <Button asChild size="lg" variant="gold">
              <a href={playUrl("penutup")} target="_blank" rel="noopener noreferrer">
                {t("Pasang di Google Play", "Get it on Google Play")} <ArrowRight />
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
        {t("Kelola Suara Uang Masuk", "Payment Sound Settings")}
      </p>

      <div className="divide-y divide-line">
        <div className="px-4 py-3.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-green">
            {t("Suara terpilih", "Selected voice")}
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
              {t("+ suaramu", "+ your voice")}
            </span>
          </div>
        </div>

        <div className="px-4 py-3.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-green">
            {t("Kecepatan", "Speed")}
          </p>
          <div className="mt-2 grid grid-cols-3 divide-x divide-line overflow-hidden rounded-control border border-line">
            {t(["Pelan", "Normal", "Cepat"], ["Slow", "Normal", "Fast"]).map((s, i) => (
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

        {t(
          ["Volume penuh saat bunyi", "Ikut dengar aplikasi lain", "Saring iklan dan promo"],
          ["Full volume on alerts", "Listen to other apps", "Filter out ads and promos"]
        ).map((label) => (
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
