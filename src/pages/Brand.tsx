import {
  Megaphone,
  MapPin,
  Volume2,
  BarChart3,
  ShieldCheck,
  Store,
  ArrowRight,
  Check,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/hooks/useReveal";

const brandLinks = [
  { href: "#kenapa", label: "Kenapa Iklan Suara" },
  { href: "#cara-brand", label: "Cara Kerja" },
  { href: "/", label: "Tentang BeJo" },
];

const reasons = [
  {
    icon: Store,
    title: "Sampai ke akar rumput",
    body: "Warung, kios, dan toko kecil dari kota besar sampai pelosok. Audiens yang selama ini sulit dijangkau iklan biasa.",
  },
  {
    icon: Volume2,
    title: "Benar-benar didengar",
    body: "Iklan diputar keras lewat HP yang sama yang membunyikan uang masuk. Bukan iklan yang di-scroll lewat, tapi yang beneran terdengar.",
  },
  {
    icon: MapPin,
    title: "Tepat sasaran",
    body: "Targetkan kampanye berdasarkan lokasi dan jenis audiens, jadi pesan brand kamu muncul di tempat yang paling pas.",
  },
  {
    icon: BarChart3,
    title: "Terukur",
    body: "Tiap pemutaran dilaporkan: terkirim, diputar, dan di mana. Kamu tahu persis kampanye kamu sampai ke mana.",
  },
];

const steps = [
  ["Tentukan target", "Pilih lokasi dan jenis audiens yang mau kamu jangkau."],
  ["Siapkan iklan suara", "Rekaman singkat, sekitar 20 detik, yang jelas dan mudah diingat."],
  ["BeJo putar ke pedagang", "Iklan dikirim ke HP pedagang yang setuju menerimanya, lalu diputar dengan suara."],
  ["Lihat laporannya", "Pantau berapa yang terkirim, diputar, dan di lokasi mana."],
];

export default function Brand() {
  useReveal();

  return (
    <>
      <Header
        links={brandLinks}
        variant="legal"
        ctaLabel="Mulai Kampanye"
        ctaHref="/contact.html"
      />

      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-36 md:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_80%_0%,rgba(224,163,46,0.16),transparent_60%),linear-gradient(170deg,#F5F8F4,#E7F1EA)]" />
        <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal max-w-2xl">
            <Badge>
              <Megaphone className="h-3.5 w-3.5" /> Untuk Brand & Pengiklan
            </Badge>
            <h1 className="mt-5 text-[clamp(2.3rem,4.6vw,3.6rem)] leading-[1.1]">
              Suara brand kamu, terdengar di{" "}
              <span className="text-gradient-amber">ribuan warung.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[clamp(1.05rem,1.7vw,1.25rem)] text-muted-foreground">
              BeJo memutar iklan suara singkat lewat HP para pedagang di seluruh
              Indonesia. Jangkau audiens akar rumput dengan pesan yang benar-benar
              didengar, tepat sesuai lokasi dan audiens yang kamu tuju.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button asChild size="lg" variant="amber">
                <a href="/contact.html">
                  Mulai Kampanye <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#cara-brand">Lihat Cara Kerja</a>
              </Button>
            </div>
          </div>

          {/* Visual: a voice-ad delivery card */}
          <div className="reveal d1 flex justify-center lg:justify-end">
            <Card className="w-full max-w-sm shadow-card">
              <CardContent className="p-7">
                <div className="rounded-2xl bg-gradient-to-br from-[#8a5f10] to-amber-dark p-5 text-white">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.08em] opacity-90">
                    <Megaphone className="h-4 w-4" /> Iklan Suara
                  </div>
                  <div className="mt-2 text-xl font-extrabold leading-snug">
                    "Kopi Nusantara, temani harimu. Beli 2 gratis 1 hari ini!"
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs opacity-90">
                    <Volume2 className="h-4 w-4" /> 18 detik · diputar keras
                    <span className="ml-1 inline-flex h-3 items-end gap-[2px]">
                      <i className="w-[3px] animate-eq rounded bg-white [height:6px] [animation-delay:0s]" />
                      <i className="w-[3px] animate-eq rounded bg-white [height:13px] [animation-delay:0.15s]" />
                      <i className="w-[3px] animate-eq rounded bg-white [height:8px] [animation-delay:0.3s]" />
                      <i className="w-[3px] animate-eq rounded bg-white [height:14px] [animation-delay:0.45s]" />
                    </span>
                  </div>
                </div>
                <div className="mt-4 space-y-2.5">
                  <DeliveryRow label="Terkirim ke perangkat" done />
                  <DeliveryRow label="Diputar dengan suara" done />
                  <DeliveryRow label="Lokasi: Bandung, Jawa Barat" done />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section id="kenapa" className="py-20 md:py-28">
        <div className="container">
          <div className="reveal mx-auto mb-14 max-w-2xl text-center">
            <Badge>Kenapa Iklan Suara BeJo</Badge>
            <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.9rem)]">
              Cara baru menyapa pedagang kecil
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Bukan banner yang terlewat, tapi suara yang hadir di tengah kesibukan
              berdagang.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((r, i) => (
              <Card
                key={r.title}
                className={`reveal ${i % 2 === 1 ? "d1" : ""} transition-all duration-300 hover:-translate-y-2 hover:shadow-card`}
              >
                <CardContent className="flex gap-5 p-8">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[#fbeecb] text-amber-dark">
                    <r.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl">{r.title}</h3>
                    <p className="text-muted-foreground">{r.body}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="cara-brand" className="bg-[#EAF1EA] py-20 md:py-28">
        <div className="container">
          <div className="reveal mx-auto mb-14 max-w-2xl text-center">
            <Badge>Cara Kerja Kampanye</Badge>
            <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.9rem)]">
              Dari ide sampai terdengar, empat langkah
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, body], i) => (
              <Card key={title} className={`reveal ${i ? `d${i > 3 ? 3 : i}` : ""}`}>
                <CardContent className="px-7 pb-7 pt-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber to-amber-dark text-xl font-extrabold text-[#3a2a05]">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 text-lg">{title}</h3>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PERMISSION / TRUST */}
      <section className="py-20 md:py-24">
        <div className="container max-w-4xl">
          <Card className="reveal shadow-card">
            <CardContent className="flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:p-10">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-mint text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl">Berbasis izin, bukan spam</h3>
                <p className="mt-2 text-muted-foreground">
                  Iklan cuma diputar di HP pedagang yang sudah setuju menerimanya
                  lewat pengaturan di aplikasi. Jadi brand kamu hadir di lingkungan
                  yang tepat dan diterima dengan baik, bukan mengganggu.
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Pedagang memilih sendiri untuk menerima iklan suara.",
                    "Iklan singkat, tidak mengganggu jalannya jualan.",
                    "Setiap pemutaran tercatat dan bisa dipertanggungjawabkan.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-none text-primary" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* REACH STATS */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_85%_20%,rgba(224,163,46,0.25),transparent_60%)]" />
        <div className="container relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {[
            ["1000+", "Warung telah bergabung"],
            ["Nasional", "Jangkauan seluruh Indonesia"],
            ["≤ 20 dtk", "Durasi iklan suara"],
            ["Terukur", "Laporan tiap pemutaran"],
          ].map(([big, lbl], i) => (
            <div key={i} className={`reveal ${i ? `d${i}` : ""}`}>
              <div className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold tracking-tight">
                {big}
              </div>
              <div className="mt-1.5 text-[0.98rem] opacity-90">{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="reveal relative overflow-hidden rounded-[32px] bg-[linear-gradient(150deg,#3a2a05_0%,#8a5f10_50%,#C4881C_100%)] px-6 py-16 text-center text-white shadow-big md:px-10 md:py-20">
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)]">
              Siap menyapa ribuan pedagang?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
              Ceritakan brand dan targetmu, tim kami bantu susun kampanye iklan
              suara yang pas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Button asChild size="lg" variant="light">
                <a href="/contact.html">
                  Mulai Kampanye <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function DeliveryRow({ label, done }: { label: string; done?: boolean }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-background px-3.5 py-2.5 text-sm font-semibold">
      <div
        className={`flex h-6 w-6 flex-none items-center justify-center rounded-full ${
          done ? "bg-primary text-white" : "bg-muted text-muted-foreground"
        }`}
      >
        <Check className="h-3.5 w-3.5" />
      </div>
      {label}
    </div>
  );
}
