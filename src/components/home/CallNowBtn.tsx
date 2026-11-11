import { CALL_LABEL, HOME_CONTACT } from "@/data/homeContent";
import { cn } from "@/lib/utils";

/** Neo-styled "Call Now" link — pair with Book buttons across the site. */
export function CallNowBtn({ className }: { className?: string }) {
  return (
    <a href={HOME_CONTACT.phoneHref} className={cn("neo-btn sm:!w-auto", className)}>
      {CALL_LABEL}
    </a>
  );
}
