import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneOutlineIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "@/components/icons";
import { VIDEO_PLAYLIST_URL } from "@/data/homeContent";
import { CONTACT } from "@/types/content";

const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/drsunita_aesthetics/", Icon: InstagramIcon },
  { name: "Facebook", href: "https://www.facebook.com/SunitaAesthetics", Icon: FacebookIcon },
  { name: "YouTube", href: VIDEO_PLAYLIST_URL, Icon: YoutubeIcon },
  { name: "WhatsApp", href: CONTACT.whatsappHref, Icon: WhatsappIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dr-sunita-ghanta-47581681", Icon: LinkedInIcon },
] as const;

export function TopContactBar() {
  return (
    <div className="bg-maroon text-white" role="region" aria-label="Contact and social">
      <div className="home-wrap flex items-center justify-between gap-3 py-2 sm:py-2.5">
        <div className="flex min-w-0 items-center gap-3 sm:gap-6">
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex min-h-9 max-w-[46vw] items-center gap-2 font-ui text-[12px] text-white/95 transition-opacity hover:text-white hover:opacity-100 sm:max-w-none sm:text-[13px]"
          >
            <MailIcon className="size-3.5 shrink-0 sm:size-4" />
            <span className="truncate">{CONTACT.email}</span>
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex min-h-9 shrink-0 items-center gap-2 font-ui text-[12px] text-white/95 transition-opacity hover:text-white sm:text-[13px]"
          >
            <PhoneOutlineIcon className="size-3.5 shrink-0 sm:size-4" />
            <span>{CONTACT.phone}</span>
          </a>
        </div>

        <nav className="flex shrink-0 items-center gap-2.5 sm:gap-3.5" aria-label="Social">
          {SOCIAL_LINKS.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="inline-flex size-8 items-center justify-center text-white/95 transition-opacity hover:text-white sm:size-auto"
            >
              <Icon className="size-3.5 sm:size-4" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
