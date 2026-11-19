import { MailIcon, PhoneOutlineIcon } from "@/components/icons";
import { CONTACT } from "@/types/content";

export function TopContactBar() {
  return (
    <div className="bg-maroon text-white" role="region" aria-label="Contact">
      <div className="home-wrap flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-1.5 sm:justify-between sm:gap-x-6 sm:py-2.5">
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex min-h-8 max-w-full items-center gap-1.5 font-ui text-[11px] text-white/95 transition-opacity hover:text-white sm:min-h-9 sm:gap-2 sm:text-[13px]"
        >
          <MailIcon className="size-3.5 shrink-0 sm:size-4" />
          <span className="truncate">{CONTACT.email}</span>
        </a>
        <a
          href={CONTACT.phoneHref}
          className="inline-flex min-h-8 shrink-0 items-center gap-1.5 font-ui text-[11px] text-white/95 transition-opacity hover:text-white sm:min-h-9 sm:gap-2 sm:text-[13px]"
        >
          <PhoneOutlineIcon className="size-3.5 shrink-0 sm:size-4" />
          <span>{CONTACT.phone}</span>
        </a>
      </div>
    </div>
  );
}
