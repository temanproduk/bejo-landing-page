import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Square } from "lucide-react";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { AppHomeScreen, type Entry } from "@/components/phone/AppHomeScreen";
import { amountToWords, formatRupiah } from "@/lib/rupiah";

const AMOUNTS = [15_000, 22_500, 220_000];
const ISSUERS = ["GoPay", "OVO", "Dana", "BRI"];
const WORD_MS = 300;

/**
 * The hero: a real payment lands on the app screen while the amount is spoken
 * in Indonesian, so visitors see the product and hear what it does at once.
 */
export function HeroDemo() {
  const [amount, setAmount] = useState(22_500);
  const [playing, setPlaying] = useState(false);
  const [spokenIndex, setSpokenIndex] = useState(-1);
  const [received, setReceived] = useState<Entry[]>([]);
  const timers = useRef<number[]>([]);

  const words = amountToWords(amount);

  const stop = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    window.speechSynthesis?.cancel();
    setPlaying(false);
    setSpokenIndex(-1);
  }, []);

  // Leave no timer or utterance running behind us.
  useEffect(() => stop, [stop]);

  const play = useCallback(() => {
    stop();
    setPlaying(true);

    // The payment lands on the screen the moment the announcement starts.
    setReceived((prev) =>
      [
        {
          id: Date.now(),
          amount,
          issuer: ISSUERS[prev.length % ISSUERS.length],
          fresh: true,
        },
        ...prev.map((r) => ({ ...r, fresh: false })),
      ].slice(0, 2)
    );

    words.forEach((_, i) => {
      timers.current.push(
        window.setTimeout(() => setSpokenIndex(i), i * WORD_MS)
      );
    });
    timers.current.push(
      window.setTimeout(() => {
        setPlaying(false);
        setSpokenIndex(-1);
      }, words.length * WORD_MS + 400)
    );

    const synth = window.speechSynthesis;
    if (!synth) return;
    const utterance = new SpeechSynthesisUtterance(words.join(" "));
    utterance.lang = "id-ID";
    utterance.rate = 0.95;
    const voice = synth
      .getVoices()
      .find((v) => v.lang === "id-ID" || v.lang.startsWith("id"));
    if (voice) utterance.voice = voice;
    synth.speak(utterance);
  }, [amount, words, stop]);

  return (
    <div className="flex flex-col items-center">
      <PhoneFrame className="w-[250px] shrink-0">
        <AppHomeScreen incoming={received} announcing={playing} />
      </PhoneFrame>

      {/* Try-it control, docked under the device */}
      <div className="mt-4 w-full max-w-[360px] border border-line-strong bg-white">
        <p className="border-b border-line px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">
          Coba dengar sendiri
        </p>

        <div className="p-3">
          <div className="flex flex-wrap gap-1.5" aria-live="polite">
            {words.map((w, i) => (
              <span
                key={`${w}-${i}`}
                className={`border px-2 py-0.5 font-mono text-[11.5px] transition-colors duration-150 ${
                  playing && i <= spokenIndex
                    ? "border-green bg-green text-white"
                    : "border-line bg-paper text-ink-soft"
                }`}
              >
                {w}
              </span>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={playing ? stop : play}
              className="inline-flex items-center gap-2 rounded-control bg-green px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-green-dark"
            >
              {playing ? (
                <>
                  <Square className="h-3.5 w-3.5" aria-hidden="true" /> Stop
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" aria-hidden="true" /> Bunyikan
                </>
              )}
            </button>

            <div className="flex flex-wrap gap-1.5">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => {
                    stop();
                    setAmount(a);
                  }}
                  className={`tnum rounded-control border px-2 py-1 font-mono text-[11px] transition-colors ${
                    a === amount
                      ? "border-ink bg-ink text-white"
                      : "border-line-strong text-ink-soft hover:border-ink hover:text-ink"
                  }`}
                >
                  {formatRupiah(a)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
