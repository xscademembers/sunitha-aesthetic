import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({
  href = "/",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Dr. Sunita Aesthetics home"
      className={cn("relative inline-block h-[50px] w-[152px] shrink-0 overflow-hidden", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.svg"
        alt="Dr. Sunita Aesthetics"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[288%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
      />
    </Link>
  );
}
