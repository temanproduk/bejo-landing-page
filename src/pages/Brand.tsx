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

const brandLinks = [
  { href: "#kenapa", label: "Kenapa Iklan Suara" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "/", label: "Tentang BeJo" },
];

const reasons = [
  {
    icon: Store,
    title: "Sampai ke pedagang kecil",
    body: "Warung, kios, dan toko kelontong dari kota besar sampai daerah. Audiens yang biasanya sulit dijangkau iklan digital.",
  },
  {
    icon: Volume2,
    title: "Terdengar, bukan terlewat",
    body: "Iklan diputar bersuara lewat HP yang sama yang membunyikan uang masuk, dan tetap jalan walau aplikasinya sedang tertutup.",
  },
  {
    icon: MapPin,
    title: "Bisa dipilih sasarannya",
    body: "Atur kampanye berdasarkan lokasi dan jenis usaha, jadi pesanmu sampai ke pedagang yang paling relevan.",
  },
  {
    icon: BarChart3,
    title: "Ada laporannya",
    body: "Tiap pemutaran tercatat: terkirim, diputar, dan di daerah mana. Kamu tahu kampanyemu sampai ke mana.",
  },
];

const steps = [
  ["Tentukan sasaran", "Pilih daerah dan jenis pedagang yang mau kamu sapa."],
  ["Siapkan rekaman", "Iklan suara singkat, maksimal 20 detik, yang jelas dan mudah diingat."],
  ["Kami putar", "Iklan dikirim ke HP pedagang yang sudah bersedia menerimanya."],
  ["Terima laporan", "Lihat jumlah yang terkirim, diputar, dan sebarannya."],
];

const timeline = [
  ["Terkirim ke HP pedagang", true],
  ["Diputar bersuara", true],
  ["Tercatat: Bandung, Jawa Barat", true],
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
            Mulai Kampanye
          </Button>
        }
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-line pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Eyebrow tone="gold">
              <Megaphone className="h-3.5 w-3.5" aria-hidden="true" /> Untuk brand &amp; pengiklan
            </Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,8vw,4.2rem)] uppercase">
              Suara brandmu, terdengar di <span className="struck">warung</span>
            </h1>
            <p className="mt-6 max-w-xl text-[17px] text-ink-soft md:text-lg">
              BeJo memutar iklan suara singkat di HP para pedagang di seluruh
              Indonesia. Bukan banner yang dilewati, tapi pesan yang benar-benar
              terdengar di tengah kesibukan berjualan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" variant="gold" onClick={openWaitlist}>
                Mulai Kampanye <ArrowRight />
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#cara-kerja">Lihat cara kerjanya</a>
              </Button>
            </div>
          </div>

          {/* Delivery record */}
          <div className="lg:col-span-5">
            <div className="border border-line-strong bg-white">
              <div className="flex items-center justify-between border-b border-line bg-ink px-4 py-2.5 text-white">
                <span className="eyebrow flex items-center gap-2">
                  <Megaphone className="h-3.5 w-3.5" aria-hidden="true" /> Iklan suara
                </span>
                <span className="eyebrow flex items-center gap-1.5 text-white/60">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" /> 18 detik
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
            <Eyebrow tone="gold">Kenapa iklan suara</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
              Cara baru menyapa pedagang kecil
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
            <Eyebrow tone="gold">Cara kerja kampanye</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] uppercase">
              Dari rekaman sampai terdengar
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
              Pedagang yang memilih, bukan dikirimi paksa
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-[17px] text-ink-soft">
              Iklan hanya diputar di HP pedagang yang lebih dulu menyalakannya
              sendiri dari pengaturan aplikasi. Brandmu hadir di tempat yang mau
              menerimanya, jadi kesannya baik dan tidak mengganggu.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Pedagang menyalakan sendiri pilihan terima iklan suara.",
                "Durasinya singkat, tidak menghambat pedagang melayani pembeli.",
                "Setiap pemutaran tercatat dan bisa dipertanggungjawabkan.",
              ].map((t) => (
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
              ["1000+", "Warung telah bergabung"],
              ["Nasional", "Sebaran seluruh Indonesia"],
              ["20 detik", "Durasi maksimal iklan"],
              ["Terlapor", "Tiap pemutaran tercatat"],
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
              Siap menyapa ribuan pedagang?
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              Ceritakan brand dan sasaranmu, tim kami bantu susun kampanye iklan
              suara yang pas.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button size="lg" variant="gold" onClick={openWaitlist}>
              Mulai Kampanye <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </>
  );
}
