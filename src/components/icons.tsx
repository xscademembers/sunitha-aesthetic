import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Thin chevron used by gallery prev/next arrows (points right; scaleX(-1) for left). */
export function GalleryChevronIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 23 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M857.005,231.479L858.5,230l18.124,18-18.127,18-1.49-1.48L873.638,248Z"
        transform="translate(-855 -230)"
      />
    </svg>
  );
}

/** Long arrow (points right by default) — testimonial up/down arrows rotate it. */
export function LongArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z" />
    </svg>
  );
}

/** Arrow inside circle outline — Why Choose us "Get Appointment" button icon. */
export function ArrowCircleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M100 29.5c-38.874 0-70.5 31.626-70.5 70.5s31.626 70.5 70.5 70.5 70.5-31.626 70.5-70.5-31.626-70.5-70.5-70.5zm0 133c-34.463 0-62.5-28.037-62.5-62.5S65.537 37.5 100 37.5s62.5 28.037 62.5 62.5-28.037 62.5-62.5 62.5zm30.09-60.584c-.055.101-.099.205-.164.302a3.99 3.99 0 0 1-.501.613l-26.597 26.597c-.78.781-1.805 1.172-2.828 1.172s-2.048-.391-2.828-1.172a4 4 0 0 1 0-5.656L116.943 104H73.4a4 4 0 0 1 0-8h43.542l-19.77-19.771a4 4 0 1 1 5.656-5.656l26.597 26.597c.187.187.354.392.501.613.065.097.109.201.164.302.07.127.147.25.203.386.055.132.086.27.126.405.034.114.078.223.101.341.103.517.103 1.05 0 1.566-.023.118-.068.227-.101.341-.04.136-.071.273-.126.405-.055.136-.132.259-.203.387z" />
    </svg>
  );
}

/** Small chevron-down (nav dropdown / select). */
export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 9.2828 4.89817" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z" />
    </svg>
  );
}

/** Hamburger menu (mobile). */
export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M156 64v6H44v-6h112z" />
      <path d="M156 97v6H44v-6h112z" />
      <path d="M156 130v6H44v-6h112z" />
    </svg>
  );
}

/** Close X. */
export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        d="M166.333 38.892 160.442 33 99.667 93.775 38.892 33 33 38.892l60.775 60.775L33 160.442l5.892 5.891 60.775-60.775 60.775 60.775 5.891-5.891-60.775-60.775 60.775-60.775Z"
      />
    </svg>
  );
}

/** Rating star — pass className="text-maroon". */
export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="20 20 160 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M179.74 84.475c-.755-2.494-3.385-5.456-11.611-5.456h-28.983c-8.779 0-18.491-7.989-21.22-17.446l-8.948-30.908C106.938 23.584 103.924 20 100.011 20s-6.932 3.584-8.967 10.659l-8.955 30.925C79.368 71.03 69.652 79.02 60.873 79.02H31.894c-8.219 0-10.859 2.979-11.627 5.479-.791 2.572-.205 6.693 7.067 11.622l21.678 14.89c7.546 5.127 11.354 17.423 8.314 26.851l-7.74 24.045c-1.914 5.922-1.905 10.268.02 12.909 2.63 3.61 7.815 3.317 14.071-1.69l23.209-18.588c6.833-5.479 19.14-5.241 25.816.476l23.918 20.487c3.536 3.034 6.536 4.505 9.176 4.499 1.973 0 3.681-.84 4.814-2.37 1.934-2.611 1.979-6.8.146-12.807l-8.342-27.34c-2.901-9.506 1.055-21.837 8.638-26.926l21.555-14.523c7.309-4.911 7.915-8.997 7.133-11.559z" />
    </svg>
  );
}

/* ---------- Brand iconography (monotone: uses currentColor to stay in palette) ---------- */

const GOLD = "currentColor";

/** Globe with sparkle — "World-class surgery". */
export function SparkGlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="11" cy="13" r="7.5" />
      <ellipse cx="11" cy="13" rx="3.2" ry="7.5" />
      <path d="M4.4 10h13.2M4.4 16h13.2" />
      <path d="M19.5 1.8l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9z" fill={GOLD} stroke="none" />
    </svg>
  );
}

