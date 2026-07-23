import {
  ArrowRight,
  Check,
  Megaphone,
  Radio,
  ListChecks,
  QrCode,
  Users,
  ClipboardList,
  LayoutGrid,
  Mic,
  Volume2,
  MapPin,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParallax } from "@/hooks/useParallax";
import { useReveal } from "@/hooks/useReveal";
import { PLAY_URL } from "@/lib/constants";

const supportedApps = [
  "GoPay", "Dana", "OVO", "ShopeePay", "BCA mobile",
  "BRImo", "Livin' Mandiri", "SeaBank", "Jenius", "LinkAja",
];

const features = [
  {
    icon: Megaphone,
    amber: true,
    wide: true,
    title: "Langsung disebut pakai suara",
    body: "Begitu ada uang masuk, BeJo bunyikan lonceng lalu sebut jumlahnya dalam Bahasa Indonesia. Kamu nggak perlu pegang HP. Bisa pilih dari 10+ suara, atur cepat lambatnya, bahkan simpan suara sendiri.",
  },
  {
    icon: Radio,
    title: "Dengar dari aplikasi lain juga",
    body: "BeJo bisa baca notifikasi dari bank dan dompet digital lain, lalu sebutkan. Iklan dan promo disaring, jadi cuma uang masuk yang bunyi.",
  },
  {
    icon: ListChecks,
    title: "Catatan penjualan rapi",
    body: "Semua transaksi tercatat. Ada ringkasan hari ini, kemarin, dan bulan ini, plus saringan per tanggal.",
  },
  {
    icon: QrCode,
    title: "Atur QRIS kamu",
    body: "Tampilkan, ganti, atau atur ulang QRIS. Bisa juga bikin QR dengan jumlah yang sudah diisi dan foto usaha di tengahnya.",
  },
  {
    icon: Users,
    title: "Bisa buat tim",
    body: "Beberapa karyawan pakai data usaha yang sama. Ada juga absen masuk dan pulang lengkap dengan lokasi.",
  },
  {
    icon: ClipboardList,
    title: "Catat tunai & stok",
    body: "Tambah penjualan tunai sendiri. Ada juga fitur pilihan buat kelola produk, kategori, dan stok.",
  },
  {
    icon: LayoutGrid,
    amber: true,
    title: "Widget di layar HP",
    body: "Lihat ringkasan hari ini dan daftar transaksi langsung dari layar depan, tanpa buka aplikasi.",
  },
];

const steps = [
  {
    n: 1,
    title: "Daftar & pasang QRIS",
    body: "Bikin akun usaha kamu, lalu tampilkan atau unggah kode QRIS di aplikasi.",
  },
  {
    n: 2,
    title: "Kasih izin notifikasi",
    body: "Ada panduan langkah demi langkah biar BeJo bisa dengar uang yang masuk.",
  },
  {
    n: 3,
    title: "Layani & dengarkan",
    body: "Tiap uang masuk langsung disebut pakai suara. Segitu aja, gampang.",
  },
];

const stats = [
  ["1000+", "Warung telah bergabung"],
  ["10+", "Suara unik"],
  ["Rp 0", "Biaya pakai"],
  ["40+", "Aplikasi yang didukung"],
];

const team = [
  { name: "Sari", initial: "S", status: "Masuk 08:02", in: true },
  { name: "Budi", initial: "B", status: "Masuk 08:15", in: true },
  { name: "Rina", initial: "R", status: "Belum absen", in: false },
];

