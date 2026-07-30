import { Signal, Wifi, BatteryFull } from "lucide-react";

/**
 * A physical device shell. Real bezel and status bar so the screen inside
 * reads as an actual phone rather than a styled web card.
 */
export function PhoneFrame({
  children,
  time = "08.15",
  className = "",
}: {
  children: React.ReactNode;
  time?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[34px] bg-ink p-[9px] shadow-[0_28px_60px_-24px_rgba(10,23,16,0.55)] ${className}`}
    >
      {/* side button */}
      <span
        className="absolute -right-[2px] top-[132px] h-14 w-[3px] rounded-r bg-ink/80"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-[26px] bg-paper">
        {/* status bar */}
        <div className="relative z-10 flex items-center justify-between bg-green-deep px-4 pb-1 pt-2 text-[10px] font-semibold text-white/90">
          <span className="tnum">{time}</span>
          <span className="flex items-center gap-1" aria-hidden="true">
            <Signal className="h-3 w-3" />
            <Wifi className="h-3 w-3" />
            <BatteryFull className="h-3 w-3" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
