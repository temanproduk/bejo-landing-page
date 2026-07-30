import { Check, Minus, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { playUrl } from "@/lib/constants";

const links = [
  { href: "/#uang-masuk", label: "Uang Masuk QRIS" },
  { href: "/#kirim-qris", label: "Tagih Lewat QRIS" },
  { href: "/#cara", label: "Cara Pakai" },
];

type Row = {
  name: string;
  aktivasi: string;
  sewa: string;
  keandalan: string;
  suara: string;
  /** Only BeJo lets the merchant change the announcement voice. */
  suaraBebas?: boolean;
};

const bejo: Row = {
  name: "BeJo",
  aktivasi: "Gratis",
  sewa: "Gratis",
  keandalan: "Handal",
  suara: "Bisa diubah sesuka hati, atau pilih dari soundpack yang sudah ada",
  suaraBebas: true,
};

const soundbox: Row[] = [
  {
    name: "GoPay Soundbox",
    aktivasi: "Rp 100.000",
    sewa: "Rp 1.999/hari, Rp 49.000/bulan, atau Rp 499.000/tahun",
    keandalan: "Sangat handal",
    suara: "Terbatas pada pilihan saat aktivasi",
  },
  {
    name: "Flip Soundbox",
    aktivasi: "Rp 0",
    sewa: "Rp 17.000/minggu",
    keandalan: "Sangat handal",
    suara: "Tidak bisa diubah",
  },
  {
    name: "Netzme Soundbox",
    aktivasi: "Rp 99.000",
    sewa: "Rp 1.000/hari",
    keandalan: "Sangat handal",
    suara: "Tidak bisa diubah",
  },
];

const merchantApps: Row[] = [
  {
    name: "DANA Bisnis",
    aktivasi: "Gratis",
    sewa: "Gratis",
    keandalan: "Handal",
    suara: "Tidak bisa diubah",
  },
  {
    name: "GoPay Merchant",
    aktivasi: "Gratis",
    sewa: "Gratis",
    keandalan: "Handal",
    suara: "Tidak bisa diubah",
  },
  {
    name: "Merchant BCA",
    aktivasi: "Gratis",
    sewa: "Gratis",
    keandalan: "Handal",
    suara: "Tidak bisa diubah",
  },
];

/** Rough first-year cost, worked out from the rates in the table. */
const yearly = [
  ["GoPay Soundbox", "± Rp 599.000", "aktivasi + langganan tahunan"],
  ["Flip Soundbox", "± Rp 884.000", "Rp 17.000 x 52 minggu"],
  ["Netzme Soundbox", "± Rp 464.000", "aktivasi + Rp 1.000 x 365 hari"],
];

const COLS = ["Biaya aktivasi", "Uang sewa", "Keandalan notifikasi", "Ubah suara notifikasi"];

export default function Compare() {
  return (
    <>
      <Header links={links} variant="inner" ctaLabel="Pasang Gratis" ctaHref={playUrl("banding")} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-line pb-14 pt-28 md:pb-16 md:pt-32">
        <div className="container">
          <Eyebrow>Banding harga</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.2rem,5.4vw,3.8rem)] uppercase">
            Bayar sewa soundbox tiap bulan, atau <span className="struck">gratis</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] text-ink-soft md:text-lg">
            Banyak pedagang bayar sewa alat cuma supaya uang masuk kedengeran.
            Di bawah ini perbandingan biaya dan kemampuannya, biar kamu bisa
            memutuskan sendiri.
          </p>
        </div>
      </section>

      {/* ── TABLE (desktop) ──────────────────────────────────── */}
      <section className="border-b border-line py-14 md:py-20">
        <div className="container">
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-[22%] border-b-2 border-ink pb-3 pr-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-faint">
                    Layanan
                  </th>
                  {COLS.map((c) => (
                    <th
                      key={c}
                      className="border-b-2 border-ink px-4 pb-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-faint"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* BeJo pinned to the top */}
                <tr className="bg-mint">
                  <th
                    scope="row"
                    className="border-b border-line py-5 pl-4 pr-4 align-top"
                  >
                    <span className="flex items-center gap-2">
                      <img
                        src="/assets/bejo-icon-round.png"
                        alt=""
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                      <span className="font-display text-xl text-green-deep">BeJo</span>
                    </span>
                    <span className="mt-1.5 flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-green">
                      <Sparkles className="h-3 w-3" aria-hidden="true" /> Pilihan hemat
                    </span>
                  </th>
                  <Cell strong>{bejo.aktivasi}</Cell>
                  <Cell strong>{bejo.sewa}</Cell>
                  <Cell>{bejo.keandalan}</Cell>
                  <Cell strong>
                    <span className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-green" aria-hidden="true" />
                      {bejo.suara}
                    </span>
                  </Cell>
                </tr>

                <GroupRow label="Soundbox berlangganan" />
                {soundbox.map((r) => (
                  <DataRow key={r.name} row={r} />
                ))}

                <GroupRow label="Aplikasi merchant lain" />
                {merchantApps.map((r) => (
                  <DataRow key={r.name} row={r} />
                ))}
              </tbody>
            </table>
          </div>

          {/* ── CARDS (tablet & phone) ─────────────────────────── */}
          <div className="flex flex-col gap-4 lg:hidden">
            <article className="border-l-4 border-green bg-mint p-5">
              <div className="flex items-center gap-2.5">
                <img
                  src="/assets/bejo-icon-round.png"
                  alt=""
                  className="h-8 w-8"
                  aria-hidden="true"
                />
                <h2 className="font-display text-2xl text-green-deep">BeJo</h2>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-green">
                  <Sparkles className="h-3 w-3" aria-hidden="true" /> Hemat
                </span>
              </div>
              <dl className="mt-4 divide-y divide-green/20">
                <Field k={COLS[0]} v={bejo.aktivasi} strong />
                <Field k={COLS[1]} v={bejo.sewa} strong />
                <Field k={COLS[2]} v={bejo.keandalan} />
                <Field k={COLS[3]} v={bejo.suara} strong />
              </dl>
            </article>

            <p className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-faint">
              Soundbox berlangganan
            </p>
            {soundbox.map((r) => (
              <CardRow key={r.name} row={r} />
            ))}

            <p className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-faint">
              Aplikasi merchant lain
            </p>
            {merchantApps.map((r) => (
              <CardRow key={r.name} row={r} />
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm text-ink-faint">
            Harga dikumpulkan dari informasi yang dibuka masing-masing layanan ke
            publik, keadaan Juli 2026. Biaya dan ketentuan tiap layanan bisa
            berubah sewaktu-waktu, jadi sebaiknya dicek lagi sebelum memutuskan.
          </p>
        </div>
      </section>

      {/* ── YEARLY COST ──────────────────────────────────────── */}
      <section className="border-b border-line bg-paper-warm py-14 md:py-20">
        <div className="container">
          <Eyebrow>Hitungan kasar setahun</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase">
            Sewa soundbox bisa habis ratusan ribu setahun
          </h2>

          <dl className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {yearly.map(([name, cost, note]) => (
              <div key={name} className="bg-paper-warm p-6">
                <dt className="text-sm font-bold">{name}</dt>
                <dd className="tnum mt-2 font-display text-2xl text-ink">{cost}</dd>
                <dd className="mt-1 text-xs text-ink-faint">{note}</dd>
              </div>
            ))}
            <div className="bg-green-deep p-6 text-white">
              <dt className="text-sm font-bold">BeJo</dt>
              <dd className="tnum mt-2 font-display text-2xl">Rp 0</dd>
              <dd className="mt-1 text-xs text-white/70">tidak ada sewa, tidak ada aktivasi</dd>
            </div>
          </dl>

          <p className="mt-6 max-w-3xl text-ink-soft">
            Aplikasi merchant seperti DANA Bisnis, GoPay Merchant, dan Merchant BCA
            juga gratis. Bedanya di suara: hanya BeJo yang membiarkan kamu mengganti
            suara pemberitahuannya sesuai selera.
          </p>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(1.9rem,4.4vw,3rem)] uppercase">
              HP kamu sudah jadi soundbox
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Pasang BeJo, kasih izin notifikasi, lalu uang masuk langsung
              dibunyikan. Tanpa alat tambahan, tanpa sewa bulanan.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button asChild size="lg" variant="gold">
              <a href={playUrl("banding")} target="_blank" rel="noopener noreferrer">
                Pasang Gratis <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Cell({
  children,
  strong,
}: {
  children: React.ReactNode;
  strong?: boolean;
}) {
  return (
    <td
      className={`border-b border-line px-4 py-5 align-top ${
        strong ? "font-bold text-ink" : "text-ink-soft"
      }`}
    >
      {children}
    </td>
  );
}

function GroupRow({ label }: { label: string }) {
  return (
    <tr>
      <td
        colSpan={5}
        className="border-b border-line bg-paper-warm px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint"
      >
        {label}
      </td>
    </tr>
  );
}

function DataRow({ row }: { row: Row }) {
  return (
    <tr>
      <th scope="row" className="border-b border-line py-5 pl-4 pr-4 align-top font-bold">
        {row.name}
      </th>
      <Cell>{row.aktivasi}</Cell>
      <Cell>{row.sewa}</Cell>
      <Cell>{row.keandalan}</Cell>
      <Cell>
        <span className="flex items-start gap-2">
          <Minus className="mt-0.5 h-4 w-4 flex-none text-ink-faint" aria-hidden="true" />
          {row.suara}
        </span>
      </Cell>
    </tr>
  );
}

function CardRow({ row }: { row: Row }) {
  return (
    <article className="border border-line-strong bg-white p-5">
      <h3 className="font-bold">{row.name}</h3>
      <dl className="mt-3 divide-y divide-line">
        <Field k={COLS[0]} v={row.aktivasi} />
        <Field k={COLS[1]} v={row.sewa} />
        <Field k={COLS[2]} v={row.keandalan} />
        <Field k={COLS[3]} v={row.suara} />
      </dl>
    </article>
  );
}

function Field({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className="flex gap-4 py-2.5">
      <dt className="w-[42%] flex-none font-mono text-[10.5px] font-bold uppercase leading-snug tracking-wider text-ink-faint">
        {k}
      </dt>
      <dd className={`flex-1 text-[14.5px] ${strong ? "font-bold text-ink" : "text-ink-soft"}`}>
        {v}
      </dd>
    </div>
  );
}
