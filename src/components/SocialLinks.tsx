import { FacebookIcon, InstagramIcon, WhatsappIcon, YoutubeIcon } from "@/components/icons";
import { VIDEO_PLAYLIST_URL } from "@/data/homeContent";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/types/content";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/SunitaAesthetics", Icon: FacebookIcon },
  { name: "Instagram", href: "https://www.instagram.com/drsunita_aesthetics/", Icon: InstagramIcon },
  { name: "YouTube", href: VIDEO_PLAYLIST_URL, Icon: YoutubeIcon },
  { name: "WhatsApp", href: CONTACT.whatsappHref, Icon: WhatsappIcon },
] as const;

export function SocialLinks({
  className,
  itemClassName,
}: {
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={cn("flex gap-3", className)}>
      {SOCIAL_LINKS.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={itemClassName}
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