/** Rosette seal with check — "Board certified". */
export function CertifiedBadgeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="9.5" r="6.5" />
      <circle cx="12" cy="9.5" r="4.1" strokeDasharray="1.9 2.3" strokeWidth="1.1" />
      <path d="M9 21.5l1.6-4.9M15 21.5l-1.6-4.9" />
      <path d="M9 21.5l2.1-1 .9 1.5.9-1.5 2.1 1" strokeWidth="1.1" />
      <path d="M10.1 9.6l1.5 1.5 2.6-2.9" stroke={GOLD} strokeWidth="1.7" />
    </svg>
  );
}

/** Rising trend line with gold data points — "Track record". */
export function TrendUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3.5 4.5v15h17" />
      <path d="M6.5 15.5l4-4.5 3 2.5 5.6-6.5" />
      <path d="M15.8 7h3.4v3.4" />
      <circle cx="6.5" cy="15.5" r="1" fill={GOLD} stroke="none" />
      <circle cx="10.5" cy="11" r="1" fill={GOLD} stroke="none" />
      <circle cx="13.5" cy="13.5" r="1" fill={GOLD} stroke="none" />
    </svg>
  );
}

/** Heart with gold pulse — "Personalised care". */
export function CareHeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 20.4l-6.8-6.5C3 11.7 2.6 8.5 4.6 6.6c1.9-1.9 5-1.6 6.6.4l.8 1 .8-1c1.6-2 4.7-2.3 6.6-.4 2 1.9 1.6 5.1-.6 7.3L12 20.4z" />
      <path d="M6.5 12h2.6l1.4-2.6 1.9 4.6 1.6-3 .9 1h2.6" stroke={GOLD} strokeWidth="1.4" />
    </svg>
  );
}

/** Calendar with gold check — journey step "Book an Appointment". */
export function CalendarCheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M8 2.8v4M16 2.8v4M3.5 9.8h17" />
      <path d="M9 14.7l2.2 2.2 3.9-4.3" stroke={GOLD} strokeWidth="1.7" />
    </svg>
  );
}

/** Clipboard with magnifier — journey step "Get Assessment". */
export function AssessmentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15.5 5h.5a2 2 0 0 1 2 2v1.5M8.5 5H8a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h4" />
      <rect x="8.5" y="3" width="7" height="3.6" rx="1.2" />
      <path d="M9 11h6M9 14.2h3.5" />
      <circle cx="16.3" cy="16.3" r="3.1" />
      <path d="M18.6 18.6l2.4 2.4" stroke={GOLD} strokeWidth="1.7" />
    </svg>
  );
}

/** Branching path — journey step "Know Treatment Options". */
export function OptionsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 21.2v-5.7" />
      <path d="M12 15.5c0-2.8-5-2.2-5-5.5V8.6M12 15.5c0-2.8 5-2.2 5-5.5V8.6M12 15.5V8.6" />
      <circle cx="7" cy="6.7" r="1.7" />
      <circle cx="17" cy="6.7" r="1.7" />
      <circle cx="12" cy="6.7" r="1.7" fill={GOLD} stroke={GOLD} />
    </svg>
  );
}

/** Lotus bloom with sparkles — journey step "Enjoy the Transformation". */
export function BloomIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 4.8c1.8 2 2.7 4.1 2.7 6.2 0 2.1-1.2 3.9-2.7 4.8-1.5-.9-2.7-2.7-2.7-4.8 0-2.1.9-4.2 2.7-6.2z" />
      <path d="M4.8 9.4c2.5.4 4.5 1.6 5.6 3.3 1 1.5 1.2 3.1.7 4.5-2.4-.2-4.4-1.3-5.6-3-1-1.6-1.2-3.3-.7-4.8z" />
      <path d="M19.2 9.4c-2.5.4-4.5 1.6-5.6 3.3-1 1.5-1.2 3.1-.7 4.5 2.4-.2 4.4-1.3 5.6-3 1-1.6 1.2-3.3.7-4.8z" />
      <path d="M6.6 19.6c1.7 1 3.5 1.5 5.4 1.5s3.7-.5 5.4-1.5" />
      <path d="M19.6 2.4l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z" fill={GOLD} stroke="none" />
      <circle cx="4.4" cy="4.6" r=".9" fill={GOLD} stroke="none" />
    </svg>
  );
}

