import {
  ArrowRight,
  Megaphone,
  Volume2,
  MapPin,
  BarChart3,
  ShieldCheck,
  Store,
  Check,
  Clock,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { t } from "@/lib/i18n";

const brandLinks = [
  { href: "#kenapa", label: t("Kenapa Iklan Suara", "Why Voice Ads") },
  { href: "#cara-kerja", label: t("Cara Kerja", "How It Works") },
  { href: "/", label: t("Tentang BeJo", "About BeJo") },
];

const reasons = [
  {
    icon: Store,
    title: t("Sampai ke pedagang kecil", "Reach small merchants"),
    body: t(
      "Warung, kios, dan toko kelontong dari kota besar sampai daerah. Audiens yang biasanya sulit dijangkau iklan digital.",
      "Warungs, kiosks, and corner shops, from big cities to small towns. An audience digital ads usually struggle to reach."
    ),
  },
  {
    icon: Volume2,
    title: t("Terdengar, bukan terlewat", "Heard, not skipped"),
    body: t(
      "Iklan diputar bersuara lewat HP yang sama yang membunyikan uang masuk, dan tetap jalan walau aplikasinya sedang tertutup.",
      "Ads play out loud on the same phone that announces incoming payments, and still play even when the app is closed."
    ),
  },
  {
    icon: MapPin,
    title: t("Bisa dipilih sasarannya", "Targeted delivery"),
    body: t(
      "Atur kampanye berdasarkan lokasi dan jenis usaha, jadi pesanmu sampai ke pedagang yang paling relevan.",
      "Target campaigns by location and type of business, so your message reaches the most relevant merchants."
    ),
  },
  {
    icon: BarChart3,
    title: t("Ada laporannya", "Full reporting"),
    body: t(
      "Tiap pemutaran tercatat: terkirim, diputar, dan di daerah mana. Kamu tahu kampanyemu sampai ke mana.",
      "Every play is logged: delivered, played, and where. You know exactly how far your campaign reached."
    ),
  },
];

const steps = [
  t(
    ["Tentukan sasaran", "Pilih daerah dan jenis pedagang yang mau kamu sapa."],
    ["Pick your audience", "Choose the regions and types of merchants you want to reach."]
  ),
  t(
    ["Siapkan rekaman", "Iklan suara singkat, maksimal 20 detik, yang jelas dan mudah diingat."],
    ["Prepare the recording", "A short voice ad, 20 seconds at most, clear and easy to remember."]
  ),
  t(
    ["Kami putar", "Iklan dikirim ke HP pedagang yang sudah bersedia menerimanya."],
    ["We play it", "The ad goes out to the phones of merchants who opted in."]
  ),
  t(
    ["Terima laporan", "Lihat jumlah yang terkirim, diputar, dan sebarannya."],
    ["Get the report", "See how many were delivered, played, and where."]
  ),
];

const timeline = [
  [t("Terkirim ke HP pedagang", "Delivered to merchant's phone"), true],
  [t("Diputar bersuara", "Played out loud"), true],
  [t("Tercatat: Bandung, Jawa Barat", "Logged: Bandung, West Java"), true],
] as const;

export default function Brand() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const openWaitlist = () => setWaitlistOpen(true);

  return (
    <>
      <Header
        links={brandLinks}
        variant="inner"
        ctaSlot={
          <Button variant="gold" onClick={openWaitlist}>
            {t("Mulai Kampanye", "Start a Campaign")}
          </Button>
        }
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-line pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Eyebrow tone="gold">
              <Megaphone className="h-3.5 w-3.5" aria-hidden="true" />{" "}
              {t("Untuk brand & pengiklan", "For brands & advertisers")}
            </Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,8vw,4.2rem)] uppercase">
              {t(
                <>Suara brandmu, terdengar di <span className="struck">warung</span></>,
                <>Your brand's voice, heard in every <span className="struck">warung</span></>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] text-ink-soft md:text-lg">
              {t(
                "BeJo memutar iklan suara singkat di HP para pedagang di seluruh Indonesia. Bukan banner yang dilewati, tapi pesan yang benar-benar terdengar di tengah kesibukan berjualan.",
                "BeJo plays short voice ads on merchants' phones across Indonesia. Not a banner that gets scrolled past, but a message that's actually heard in the middle of a busy day of selling."
              )}
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Button size="lg" variant="gold" onClick={openWaitlist}>
                {t("Mulai Kampanye", "Start a Campaign")} <ArrowRight />
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#cara-kerja">{t("Lihat cara kerjanya", "See how it works")}</a>
              </Button>
            </div>
          </div>

          {/* Delivery record */}
          <div className="lg:col-span-5">
            <div className="border border-line-strong bg-white">
              <div className="flex items-center justify-between border-b border-line bg-ink px-4 py-2.5 text-white">
                <span className="eyebrow flex items-center gap-2">
                  <Megaphone className="h-3.5 w-3.5" aria-hidden="true" /> {t("Iklan suara", "Voice ad")}
                </span>
                <span className="eyebrow flex items-center gap-1.5 text-white/60">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {t("18 detik", "18 sec")}
                </span>
              </div>
              <div className="border-b border-line bg-gold px-5 py-6">
                <p className="font-display text-2xl uppercase leading-tight text-ink">
                  “Kopi Nusantara, temani harimu. Beli dua gratis satu hari ini.”
                </p>
              </div>
              <ul className="divide-y divide-line">
                {timeline.map(([label, done]) => (
                  <li key={label} className="flex items-center gap-3 px-5 py-3.5">
                    <span
                      className={[
                        "flex h-5 w-5 flex-none items-center justify-center",
                        done ? "bg-green text-white" : "bg-paper-warm text-ink-faint",
                      ].join(" ")}
                    >
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── REASONS ──────────────────────────────────────────── */}
      <section id="kenapa" className="border-b border-line py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl">
            <Eyebrow tone="gold">{t("Kenapa iklan suara", "Why voice ads")}</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
              {t("Cara baru menyapa pedagang kecil", "A new way to reach small merchants")}
            </h2>
          </div>
          <ul className="mt-12 grid gap-x-14 gap-y-1 md:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-5 border-b border-line py-7">
                <span className="flex h-11 w-11 flex-none items-center justify-center border border-line-strong text-gold-dark">
                  <r.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[17px] font-bold">{r.title}</h3>
                  <p className="mt-1.5 text-ink-soft">{r.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── HOW IT WORKS (ordered, so numbered) ──────────────── */}
      <section id="cara-kerja" className="border-b border-line bg-paper-warm py-20 md:py-28">
        <div className="container">
          <div className="max-w-xl">
            <Eyebrow tone="gold">{t("Cara kerja kampanye", "How a campaign works")}</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
              {t("Dari rekaman sampai terdengar", "From recording to being heard")}
            </h2>
          </div>
          <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, b], i) => (
              <li key={t} className="bg-paper-warm p-7">
                <span className="font-mono text-sm text-gold-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── PERMISSION ───────────────────────────────────────── */}
      <section className="border-b border-line py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="flex h-14 w-14 items-center justify-center bg-mint text-green">
              <ShieldCheck className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-display text-[clamp(1.9rem,4vw,2.7rem)] uppercase">
              {t("Pedagang yang memilih, bukan dikirimi paksa", "Merchants opt in, nothing is forced on them")}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-[17px] text-ink-soft">
              {t(
                "Iklan hanya diputar di HP pedagang yang lebih dulu menyalakannya sendiri dari pengaturan aplikasi. Brandmu hadir di tempat yang mau menerimanya, jadi kesannya baik dan tidak mengganggu.",
                "Ads only play on the phones of merchants who switched them on themselves in the app settings. Your brand shows up where it's welcome, so it leaves a good impression instead of an annoying one."
              )}
            </p>
            <ul className="mt-7 space-y-4">
              {t(
                [
                  "Pedagang menyalakan sendiri pilihan terima iklan suara.",
                  "Durasinya singkat, tidak menghambat pedagang melayani pembeli.",
                  "Setiap pemutaran tercatat dan bisa dipertanggungjawabkan.",
                ],
                [
                  "Merchants turn on voice ads themselves.",
                  "Ads are short, so they never get in the way of serving customers.",
                  "Every play is logged and accountable.",
                ]
              ).map((t) => (
                <li key={t} className="flex items-start gap-3 border-b border-line pb-4">
                  <Check className="mt-1 h-4 w-4 flex-none text-green" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── REACH ────────────────────────────────────────────── */}
      <section className="bg-green-deep py-16 text-white md:py-20">
        <div className="container">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/15">
            {[
              ["1000+", t("Warung telah bergabung", "Warungs already on board")],
              [t("Nasional", "Nationwide"), t("Sebaran seluruh Indonesia", "Spread across Indonesia")],
              [t("20 detik", "20 sec"), t("Durasi maksimal iklan", "Maximum ad length")],
              [t("Terlapor", "Reported"), t("Tiap pemutaran tercatat", "Every play is logged")],
            ].map(([v, k], i) => (
              <div key={k} className={i > 0 ? "md:pl-8" : ""}>
                <dt className="font-display text-[clamp(2rem,4.4vw,3.2rem)]">{v}</dt>
                <dd className="mt-2 text-sm text-white/70">{k}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="bg-ink py-20 text-white md:py-24">
        <div className="container grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(2.1rem,4.6vw,3.4rem)] uppercase">
              {t("Siap menyapa ribuan pedagang?", "Ready to reach thousands of merchants?")}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              {t(
                "Ceritakan brand dan sasaranmu, tim kami bantu susun kampanye iklan suara yang pas.",
                "Tell us about your brand and audience, and our team will help put together the right voice ad campaign."
              )}
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button size="lg" variant="gold" onClick={openWaitlist}>
              {t("Mulai Kampanye", "Start a Campaign")} <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </>
  );
}
