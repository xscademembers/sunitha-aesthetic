import type { FooterLinkGroup } from "@/types/content";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";

const LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Doctor", href: "/about" },
      { label: "Our Services", href: "/#services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blogs", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Clinic Gallery", href: "#" },
      { label: "Contact us", href: "/contact" },
      { label: "Google Reviews", href: "/reviews" },
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
      { label: "Face Surgery", href: "/#face-surgery" },
      { label: "Breast Surgery", href: "/#breast-surgery" },
      { label: "Body Contouring", href: "/#body-contouring-surgery" },
      { label: "Hair Treatments", href: "/#hair-treatments" },
      { label: "Laser Treatments", href: "/#laser-treatments" },
      { label: "Injectables", href: "/#injectables" },
      { label: "Reconstructive Surgery", href: "/#reconstructive-surgery" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="grid grid-cols-1 gap-8 px-6 pb-[48px] pt-[64px] sm:grid-cols-2 lg:grid-cols-[minmax(260px,300px)_1fr_1fr_1fr] lg:gap-12 lg:px-[72px]">
        <div>
          <BrandLogo className="h-[52px] w-[158px]" />
          <h3 className="mt-6 font-serif text-[20px] text-black">Address</h3>
          <p className="mt-4 font-sans text-[14px] leading-[22px] text-black">
            Dr Sunita Aesthetics, TPT colony, Post office road, near MRO office, Gandhi Nagar,
            Seethammadara, Visakhapatnam, Andhra Pradesh 530013.
          </p>
          <h3 className="mt-6 font-serif text-[16px] text-black">Social Connect</h3>
          <SocialLinks
            className="mt-3"
            itemClassName="flex size-[42px] items-center justify-center rounded-full border border-black/20 text-black transition-colors duration-200 hover:border-maroon hover:bg-maroon hover:text-white"
          />
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
          © 2026 All Rights reserved by Dr. Sunita Aesthetics
        </p>
      </div>
    </footer>
  );
}
