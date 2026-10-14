import { Share2, Landmark, Copy, Receipt, QrCode, User } from "lucide-react";
import { t } from "@/lib/i18n";

/** The QRIS tab: a code with the order amount already set, ready to send. */
export function AppQrisScreen() {
  return (
    <div className="flex flex-col bg-paper">
      <div className="bg-green-deep px-4 pb-3 pt-2 text-white">
        <p className="text-[10px] uppercase tracking-[0.14em] text-white/55">QRIS</p>
        <p className="text-[11px] text-white/80">Warung Bejo</p>
      </div>

      <div className="px-3 pb-3 pt-3">
        {/* QR with the amount baked in */}
        <div className="rounded-[10px] bg-white p-3">
          <div className="flex items-baseline justify-between px-0.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-green">
              {t("Nominal", "Amount")}
            </span>
            <span className="tnum text-[15px] font-extrabold text-ink">
              {t("Rp 75.000", "Rp 75,000")}
            </span>
          </div>

          <div className="relative mx-auto mt-2 h-[124px] w-[124px] bg-white p-1.5">
            <div
              className="h-full w-full bg-[length:14px_14px] opacity-90 [background-image:linear-gradient(90deg,#0A1710_25%,transparent_25%,transparent_50%,#0A1710_50%,#0A1710_60%,transparent_60%),linear-gradient(#0A1710_25%,transparent_25%,transparent_50%,#0A1710_50%,#0A1710_75%,transparent_75%)]"
              aria-hidden="true"
            />
            {/* the merchant's own picture in the middle, as the app does */}
            <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-[0_0_0_3px_#fff]">
              <img
                src="/assets/bejo-icon-round.png"
                alt=""
                className="h-full w-full object-cover"
                aria-hidden="true"
              />
            </span>
          </div>

          <p className="mt-1 text-center text-[9px] text-ink-faint">
            {t("Pembeli tinggal scan, jumlahnya sudah terisi", "Customer just scans, the amount is already set")}
          </p>
        </div>

        {/* Bank details travel with it */}
        <div className="mt-2.5 flex items-center gap-2.5 rounded-[10px] bg-white px-3 py-2.5">
          <Landmark className="h-4 w-4 flex-none text-green" aria-hidden="true" />
          <span className="min-w-0 flex-1">
            <span className="block text-[10.5px] font-bold leading-tight text-ink">
              BCA 1234567890
            </span>
            <span className="block text-[9px] text-ink-faint">{t("a.n.", "Name:")} Warung Bejo</span>
          </span>
          <Copy className="h-3.5 w-3.5 flex-none text-ink-faint" aria-hidden="true" />
        </div>

        {/* Share */}
        <button
          type="button"
          tabIndex={-1}
          className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-[10px] bg-green py-2.5 text-[12px] font-bold text-white"
        >
          <Share2 className="h-3.5 w-3.5" aria-hidden="true" /> {t("Bagikan", "Share")}
        </button>

        <div className="mt-2 flex justify-center gap-2">
          {["WhatsApp", "Telegram", t("Lainnya", "More")].map((app) => (
            <span
              key={app}
              className="rounded-full border border-line bg-white px-2.5 py-1 text-[9px] font-semibold text-ink-soft"
            >
              {app}
            </span>
          ))}
        </div>
      </div>

      <nav className="grid grid-cols-3 border-t border-[#E6EBE4] bg-white pb-1.5 pt-2">
        {[
          { icon: Receipt, label: t("Transaksi", "Transactions") },
          { icon: QrCode, label: "QRIS", active: true },
          { icon: User, label: t("Profil", "Profile") },
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
