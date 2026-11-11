import { PhoneOutlineIcon, WhatsappIcon } from "@/components/icons";
import { CONTACT } from "@/types/content";

export function FloatingContactButtons() {
  return (
    <div
      className="pointer-events-none fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[90] flex flex-col items-center gap-3 sm:right-6 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]"
      role="group"
      aria-label="Quick contact"
    >
      <a
        href={CONTACT.phoneHref}
        aria-label={`Call ${CONTACT.phone}`}
        className="pointer-events-auto inline-flex size-14 items-center justify-center rounded-full border-[3px] border-white bg-maroon text-white shadow-[0_8px_24px_rgba(0,0,0,0.28),0_4px_12px_rgba(161,83,78,0.45)] transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon sm:size-[3.75rem]"
      >
        <PhoneOutlineIcon className="size-6 sm:size-7" />
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(0,0,0,0.22)] transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon sm:size-[3.75rem]"
      >
        <WhatsappIcon className="size-7 sm:size-8" />
      </a>
    </div>
  );
}