/** Decorative double quotation mark for testimonial panels. */
export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.4 5.4C6.1 7.3 4.3 9.9 4.3 13c0 2.9 1.8 4.8 4.1 4.8 2.1 0 3.6-1.5 3.6-3.5 0-1.9-1.4-3.3-3.2-3.3-.3 0-.6 0-.9.1.4-1.8 1.6-3.5 3.2-4.6L9.4 5.4zM18 5.4c-3.3 1.9-5.1 4.5-5.1 7.6 0 2.9 1.8 4.8 4.1 4.8 2.1 0 3.6-1.5 3.6-3.5 0-1.9-1.4-3.3-3.2-3.3-.3 0-.6 0-.9.1.4-1.8 1.6-3.5 3.2-4.6L18 5.4z" />
    </svg>
  );
}

/** Handset phone icon with signal waves used on "Call Now" buttons. */
export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M151.569 118.788a80.618 80.618 0 0 1-17.694-4.429c-6.259-2.364-13.376-.839-18.149 3.903l-6.221 6.252A102.071 102.071 0 0 1 75.47 90.318l6.23-6.26c4.706-4.783 6.225-11.942 3.873-18.23a81.74 81.74 0 0 1-4.414-17.823c-1.196-8.502-8.498-14.864-16.985-14.864l-.168.001H44.173c-.509 0-1.024.024-1.529.07-4.572.415-8.711 2.595-11.653 6.139-2.943 3.546-4.337 8.031-3.917 12.694 2.225 21.051 9.455 41.57 20.891 59.308 10.391 16.434 24.527 30.639 40.848 41.06 17.597 11.468 37.919 18.733 58.844 21.017.515.046 1.036.069 1.553.069h.06c9.478-.039 17.159-7.823 17.121-17.337v-19.879c.191-8.752-6.159-16.267-14.822-17.495zm6.878 17.449v19.941c.02 5.119-4.111 9.3-9.206 9.321a6.703 6.703 0 0 1-.801-.03c-19.623-2.143-38.748-8.98-55.339-19.792-15.374-9.816-28.664-23.171-38.451-38.65C43.872 90.31 37.069 71.005 34.982 51.261a9.253 9.253 0 0 1 2.107-6.779 9.172 9.172 0 0 1 6.271-3.302c.274-.025.549-.038.819-.038h19.958c4.586 0 8.512 3.417 9.149 7.948a89.818 89.818 0 0 0 4.848 19.549c1.264 3.379.448 7.222-2.063 9.773l-8.394 8.435a4.02 4.02 0 0 0-.645 4.811 110.047 110.047 0 0 0 41.147 41.349 3.951 3.951 0 0 0 4.768-.648l8.377-8.419a9.247 9.247 0 0 1 9.768-2.087 88.512 88.512 0 0 0 19.405 4.862c4.649.659 8.067 4.71 7.951 9.423l-.001.099zm-42.722-75.244c-2.153-.422-3.56-2.522-3.14-4.691.418-2.168 2.501-3.587 4.659-3.162 14.866 2.915 26.346 14.453 29.247 29.394.421 2.168-.984 4.269-3.137 4.693a3.937 3.937 0 0 1-.766.075 3.981 3.981 0 0 1-3.895-3.234c-2.278-11.728-11.293-20.786-22.968-23.075zm53.748 26.218a3.983 3.983 0 0 1-4.392-3.528c-2.917-26.076-23.08-46.31-49.034-49.208-2.181-.244-3.753-2.221-3.511-4.416.242-2.196 2.207-3.781 4.386-3.535 29.67 3.312 52.721 26.449 56.055 56.263.245 2.196-1.324 4.176-3.504 4.424z" />
    </svg>
  );
}
