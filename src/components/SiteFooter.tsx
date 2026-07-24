import type { FooterLinkGroup } from "@/types/content";

const LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: "Quick Links",
    links: [
      { label: "About Doctor", href: "/about" },
      { label: "Our Services", href: "/#services" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blogs", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Clinic Gallery", href: "#" },
      { label: "Contact us", href: "/#contact" },
      { label: "Written Testimonials", href: "/#reviews" },
    ],
  },
  {
    heading: "Procedures",
    links: [
      { label: "Blepharoplasty", href: "/services/eyelid-surgery" },
      { label: "Mommy Makeover", href: "/services/mommy-makeover" },
      { label: "Liposuction", href: "/services/liposuction" },
      {
        label: "Gynecomastia",
        href: "/services/gynecomastia-treatment-in-visakhapatnam",
      },
      { label: "Anti Wrinkle Injections", href: "/services/anti-wrinkle-injections" },
      { label: "Rhinoplasty", href: "/services/nose-surgery" },
      { label: "Morpheus8", href: "/services/morpheus8" },
    ],
  },
  {
    heading: "Treatments",
    links: [
      { label: "Aesthetics", href: "/#services" },
      { label: "Face Surgeries", href: "/#facial-procedures" },
      { label: "Hair Treatments", href: "/services/hair-treatments" },
      { label: "Laser Treatments", href: "/#laser-treatments" },
      { label: "Anti Aging", href: "/#anti-aging" },
      { label: "Trauma", href: "/#reconstructive-surgeries" },
      { label: "Body & Chest", href: "/#body-procedures" },
    ],
  },
];

function FacebookGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V13h2.7v8h3.4z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" className="fill-current stroke-none" />
    </svg>
  );
}

function YoutubeGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8l5.5 3.2Z" />
    </svg>
  );
}

function WhatsappGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M12 2.5A9.4 9.4 0 0 0 2.6 11.9c0 1.66.43 3.28 1.25 4.71L2.5 21.5l5-1.31a9.36 9.36 0 0 0 4.5 1.15h.01a9.42 9.42 0 0 0 0-18.84Zm0 17.15h-.01a7.8 7.8 0 0 1-3.97-1.09l-.28-.17-2.96.78.79-2.88-.19-.3a7.75 7.75 0 1 1 6.62 3.66Zm4.27-5.82c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.6.75-.74.91-.13.16-.27.18-.5.06a6.36 6.36 0 0 1-3.18-2.78c-.24-.41.24-.38.69-1.28.07-.16.03-.29-.03-.4-.06-.12-.52-1.26-.72-1.72-.19-.45-.38-.39-.52-.4h-.45c-.15 0-.4.06-.62.29-.21.23-.81.8-.81 1.94s.83 2.25.95 2.4c.11.16 1.63 2.5 3.96 3.5.55.24.99.38 1.32.49.56.18 1.06.15 1.46.09.45-.06 1.38-.56 1.57-1.1.2-.55.2-1.02.14-1.12-.06-.1-.21-.16-.44-.28Z" />
    </svg>
  );
}

const SOCIALS = [
  { name: "Facebook", glyph: <FacebookGlyph /> },
  { name: "Instagram", glyph: <InstagramGlyph /> },
  { name: "YouTube", glyph: <YoutubeGlyph /> },
  { name: "WhatsApp", glyph: <WhatsappGlyph /> },
];

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="grid grid-cols-1 gap-8 px-6 pb-[48px] pt-[64px] sm:grid-cols-2 lg:grid-cols-[minmax(260px,300px)_1fr_1fr_1fr] lg:gap-12 lg:px-[72px]">
        <div>
          <h3 className="font-serif text-[20px] text-black">Address</h3>
          <p className="mt-4 font-sans text-[14px] leading-[22px] text-black">
            Dr Sunita Aesthetics, TPT colony, Post office road, near MRO office, Gandhi Nagar,
            Seethammadara, Visakhapatnam, Andhra Pradesh 530013.
          </p>
          <h3 className="mt-6 font-serif text-[16px] text-black">Social Connect</h3>
          <div className="mt-3 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.name}
                className="flex size-[42px] items-center justify-center rounded-full border border-black/20 text-black transition-colors duration-200 hover:border-maroon hover:bg-maroon hover:text-white"
              >
                {s.glyph}
              </a>
            ))}
          </div>
        </div>
        {LINK_GROUPS.map((g) => (
          <div key={g.heading}>
            <h3 className="font-marcellus text-[18px] text-black">{g.heading}</h3>
            <ul className="mt-4 space-y-[10px]">
              {g.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-sans text-[14px] text-black transition-colors hover:text-maroon"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex h-[63px] items-center justify-center bg-maroon">
        <p className="font-sans text-[13px] text-white sm:text-[15px]">
          © 2025 All Rights reserved by Dr. Sunita Aesthetics
        </p>
      </div>
    </footer>
  );
}
