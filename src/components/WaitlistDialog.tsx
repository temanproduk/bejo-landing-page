import { Hourglass, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const MAILTO =
  "mailto:moobejo@gmail.com" +
  "?subject=" +
  encodeURIComponent("Daftar Tunggu Iklan Suara BeJo") +
  "&body=" +
  encodeURIComponent(
    `Halo Tim BeJo,

Kami tertarik memasang iklan suara dan ingin masuk daftar tunggu.

Nama brand:
Nama & jabatan:
Nomor HP / email:
Daerah yang disasar:

Terima kasih.`
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
        <div className="flex items-center gap-3 bg-ink px-5 py-3.5 text-white">
          <Hourglass className="h-4 w-4 flex-none text-gold" aria-hidden="true" />
          <DialogTitle className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
            Daftar tunggu
          </DialogTitle>
        </div>

        <div className="p-6">
          <p className="font-display text-2xl uppercase leading-tight">
            Dashboard brand belum dibuka
          </p>
          <DialogDescription className="mt-3 text-ink-soft">
            Kami masih menyiapkan tempat buat brand mengatur kampanye sendiri.
            Sementara ini kampanye iklan suara masih kami bantu susun langsung,
            satu per satu.
          </DialogDescription>

          <p className="mt-4 text-ink-soft">
            Tinggalkan datamu lewat email, nanti kami hubungi begitu dashboard-nya
            siap atau kalau kamu mau mulai kampanye lebih dulu.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <Button asChild variant="solid">
              <a href={MAILTO}>
                <Mail aria-hidden="true" /> Masuk daftar tunggu
              </a>
            </Button>
            <DialogClose asChild>
              <Button variant="outline">Nanti saja</Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
