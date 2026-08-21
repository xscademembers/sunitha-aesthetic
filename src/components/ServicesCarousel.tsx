import { AutoGallery, type AutoGalleryImage } from "@/components/AutoGallery";

const SERVICES: AutoGalleryImage[] = [
  { src: "/images/services/service-facial.webp", alt: "Face surgery", label: "Face Surgery" },
  { src: "/images/services/service-breast.webp", alt: "Breast surgery", label: "Breast Surgery" },
  { src: "/images/services/service-surgical.webp", alt: "Body contouring surgery", label: "Body Contouring" },
  { src: "/images/services/service-gynecomastia.webp", alt: "Men's cosmetic surgery", label: "Men's Cosmetic Surgery" },
  { src: "/images/services/service-hair.webp", alt: "Hair surgery and treatments", label: "Hair Surgery & Treatments" },
  { src: "/images/services/service-nonsurgical.webp", alt: "Non-surgical treatments", label: "Non-Surgical Treatments" },
];

export function ServicesCarousel() {
  return (
    <section id="services" className="bg-belt py-6">
      <p className="text-center font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
        OUR SERVICES
      </p>
      <h2 className="text-center font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
        Services We Offer
      </h2>
      <AutoGallery
        images={SERVICES}
        cell={207}
        gap={32}
        radius={10}
        arrows="right"
        className="mt-10"
      />
    </section>
  );
}