export default function Home() {
  useReveal();
  useParallax();

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 md:pt-36"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_78%_12%,rgba(224,163,46,0.14),transparent_60%),radial-gradient(1200px_700px_at_12%_88%,rgba(46,125,87,0.16),transparent_55%),linear-gradient(170deg,#F5F8F4_0%,#E7F1EA_100%)]" />
        <div
          data-parallax="0.18"
          className="absolute -right-20 -top-28 -z-10 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[60px]"
        />
        <div
          data-parallax="-0.12"
          className="absolute -bottom-32 -left-24 -z-10 h-[420px] w-[420px] rounded-full bg-amber/20 blur-[60px]"
        />

        <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <Badge>📢 Buat Pedagang QRIS</Badge>
            <h1 className="mt-5 text-[clamp(2.5rem,5.2vw,4.15rem)] leading-[1.08]">
              Dengar uang masuk,{" "}
              <span className="text-gradient-amber">tanpa lihat HP.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[clamp(1.05rem,1.7vw,1.28rem)] text-muted-foreground">
              Tiap ada pembayaran QRIS masuk, BeJo langsung sebut jumlahnya pakai
              suara, misalnya <em>"dua ratus ribu rupiah"</em>. Jadi kamu bisa terus
              layani pembeli sambil tetap tahu uang sudah masuk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button asChild size="lg">
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer">
                  Pasang Gratis <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#cara">Lihat Cara Pakai</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Gratis dipakai",
                "Sudah dipakai 1000+ warung",
                "Data dikunci sidik jari",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"
                >
                  <Check className="h-5 w-5 flex-none text-primary" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="order-first lg:order-none">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* SUPPORTED APPS MARQUEE */}
      <section className="border-y border-border bg-card py-11">
        <div className="mb-6 text-center text-[13px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
          Dengar notifikasi dari dompet digital, bank, dan aplikasi kasir
        </div>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee gap-5">
            {[...supportedApps, ...supportedApps].map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-background px-5 py-2.5 text-[15px] font-bold text-muted-foreground"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="fitur" className="py-20 md:py-28">
        <div className="container">
          <SectionHead
            eyebrow="Kenapa BeJo"
            title="Semua yang warung kamu butuh, jadi satu"
            desc="Dari dengar uang masuk sampai rapikan catatan penjualan. Dibuat buat pemilik usaha yang tangannya selalu sibuk."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Card
                key={f.title}
                className={`reveal ${i % 3 === 1 ? "d1" : i % 3 === 2 ? "d2" : ""} ${
                  f.wide ? "lg:col-span-2" : ""
                } transition-all duration-300 hover:-translate-y-2 hover:shadow-card`}
              >
                <CardContent className="p-8">
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      f.amber ? "bg-[#fbeecb] text-amber-dark" : "bg-mint text-primary"
                    }`}
                  >
                    <f.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2.5 text-xl">{f.title}</h3>
                  <p className="text-muted-foreground">{f.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="cara" className="bg-gradient-to-b from-background to-[#EAF1EA] py-20 md:py-28">
        <div className="container">
          <SectionHead
            eyebrow="Cara Pakai"
            title="Siap dalam tiga langkah"
            desc="Pasang sekali, biarkan BeJo kerja di belakang layar seharian."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Card
                key={s.n}
                className={`reveal ${i === 1 ? "d1" : i === 2 ? "d2" : ""} text-center`}
              >
                <CardContent className="px-8 pb-8 pt-10">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-2xl font-extrabold text-white shadow-[0_10px_24px_rgba(46,125,87,0.35)]">
                    {s.n}
                  </div>
                  <h3 className="mb-2.5 text-xl">{s.title}</h3>
                  <p className="text-muted-foreground">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UANG MASUK QRIS */}
      <section id="uang-masuk" className="overflow-hidden bg-[#EAF1EA] py-20 md:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <Badge>Uang Masuk QRIS</Badge>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)]">
              Tiap uang masuk, langsung kedengeran
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Begitu ada pembayaran QRIS masuk, BeJo langsung sebut jumlahnya pakai
              suara dalam Bahasa Indonesia. Kamu bisa terus layani pembeli tanpa
              harus bolak-balik ngecek HP.
            </p>
            <CheckList
              items={[
                ["Disebut kurang dari 1 detik", "pas uang masuk, nggak pakai nunggu."],
                ["Dengar dari 40+ aplikasi", "bank dan dompet digital, iklan disaring."],
                ["Pilih 10+ suara unik", "sesuai selera dan atur cepat lambatnya."],
              ]}
            />
          </div>
          <div className="reveal d1" data-parallax="0.08">
            <Card className="shadow-card">
              <CardContent className="p-7">
                <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-5 text-white">
                  <div className="text-[11px] uppercase tracking-[0.08em] opacity-85">
                    Pembayaran Terdeteksi
                  </div>
                  <div className="mt-1 text-3xl font-extrabold">Rp 200.000</div>
                  <div className="mt-0.5 text-xs opacity-90">GoPay · QRIS · baru aja</div>
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-mint p-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white">
                    <Volume2 className="h-5 w-5" />
                  </div>
                  <div className="text-[15px]">
                    <b className="text-primary-deep">"Dua ratus ribu rupiah"</b>
                    <span className="ml-1 inline-flex h-3 items-end gap-[2px] align-middle">
                      <i className="w-[3px] animate-eq rounded bg-primary [height:6px] [animation-delay:0s]" />
                      <i className="w-[3px] animate-eq rounded bg-primary [height:13px] [animation-delay:0.15s]" />
                      <i className="w-[3px] animate-eq rounded bg-primary [height:8px] [animation-delay:0.3s]" />
                      <i className="w-[3px] animate-eq rounded bg-primary [height:14px] [animation-delay:0.45s]" />
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* KELOLA TIM & ABSENSI */}
      <section id="tim" className="overflow-hidden py-20 md:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal order-last lg:order-first" data-parallax="0.08">
            <Card className="shadow-card">
              <CardContent className="p-7">
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.06em] text-muted-foreground">
                  Absensi Hari Ini
                </div>
                <div className="flex flex-col gap-2.5">
                  {team.map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-3 rounded-2xl bg-background p-3"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-mint font-extrabold text-primary">
                        {m.initial}
                      </div>
                      <div className="flex-1 font-bold">{m.name}</div>
                      <div
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          m.in
                            ? "bg-mint text-primary-deep"
                            : "bg-[#f1e2c4] text-amber-dark"
                        }`}
                      >
                        {m.status}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-2xl bg-primary/10 p-3 text-sm font-semibold text-primary-deep">
                  <MapPin className="h-5 w-5 flex-none text-primary" />
                  Toko Utama · Jl. Merdeka No. 12
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="reveal d1">
            <Badge>Kelola Tim & Absensi</Badge>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)]">
              Satu tim, satu data, kehadiran terpantau
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ajak karyawan pakai data usaha yang sama. Pantau kehadiran lewat absen
              masuk dan pulang yang dilengkapi lokasi, jadi kamu selalu tahu siapa
              yang jaga dan di mana.
            </p>
            <CheckList
              items={[
                ["Beberapa karyawan", "berbagi transaksi, produk, dan pengaturan yang sama."],
                ["Absen masuk & pulang", "lengkap dengan lokasi tempat absennya."],
                ["Ringkasan kehadiran", "per tanggal, khusus buat pemilik usaha."],
              ]}
            />
          </div>
        </div>
      </section>

      {/* CATATAN TRANSAKSI */}
      <section id="catatan" className="overflow-hidden bg-[#EAF1EA] py-20 md:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <Badge>Catatan Transaksi</Badge>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)]">
              Catatan rapi yang bisa kamu percaya
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Semua transaksi tercatat otomatis. Ada ringkasan harian dan bulanan,
              plus saringan per tanggal. Tiap catatan dikasih tanda dari mana asalnya,
              jadi pembukuan kamu gampang.
            </p>
            <CheckList
              items={[
                ["Ringkasan cepat", "total hari ini, kemarin, dan bulan ini."],
                ["Saring per tanggal", "buat lihat periode apa pun."],
                ["Ada tanda sumbernya", "QRIS, tunai yang dicatat, atau dari aplikasi lain."],
              ]}
            />
          </div>
          <div className="reveal d1" data-parallax="0.08">
            <Card className="shadow-card">
              <CardContent className="p-7">
                <div className="mb-5 flex gap-3.5">
                  <SummaryBox k="Hari Ini" v="Rp 2,48jt" />
                  <SummaryBox k="Kemarin" v="Rp 2,21jt" />
                  <SummaryBox k="Bulan Ini" v="Rp 58,9jt" amber />
                </div>
                <div className="flex h-32 items-end gap-2.5 pt-2">
                  {[42, 65, 50, 78, 60, 88, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 rounded-t-lg bg-gradient-to-b from-mint to-primary"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BRAND TEASER */}
      <section id="brand" className="py-20 md:py-24">
        <div className="container">
          <div className="reveal relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#3a2a05_0%,#8a5f10_45%,#C4881C_100%)] px-6 py-14 shadow-big md:px-12 md:py-16">
            <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em]">
                  <Megaphone className="h-4 w-4" /> Untuk Brand & Pengiklan
                </div>
                <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.6rem)]">
                  Punya brand? Sapa ribuan warung lewat iklan suara.
                </h2>
                <p className="mt-3 max-w-xl text-lg text-white/90">
                  BeJo bisa memutar iklan suara singkat di HP para pedagang yang
                  setuju menerimanya, tepat sasaran sesuai lokasi dan audiens. Suara
                  brand kamu benar-benar terdengar di lapak akar rumput.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Button asChild size="lg" variant="amber">
                  <a href="/brand.html">
                    Pelajari untuk Brand <ArrowRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_85%_20%,rgba(224,163,46,0.25),transparent_60%)]" />
        <div className="container relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map(([big, lbl], i) => (
            <div key={i} className={`reveal ${i ? `d${i}` : ""}`}>
              <div className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold tracking-tight">
                {big}
              </div>
              <div className="mt-1.5 text-[0.98rem] opacity-90">{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="unduh" className="py-24">
        <div className="container">
          <div className="reveal relative overflow-hidden rounded-[32px] bg-[linear-gradient(150deg,#17402c_0%,#256B49_55%,#2E7D57_100%)] px-6 py-16 text-center text-white shadow-big md:px-10 md:py-20">
            <img
              src="/assets/bejo-icon.png"
              alt=""
              data-parallax="0.2"
              className="pointer-events-none absolute -top-5 left-10 hidden w-28 opacity-90 md:block"
            />
            <img
              src="/assets/bejo-icon-round.png"
              alt=""
              data-parallax="-0.15"
              className="pointer-events-none absolute -bottom-7 right-10 hidden w-24 opacity-90 md:block"
            />
            <h2 className="relative text-[clamp(2rem,3.6vw,2.9rem)]">
              Jangan sampai ada uang masuk yang kelewat
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg opacity-90">
              Pasang BeJo sekarang, biar si kucing hoki jagain tiap uang yang masuk
              ke warung kamu.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3.5">
              <Button asChild size="lg" variant="amber">
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer">
                  <Mic /> Pasang di Google Play
                </a>
              </Button>
              <Button asChild size="lg" variant="light">
                <a href="#fitur">Lihat semua fitur</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="reveal mx-auto mb-14 max-w-2xl text-center">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.9rem)]">{title}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{desc}</p>
    </div>
  );
}

function CheckList({ items }: { items: [string, string][] }) {
  return (
    <ul className="mt-6 flex flex-col gap-3.5">
      {items.map(([bold, rest]) => (
        <li key={bold} className="flex items-start gap-3 text-[1.02rem]">
          <Check className="mt-0.5 h-5 w-5 flex-none text-primary" />
          <span>
            <b>{bold}</b> {rest}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SummaryBox({
  k,
  v,
  amber,
}: {
  k: string;
  v: string;
  amber?: boolean;
}) {
  return (
    <div className="flex-1 rounded-2xl bg-background p-4">
      <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-muted-foreground">
        {k}
      </div>
      <div className={`mt-1 text-[22px] font-extrabold ${amber ? "text-amber-dark" : "text-primary"}`}>
        {v}
      </div>
    </div>
  );
}
