import { ArrowDownLeft, Banknote, QrCode } from "lucide-react";

const rows = [
  { amount: "200.000", meta: "Baru aja", source: "GoPay", icon: QrCode },
  { amount: "45.000", meta: "2 menit lalu", source: "Dana", icon: QrCode },
  { amount: "128.500", meta: "5 menit lalu", source: "BCA", icon: QrCode },
  { amount: "15.000", meta: "Dicatat sendiri", source: "Tunai", icon: Banknote },
];

/** A trimmed rendering of BeJo's home screen, used as section evidence. */
export function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[300px] border border-line-strong bg-white p-2.5 shadow-lift">
      <div className="border border-line bg-paper">
        {/* Today's total */}
        <div className="bg-green-deep px-5 pb-5 pt-6 text-white">
          <p className="eyebrow text-white/60">Masuk hari ini</p>
          <p className="tnum mt-1.5 font-display text-4xl">Rp 2.480.000</p>
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-white/75">
            <ArrowDownLeft className="h-3.5 w-3.5" aria-hidden="true" />
            18 transaksi, naik 12% dari kemarin
          </p>
        </div>

        {/* Recent payments */}
        <ul className="divide-y divide-line">
          {rows.map((r) => (
            <li key={r.amount} className="flex items-center gap-3 bg-white px-4 py-3">
              <span className="flex h-8 w-8 flex-none items-center justify-center bg-mint text-green">
                <r.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="tnum block text-[15px] font-bold leading-tight">
                  Rp {r.amount}
                </span>
                <span className="block text-[11px] text-ink-faint">{r.meta}</span>
              </span>
              <span className="eyebrow flex-none text-ink-faint">{r.source}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
