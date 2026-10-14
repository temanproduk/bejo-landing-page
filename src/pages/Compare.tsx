import { Check, Minus, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { playUrl } from "@/lib/constants";
import { t } from "@/lib/i18n";

type Row = {
  name: string;
  aktivasi: string;
  sewa: string;
  keandalan: string;
  suara: string;
  /** Only BeJo lets the merchant change the announcement voice. */
  suaraBebas?: boolean;
};

const free = t("Gratis", "Free");
const reliable = t("Handal", "Reliable");
const veryReliable = t("Sangat handal", "Very reliable");
const fixedVoice = t("Tidak bisa diubah", "Can't be changed");

const bejo: Row = {
  name: "BeJo",
  aktivasi: free,
  sewa: free,
  keandalan: reliable,
  suara: t(
    "Bisa diubah sesuka hati, atau pilih dari soundpack yang sudah ada",
    "Change it however you like, or pick from ready-made sound packs"
  ),
  suaraBebas: true,
};

const soundbox: Row[] = [
  {
    name: "GoPay Soundbox",
    aktivasi: t("Rp 100.000", "Rp 100,000"),
    sewa: t(
      "Rp 1.999/hari, Rp 49.000/bulan, atau Rp 499.000/tahun",
      "Rp 1,999/day, Rp 49,000/month, or Rp 499,000/year"
    ),
    keandalan: veryReliable,
    suara: t("Terbatas pada pilihan saat aktivasi", "Limited to the choice made at activation"),
  },
  {
    name: "Flip Soundbox",
    aktivasi: "Rp 0",
    sewa: t("Rp 17.000/minggu", "Rp 17,000/week"),
    keandalan: veryReliable,
    suara: fixedVoice,
  },
  {
    name: "Netzme Soundbox",
    aktivasi: t("Rp 99.000", "Rp 99,000"),
    sewa: t("Rp 1.000/hari", "Rp 1,000/day"),
    keandalan: veryReliable,
    suara: fixedVoice,
  },
];

const merchantApps: Row[] = [
  {
    name: "DANA Bisnis",
    aktivasi: free,
    sewa: free,
    keandalan: reliable,
    suara: fixedVoice,
  },
  {
    name: "GoPay Merchant",
    aktivasi: free,
    sewa: free,
    keandalan: reliable,
    suara: fixedVoice,
  },
  {
    name: "Merchant BCA",
    aktivasi: free,
    sewa: free,
    keandalan: reliable,
    suara: fixedVoice,
  },
];

/** Rough first-year cost, worked out from the rates in the table. */
const yearly = t(
  [
    ["GoPay Soundbox", "± Rp 599.000", "aktivasi + langganan tahunan"],
    ["Flip Soundbox", "± Rp 884.000", "Rp 17.000 x 52 minggu"],
    ["Netzme Soundbox", "± Rp 464.000", "aktivasi + Rp 1.000 x 365 hari"],
  ],
  [
    ["GoPay Soundbox", "± Rp 599,000", "activation + yearly plan"],
    ["Flip Soundbox", "± Rp 884,000", "Rp 17,000 x 52 weeks"],
    ["Netzme Soundbox", "± Rp 464,000", "activation + Rp 1,000 x 365 days"],
  ]
);

const COLS = t(
  ["Biaya aktivasi", "Uang sewa", "Keandalan notifikasi", "Ubah suara notifikasi"],
  ["Activation fee", "Rental fee", "Notification reliability", "Change the voice"]
);

export default function Compare() {
  return (
    <>
      <Header variant="inner" ctaHref={playUrl("banding")} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-line pb-14 pt-28 md:pb-16 md:pt-32">
        <div className="container">
          <Eyebrow>{t("Banding harga", "Compare prices")}</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.2rem,5.4vw,3.8rem)] uppercase">
            {t(
              <>Bayar sewa soundbox tiap bulan, atau <span className="struck">gratis</span></>,
              <>Pay soundbox rent every month, or go <span className="struck">free</span></>
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] text-ink-soft md:text-lg">
            {t(
              "Banyak pedagang bayar sewa alat cuma supaya uang masuk kedengeran. Di bawah ini perbandingan biaya dan kemampuannya, biar kamu bisa memutuskan sendiri.",
              "Plenty of merchants rent a device just to hear when money comes in. Below is how the costs and features compare, so you can decide for yourself."
            )}
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
                    {t("Layanan", "Service")}
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
                      <Sparkles className="h-3 w-3" aria-hidden="true" /> {t("Pilihan hemat", "Best value")}
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

                <GroupRow label={t("Soundbox berlangganan", "Subscription soundboxes")} />
                {soundbox.map((r) => (
                  <DataRow key={r.name} row={r} />
                ))}

                <GroupRow label={t("Aplikasi merchant lain", "Other merchant apps")} />
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
                  <Sparkles className="h-3 w-3" aria-hidden="true" /> {t("Hemat", "Best value")}
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
              {t("Soundbox berlangganan", "Subscription soundboxes")}
            </p>
            {soundbox.map((r) => (
              <CardRow key={r.name} row={r} />
            ))}

            <p className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-faint">
              {t("Aplikasi merchant lain", "Other merchant apps")}
            </p>
            {merchantApps.map((r) => (
              <CardRow key={r.name} row={r} />
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm text-ink-faint">
            {t(
              "Harga dikumpulkan dari informasi yang dibuka masing-masing layanan ke publik, keadaan Juli 2026. Biaya dan ketentuan tiap layanan bisa berubah sewaktu-waktu, jadi sebaiknya dicek lagi sebelum memutuskan.",
              "Prices are taken from each service's publicly available information as of July 2026. Fees and terms can change at any time, so double-check before you decide."
            )}
          </p>
        </div>
      </section>

      {/* ── YEARLY COST ──────────────────────────────────────── */}
      <section className="border-b border-line bg-paper-warm py-14 md:py-20">
        <div className="container">
          <Eyebrow>{t("Hitungan kasar setahun", "Rough yearly cost")}</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase">
            {t(
              "Sewa soundbox bisa habis ratusan ribu setahun",
              "Soundbox rent can cost hundreds of thousands a year"
            )}
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
              <dd className="mt-1 text-xs text-white/70">
                {t("tidak ada sewa, tidak ada aktivasi", "no rent, no activation fee")}
              </dd>
            </div>
          </dl>

          <p className="mt-6 max-w-3xl text-ink-soft">
            {t(
              "Aplikasi merchant seperti DANA Bisnis, GoPay Merchant, dan Merchant BCA juga gratis. Bedanya di suara: hanya BeJo yang membiarkan kamu mengganti suara pemberitahuannya sesuai selera.",
              "Merchant apps like DANA Bisnis, GoPay Merchant, and Merchant BCA are free too. The difference is the voice: only BeJo lets you change the announcement voice to suit your taste."
            )}
          </p>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────── */}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-[clamp(1.9rem,4.4vw,3rem)] uppercase">
              {t("HP kamu sudah jadi soundbox!", "Your phone is now a soundbox!")}
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              {t(
                "Pasang BeJo, kasih izin notifikasi, lalu uang masuk langsung dibunyikan. Tanpa alat tambahan, tanpa sewa bulanan.",
                "Install BeJo, allow notification access, and every incoming payment is announced. No extra device, no monthly rent."
              )}
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button asChild size="lg" variant="gold">
              <a href={playUrl("banding")} target="_blank" rel="noopener noreferrer">
                {t("Pasang Gratis", "Install Free")} <ArrowRight />
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
    <div className="flex flex-col gap-1 py-2.5 sm:flex-row sm:gap-4">
      <dt className="flex-none font-mono text-[10.5px] font-bold uppercase leading-snug tracking-wider text-ink-faint sm:w-[42%]">
        {k}
      </dt>
      <dd className={`flex-1 text-[14.5px] ${strong ? "font-bold text-ink" : "text-ink-soft"}`}>
        {/* Keep the currency on the same line as its amount. */}
        {v.replace(/Rp /g, "Rp\u00a0")}
      </dd>
    </div>
  );
}
