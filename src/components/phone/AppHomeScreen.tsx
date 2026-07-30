import { Volume2, Plus, Receipt, QrCode, User } from "lucide-react";
import { formatRupiah } from "@/lib/rupiah";

export type Entry = { id: number; amount: number; issuer: string; fresh?: boolean };

const BASE: Entry[] = [
  { id: 1, amount: 45_000, issuer: "Dana" },
  { id: 2, amount: 128_500, issuer: "BCA" },
  { id: 3, amount: 15_000, issuer: "Tunai" },
];

/** BeJo's transaction screen, reacting live while an amount is announced. */
export function AppHomeScreen({
  incoming = [],
  announcing = false,
}: {
  incoming?: Entry[];
  announcing?: boolean;
}) {
  const rows = [...incoming, ...BASE].slice(0, 3);
  const total = 2_480_000 + incoming.reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="relative flex h-[442px] flex-col bg-paper">
      {/* Heads-up notification, the way Android surfaces a detected payment.
          Overlaid so the screen behind it never reflows. */}
      <div
        className={`absolute inset-x-2 top-2 z-20 transition-all duration-300 ${
          announcing
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2.5 rounded-[10px] border border-gold bg-[#FDF3DE] px-3 py-2 shadow-[0_6px_18px_rgba(10,23,16,0.25)]">
          <Volume2 className="h-4 w-4 flex-none text-gold-dark" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[10.5px] font-bold leading-tight text-ink">
              Pembayaran Terdeteksi
            </p>
            <p className="text-[9px] leading-tight text-ink-soft">Sedang dibunyikan</p>
          </div>
          <span className="ml-auto flex h-3.5 items-end gap-[2px]" aria-hidden="true">
            {[5, 10, 6, 11].map((h, i) => (
              <i
                key={i}
                style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }}
                className="w-[2px] origin-bottom animate-bar bg-gold-dark"
              />
            ))}
          </span>
        </div>
      </div>

      {/* Today's takings */}
      <div className="bg-green-deep px-4 pb-3 pt-2 text-white">
        <p className="text-[10px] uppercase tracking-[0.14em] text-white/55">
          Warung Bejo
        </p>
        <p className="mt-1.5 text-[10px] text-white/70">Masuk hari ini</p>
        <p className="tnum font-display text-[30px] leading-none">
          Rp {formatRupiah(total)}
        </p>

        <div className="mt-3 flex gap-2">
          {[
            ["Kemarin", "2,21jt"],
            ["Bulan ini", "58,9jt"],
          ].map(([k, v]) => (
            <div key={k} className="flex-1 rounded-[8px] bg-white/10 px-2.5 py-1.5">
              <p className="text-[9px] text-white/60">{k}</p>
              <p className="tnum text-[12px] font-bold">Rp {v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div className="min-h-0 flex-1 overflow-hidden px-3 pt-3">
        <p className="mb-1.5 px-1 text-[9px] font-bold uppercase tracking-[0.12em] text-green">
          Transaksi Terbaru
        </p>
        <ul className="overflow-hidden rounded-[10px] bg-white">
          {rows.map((r, i) => (
            <li
              key={r.id}
              className={`flex items-center gap-2.5 px-3 py-2.5 ${
                i > 0 ? "border-t border-[#ECEFE9]" : ""
              } ${r.fresh ? "bg-[#F0F8F3]" : ""}`}
            >
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[8px] bg-mint">
                <QrCode className="h-3.5 w-3.5 text-green" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="tnum block text-[13px] font-bold leading-tight text-ink">
                  Rp {formatRupiah(r.amount)}
                </span>
                <span className="block text-[9.5px] text-ink-faint">
                  {r.fresh ? "Baru saja" : `${i * 7 + 4} menit lalu`}
                </span>
              </span>
              <span className="flex-none rounded-[5px] bg-mint px-1.5 py-0.5 text-[8.5px] font-bold text-green-deep">
                {r.issuer}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          tabIndex={-1}
          className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-[10px] bg-green py-2 text-[12px] font-bold text-white"
        >
          <Plus className="h-3.5 w-3.5" aria-hidden="true" /> Catat Transaksi
        </button>
      </div>

      {/* Bottom navigation */}
      <nav className="grid grid-cols-3 border-t border-[#E6EBE4] bg-white pb-1.5 pt-2">
        {[
          { icon: Receipt, label: "Transaksi", active: true },
          { icon: QrCode, label: "QRIS" },
          { icon: User, label: "Profil" },
        ].map((t) => (
          <span
            key={t.label}
            className={`flex flex-col items-center gap-1 text-[9px] ${
              t.active ? "font-bold text-green" : "text-ink-faint"
            }`}
          >
            <t.icon className="h-4 w-4" aria-hidden="true" />
            {t.label}
          </span>
        ))}
      </nav>
    </div>
  );
}
