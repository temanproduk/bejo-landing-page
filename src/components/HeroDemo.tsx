import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, Play, Square } from "lucide-react";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { AppHomeScreen, type Entry } from "@/components/phone/AppHomeScreen";
import { amountToWords, formatRupiah } from "@/lib/rupiah";
import { t } from "@/lib/i18n";

const AMOUNTS = [15_000, 20_500, 220_000];
const ISSUERS = ["GoPay", "OVO", "Dana", "BRI"];
const WORD_MS = 300;

/**
 * An announcement is a sound pack followed by the amount. Swapping the pack is
 * what turns a plain notice into a sound a warung gets known for, so visitors
 * get to hear the difference rather than read about it.
 *
 * The spoken words stay Indonesian on every page: that is what the app says.
 */
const PACKS = [
  {
    label: t("Jingle warung", "Warung jingle"),
    intro: ["Warung", "Bejo", "rezeki", "datang"],
    note: t(
      "Nada khas warungmu. Pembeli hafal, lalu cerita ke temannya.",
      "Your warung's signature tune. Customers remember it and tell their friends."
    ),
  },
  {
    label: t("Suara kamu", "Your voice"),
    intro: ["Hei", "bos", "uang", "masuk"],
    note: t(
      "Rekam suaramu sendiri, simpan jadi paket suara.",
      "Record your own voice and save it as a sound pack."
    ),
  },
  {
    label: t("Suara asli", "Plain voice"),
    intro: [],
    note: t(
      "Cuma nominalnya. Jelas, cepat, tanpa basa-basi.",
      "Just the amount. Clear, quick, no frills."
    ),
  },
];

/**
 * The hero: a real payment lands on the app screen while the amount is spoken
 * in Indonesian, so visitors see the product and hear what it does at once.
 */
export function HeroDemo() {
  const [amount, setAmount] = useState(20_500);
  const [packIndex, setPackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [spokenIndex, setSpokenIndex] = useState(-1);
  const [received, setReceived] = useState<Entry[]>([]);
  const timers = useRef<number[]>([]);

  const pack = PACKS[packIndex];
  const words = [...pack.intro, ...amountToWords(amount)];

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
      <div className="relative w-[250px]">
        <PhoneFrame className="w-[250px] shrink-0">
          <AppHomeScreen
            incoming={received}
            announcing={playing}
            soundLabel={pack.label}
          />
        </PhoneFrame>

        {/* A shop with a sound of its own gets talked about. Pinned across the
            foot of the device like a note stuck on the counter, kept inside the
            phone's own width so it never crowds the headline column. */}
        <figure
          className={`absolute -bottom-6 left-1/2 z-10 w-[236px] -translate-x-1/2 -rotate-1 border bg-white p-2.5 shadow-lift transition-colors duration-300 ${
            playing ? "border-gold" : "border-line-strong"
          }`}
        >
          <figcaption className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-ink-faint">
            <MessageCircle className="h-3 w-3 text-gold-dark" aria-hidden="true" />
            {t("Pembeli", "Customer")}
          </figcaption>
          <p className="mt-1 text-[12.5px] font-bold leading-snug text-ink">
            &ldquo;{t("Suaranya lucu! Rekam ah, buat story.", "That sound is so fun! Gotta record it for my story.")}&rdquo;
          </p>
        </figure>
      </div>

      {/* Try-it control, clear of the note pinned to the device */}
      <div className="mt-10 w-full max-w-[360px] border border-line-strong bg-white">
        <p className="border-b border-line px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">
          {t("Coba dengar sendiri", "Hear it yourself · in Indonesian")}
        </p>

        <div className="p-3">
          <div className="flex flex-wrap gap-1.5" aria-live="polite">
            {words.map((w, i) => {
              const spoken = playing && i <= spokenIndex;
              // The jingle reads gold, the amount green: two halves of one
              // announcement, told apart while it plays.
              const tone = spoken
                ? i < pack.intro.length
                  ? "border-gold bg-gold text-ink"
                  : "border-green bg-green text-white"
                : "border-line bg-paper text-ink-soft";
              return (
                <span
                  key={`${w}-${i}`}
                  className={`border px-2 py-0.5 font-mono text-[11.5px] transition-colors duration-150 ${tone}`}
                >
                  {w}
                </span>
              );
            })}
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
                  <Play className="h-3.5 w-3.5" aria-hidden="true" /> {t("Bunyikan", "Play")}
                </>
              )}
            </button>

            <div className="flex flex-wrap gap-1.5">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  aria-pressed={a === amount}
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

        <div className="border-t border-line p-3">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">
            {t("Ganti suaranya", "Change the voice")}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {PACKS.map((p, i) => (
              <button
                key={p.label}
                type="button"
                aria-pressed={i === packIndex}
                onClick={() => {
                  stop();
                  setPackIndex(i);
                }}
                className={`rounded-control border px-2.5 py-1 font-mono text-[11px] transition-colors ${
                  i === packIndex
                    ? "border-green bg-mint text-green-deep"
                    : "border-line-strong text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[12px] leading-snug text-ink-soft">
            {pack.note}
          </p>
        </div>
      </div>
    </div>
  );
}
