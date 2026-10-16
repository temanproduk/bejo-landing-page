import { Hourglass, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { t } from "@/lib/i18n";

const MAILTO =
  "mailto:moobejo@gmail.com" +
  "?subject=" +
  encodeURIComponent(t("Daftar Tunggu Iklan Suara BeJo", "BeJo Voice Ads Waitlist")) +
  "&body=" +
  encodeURIComponent(
    t(
      `Halo Tim BeJo,

Kami tertarik memasang iklan suara dan ingin masuk daftar tunggu.

Nama brand:
Nama & jabatan:
Nomor HP / email:
Daerah yang disasar:

Terima kasih.`,
      `Hi BeJo team,

We're interested in running voice ads and would like to join the waitlist.

Brand name:
Name & role:
Phone / email:
Target regions:

Thank you.`
    )
  );

/**
 * The brand dashboard is not open yet, so every campaign CTA explains the
 * waitlist instead of sending people to a page they cannot use.
 *
 * Kept controlled and rendered once per page, outside the mobile menu, so
 * closing that menu never takes the dialog down with it.
 */
export function WaitlistDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="flex items-center gap-3 bg-night px-5 py-3.5 text-white">
          <Hourglass className="h-4 w-4 flex-none text-gold" aria-hidden="true" />
          <DialogTitle className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
            {t("Daftar tunggu", "Waitlist")}
          </DialogTitle>
        </div>

        <div className="p-6">
          <p className="font-display text-2xl uppercase leading-tight">
            {t("Dashboard brand belum dibuka", "The brand dashboard isn't open yet")}
          </p>
          <DialogDescription className="mt-3 text-ink-soft">
            {t(
              "Kami masih menyiapkan tempat buat brand mengatur kampanye sendiri. Sementara ini kampanye iklan suara masih kami bantu susun langsung, satu per satu.",
              "We're still building a place for brands to run their own campaigns. For now, we set up each voice ad campaign with you directly, one at a time."
            )}
          </DialogDescription>

          <p className="mt-4 text-ink-soft">
            {t(
              "Tinggalkan datamu lewat email, nanti kami hubungi begitu dashboard-nya siap atau kalau kamu mau mulai kampanye lebih dulu.",
              "Leave your details by email and we'll reach out once the dashboard is ready, or sooner if you'd like to start a campaign now."
            )}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <Button asChild variant="solid">
              <a href={MAILTO}>
                <Mail aria-hidden="true" /> {t("Masuk daftar tunggu", "Join the waitlist")}
              </a>
            </Button>
            <DialogClose asChild>
              <Button variant="outline">{t("Nanti saja", "Maybe later")}</Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
