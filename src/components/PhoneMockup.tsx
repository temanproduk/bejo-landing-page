import { Mic } from "lucide-react";

const txs = [
  { amt: "Rp 200.000", meta: "Baru aja · QRIS", badge: "GoPay" },
  { amt: "Rp 45.000", meta: "2 menit lalu · QRIS", badge: "Dana" },
  { amt: "Rp 128.500", meta: "5 menit lalu · QRIS", badge: "BCA" },
  { amt: "Rp 15.000", meta: "Tunai · Dicatat", badge: "Manual" },
];

/** Decorative gold coin with an "Rp" face. */
function Coin({ className }: { className?: string }) {
  return (
    <div
      className={
        "flex items-center justify-center rounded-full font-extrabold text-[#7a5410] " +
        "bg-[radial-gradient(circle_at_34%_30%,#f6d47f,hsl(var(--amber))_55%,hsl(var(--amber-dark)))] " +
        "shadow-[0_12px_30px_rgba(196,136,28,0.4),inset_0_2px_6px_rgba(255,255,255,0.6)] " +
        (className || "")
      }
    >
      Rp
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[480px] w-full max-w-[420px] md:h-[560px]">
      {/* Floating coins */}
      <Coin
        className="absolute left-1 top-8 z-[1] h-16 w-16 text-lg md:h-[74px] md:w-[74px] md:text-xl"
      />
      <div data-parallax="0.55" className="absolute right-8 top-28 z-[1]">
        <Coin className="h-10 w-10 text-xs" />
      </div>
      <div
        data-parallax="0.42"
        className="absolute bottom-20 right-2 z-[3]"
      >
        <Coin className="h-12 w-12 text-sm md:h-[52px] md:w-[52px]" />
      </div>

      {/* Phone */}
      <div
        data-parallax="0.06"
        className="absolute left-1/2 top-1/2 z-[2] h-[520px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-[42px] bg-gradient-to-b from-white to-[#eef4ee] p-3 shadow-big md:h-[600px] md:w-[290px]"
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[32px] bg-background">
          <div className="absolute left-1/2 top-3 z-[5] h-5 w-24 -translate-x-1/2 rounded-full bg-[#10201a]" />
          <div className="bg-gradient-to-br from-primary to-primary-dark px-5 pb-5 pt-10 text-white">
            <div className="text-[11px] uppercase tracking-[0.08em] opacity-85">
              Masuk Hari Ini
            </div>
            <div className="mt-1 text-3xl font-extrabold">Rp 2.480.000</div>
            <div className="mt-0.5 text-xs opacity-90">18 transaksi · naik 12% dari kemarin</div>
          </div>
          <div className="flex flex-col gap-2.5 p-3.5">
            {txs.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-2xl bg-card p-3 shadow-soft"
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-amber to-amber-dark text-lg shadow-[0_4px_10px_rgba(224,163,46,0.35)]">
                  🪙
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[15px] font-extrabold">{t.amt}</div>
                  <div className="text-[11px] text-muted-foreground">{t.meta}</div>
                </div>
                <div className="flex-none rounded-md bg-mint px-2 py-1 text-[9px] font-bold text-primary-deep">
                  {t.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Voice bubble */}
      <div
        data-parallax="0.28"
        className="absolute right-0 top-6 z-[4] flex max-w-[210px] items-center gap-3 rounded-[18px] rounded-bl-md bg-card p-3 shadow-card"
      >
        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white">
          <Mic className="h-4 w-4" />
        </div>
        <div className="text-[12.5px] leading-snug">
          <b className="text-primary">"Dua ratus ribu rupiah"</b>
          <span className="ml-1 inline-flex h-3 items-end gap-[2px] align-middle">
            <i className="w-[2.5px] animate-eq rounded bg-primary [height:5px] [animation-delay:0s]" />
            <i className="w-[2.5px] animate-eq rounded bg-primary [height:11px] [animation-delay:0.15s]" />
            <i className="w-[2.5px] animate-eq rounded bg-primary [height:7px] [animation-delay:0.3s]" />
            <i className="w-[2.5px] animate-eq rounded bg-primary [height:12px] [animation-delay:0.45s]" />
          </span>
        </div>
      </div>
    </div>
  );
}
