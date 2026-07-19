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
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParallax } from "@/hooks/useParallax";
import { useReveal } from "@/hooks/useReveal";

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
    body: "Begitu ada uang masuk, BeJo bunyikan lonceng lalu sebut jumlahnya dalam Bahasa Indonesia. Kamu nggak perlu pegang HP. Bisa pilih suara, atur cepat lambatnya, bahkan simpan suara sendiri.",
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
                <a href="#unduh">
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
                "Bisa GoPay, Dana, OVO, BCA, BRI, dan 35+ lainnya",
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

      {/* REKAP */}
      <section id="rekap" className="overflow-hidden bg-[#EAF1EA] py-20 md:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <Badge>Catatan Penjualan</Badge>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)]">
              Tahu persis berapa yang masuk hari ini
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Bukan cuma bunyi. BeJo simpan catatan tiap penjualan yang bisa kamu
              percaya. Tiap catatan dikasih tanda dari mana asalnya, jadi pembukuan
              kamu gampang.
            </p>
            <CheckList
              items={[
                ["Ringkasan cepat", "total hari ini, kemarin, dan bulan ini."],
                ["Saring per tanggal", "buat lihat periode apa pun."],
                ["Ada tanda sumbernya", "QRIS, dicatat tangan, atau dari aplikasi lain."],
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

      {/* QRIS & TIM */}
      <section id="qris" className="overflow-hidden py-20 md:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal order-last lg:order-first" data-parallax="0.08">
            <Card className="shadow-card">
              <CardContent className="flex flex-col items-center gap-5 p-7">
                <div className="relative h-44 w-44 rounded-2xl bg-white p-4 shadow-[inset_0_0_0_2px_hsl(var(--border))]">
                  <div className="h-full w-full rounded bg-[linear-gradient(90deg,#16201a_25%,transparent_25%,transparent_50%,#16201a_50%,#16201a_60%,transparent_60%),linear-gradient(#16201a_25%,transparent_25%,transparent_50%,#16201a_50%,#16201a_75%,transparent_75%)] bg-[length:18px_18px] opacity-85" />
                  <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-[0_0_0_5px_#fff]">
                    <img
                      src="/assets/bejo-icon-round.png"
                      alt="Logo di tengah QRIS"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-extrabold text-primary">QRIS Warung Bejo</div>
                  <div className="text-sm text-muted-foreground">Jumlah Rp 50.000 sudah terisi</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="reveal d1">
            <Badge>QRIS & Tim</Badge>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)]">
              QRIS gampang diatur, tim ikut nyambung
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Atur QRIS kamu langsung di aplikasi. Bisa tempel foto usaha di
              tengahnya, sudah dicek tetap bisa discan. Ajak juga karyawan pakai
              data yang sama.
            </p>
            <CheckList
              items={[
                ["Bikin QR dengan jumlah tertentu", "langsung dari HP, tanpa ribet."],
                ["Foto di tengah QRIS", "sudah dicek tetap kebaca ke QRIS yang sama."],
                ["Absen tim pakai lokasi", "buat pemilik usaha memantau kehadiran."],
              ]}
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_85%_20%,rgba(224,163,46,0.25),transparent_60%)]" />
        <div className="container relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {[
            ["40+", "aplikasi bank & dompet didengar"],
            ["4", "pilihan suara"],
            ["0 dtk", "jeda, langsung kedengeran"],
            ["100%", "data hilang pas kamu keluar"],
          ].map(([big, lbl], i) => (
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
                <a href="#">
                  <Mic /> Pasang buat Android
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
