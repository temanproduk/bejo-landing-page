import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Square, Volume2 } from "lucide-react";
import { amountToWords, formatRupiah } from "@/lib/rupiah";

const AMOUNTS = [15_000, 45_000, 200_000, 1_250_000];
const WORD_MS = 300;

/**
 * The hero centrepiece: shows how BeJo turns an incoming amount into spoken
 * Indonesian, and actually says it out loud using the device's own voice.
 */
export function VoiceDemo() {
  const [amount, setAmount] = useState(200_000);
  const [spokenIndex, setSpokenIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const timers = useRef<number[]>([]);

  const words = amountToWords(amount);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const stop = useCallback(() => {
    clearTimers();
    window.speechSynthesis?.cancel();
    setPlaying(false);
    setSpokenIndex(-1);
  }, [clearTimers]);

  // Never leave a running utterance or timer behind.
  useEffect(() => stop, [stop]);

  const play = useCallback(() => {
    stop();
    setPlaying(true);

    // Light each word in turn so the announcement is legible as well as audible.
    words.forEach((_, i) => {
      timers.current.push(
        window.setTimeout(() => setSpokenIndex(i), i * WORD_MS)
      );
    });
    timers.current.push(
      window.setTimeout(() => {
        setPlaying(false);
        setSpokenIndex(-1);
      }, words.length * WORD_MS + 350)
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
  }, [words, stop]);

  return (
    <div className="border border-line-strong bg-white">
      {/* Register header */}
      <div className="flex items-center justify-between border-b border-line bg-green-deep px-4 py-2.5 text-white">
        <span className="eyebrow flex items-center gap-2">
          <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
          Coba dengar sendiri
        </span>
        <span className="eyebrow text-white/60">BeJo</span>
      </div>

      <div className="p-5 sm:p-7">
        {/* Amount */}
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-lg text-ink-faint">Rp</span>
          <span className="tnum font-display text-[clamp(2.6rem,7vw,3.8rem)] text-ink">
            {formatRupiah(amount)}
          </span>
        </div>
        <p className="eyebrow mt-1 text-ink-faint">Pembayaran masuk</p>

        {/* Spoken words */}
        <div
          className="mt-6 flex min-h-[3.5rem] flex-wrap content-start gap-1.5"
          aria-live="polite"
        >
          {words.map((w, i) => (
            <span
              key={`${w}-${i}`}
              className={[
                "border px-2.5 py-1 font-mono text-[13px] transition-colors duration-150",
                i <= spokenIndex && playing
                  ? "border-green bg-green text-white"
                  : "border-line bg-paper text-ink-soft",
              ].join(" ")}
            >
              {w}
            </span>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
          <button
            type="button"
            onClick={playing ? stop : play}
            className="inline-flex items-center gap-2 rounded-control bg-green px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-dark"
          >
            {playing ? (
              <>
                <Square className="h-4 w-4" aria-hidden="true" /> Stop
              </>
            ) : (
              <>
                <Play className="h-4 w-4" aria-hidden="true" /> Bunyikan
              </>
            )}
          </button>

          {/* Level bars, alive only while speaking */}
          <div className="flex h-7 items-end gap-[3px]" aria-hidden="true">
            {[9, 20, 13, 26, 16, 22, 10].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }}
                className={
                  playing
                    ? "w-[3px] origin-bottom animate-bar bg-gold"
                    : "w-[3px] origin-bottom bg-line-strong"
                }
              />
            ))}
          </div>

          <span className="ml-auto hidden text-xs text-ink-faint sm:block">
            {playing ? "Sedang bunyi" : "Pakai suara HP kamu"}
          </span>
        </div>

        {/* Amount picker */}
        <div className="mt-5 flex flex-wrap gap-2">
          {AMOUNTS.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => {
                stop();
                setAmount(a);
              }}
              className={[
                "tnum rounded-control border px-3 py-1.5 font-mono text-[13px] transition-colors",
                a === amount
                  ? "border-ink bg-ink text-white"
                  : "border-line-strong text-ink-soft hover:border-ink hover:text-ink",
              ].join(" ")}
            >
              {formatRupiah(a)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
