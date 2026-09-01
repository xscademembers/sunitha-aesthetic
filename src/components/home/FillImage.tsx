import Image from "next/image";
import { cn } from "@/lib/utils";

export function FillImage({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 1024px) 100vw, 60vw"
      className={cn("object-cover", className)}
    />
  );
}
