import { isEn } from "@/lib/i18n";

const ONES = [
  "",
  "satu",
  "dua",
  "tiga",
  "empat",
  "lima",
  "enam",
  "tujuh",
  "delapan",
  "sembilan",
];

/** Spells a value below 1000 the way Indonesian does, one word per token. */
function underThousand(n: number): string[] {
  const out: string[] = [];
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;

  if (hundreds === 1) out.push("seratus");
  else if (hundreds > 1) out.push(ONES[hundreds], "ratus");

  if (rest > 0) {
    if (rest < 10) out.push(ONES[rest]);
    else if (rest === 10) out.push("sepuluh");
    else if (rest === 11) out.push("sebelas");
    else if (rest < 20) out.push(ONES[rest - 10], "belas");
    else {
      out.push(ONES[Math.floor(rest / 10)], "puluh");
      const ones = rest % 10;
      if (ones) out.push(ONES[ones]);
    }
  }
  return out;
}

/**
 * Turns an amount into the spoken Indonesian words BeJo announces, split into
 * the same tokens the app plays as individual clips.
 */
export function amountToWords(amount: number): string[] {
  if (amount <= 0) return ["nol", "rupiah"];

  const scales: [number, string][] = [
    [1_000_000_000, "milyar"],
    [1_000_000, "juta"],
    [1_000, "ribu"],
  ];

  const words: string[] = [];
  let rest = amount;

  for (const [value, name] of scales) {
    const count = Math.floor(rest / value);
    if (count > 0) {
      // 1000 is "seribu", never "satu ribu".
      if (value === 1_000 && count === 1) words.push("seribu");
      else words.push(...underThousand(count), name);
      rest -= count * value;
    }
  }

  if (rest > 0) words.push(...underThousand(rest));
  words.push("rupiah");
  return words;
}

/** 200000 to "200.000", or "200,000" for English readers. */
export function formatRupiah(amount: number): string {
  return amount.toLocaleString(isEn ? "en-US" : "id-ID");
}
