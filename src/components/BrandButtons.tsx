"use client";

import { cn } from "@/lib/utils";
import { ArrowCircleIcon, PhoneIcon } from "@/components/icons";
import { CONTACT } from "@/types/content";

export const OPEN_APPOINTMENT_EVENT = "open-appointment";

export function openAppointmentPopup() {
  window.dispatchEvent(new CustomEvent(OPEN_APPOINTMENT_EVENT));
}

interface GetAppointmentButtonProps {
  /** "nav" = 160x45 header variant, "default" = 203x54 body variant */
  size?: "nav" | "default";
  /** Show the circled-arrow icon (Why Choose us variant). */
  withArrow?: boolean;
  className?: string;
}

/**
 * Maroon pill "Get Appointment" button. Opens the appointment popup.
 * Hover: white bg, 2px #9E4B47 border, text #A3524B, icon tilts 2deg. (Exact site behavior.)
 */
export function GetAppointmentButton({ size = "default", withArrow = false, className }: GetAppointmentButtonProps) {
  return (
    <button
      type="button"
      onClick={openAppointmentPopup}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-[12px] border-2 border-transparent bg-maroon-btn font-sans text-[15px] font-bold text-white shadow-[0_14px_28px_-12px_rgba(161,83,78,0.55)] transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-maroon-outline hover:bg-white hover:text-maroon-hover-text active:translate-y-0",
        size === "nav" ? "h-[45px] w-[160px]" : "h-[54px] w-[203px]",
        className,
      )}
    >
      Get Appointment
      {withArrow && (
        <ArrowCircleIcon className="size-[35px] transition-transform duration-200 group-hover:rotate-2" />
      )}
    </button>
  );
}

/**
 * Dark "Call Now" button with phone icon linking to tel:.
 * Hover: white bg, 1px black border, black text/icon, icon tilts 2deg.
 */
export function CallNowButton({ className }: { className?: string }) {
  return (
    <a
      href={CONTACT.phoneHref}
      className={cn(
        "group inline-flex h-[54px] items-center justify-center gap-2.5 rounded-[12px] border border-transparent bg-black/80 px-7 font-sans text-[16px] font-bold text-white shadow-[0_14px_28px_-12px_rgba(0,0,0,0.4)] transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-black hover:bg-white hover:text-black active:translate-y-0",
        className,
      )}
    >
      <PhoneIcon className="size-[25px] transition-transform duration-200 group-hover:rotate-2" />
      Call Now
    </a>
  );
}
