import { AutoGallery, type AutoGalleryImage } from "@/components/AutoGallery";

const SERVICES: AutoGalleryImage[] = [
  { src: "/images/services/service-surgical.webp", alt: "Surgical procedures", label: "Surgical procedures" },
  { src: "/images/services/service-breast.webp", alt: "Breast surgeries", label: "Breast surgeries" },
  { src: "/images/services/service-gynecomastia.webp", alt: "Gynecomastia (male chest) surgery", label: "Gynecomastia (Men's Chest)" },
  { src: "/images/services/service-hair.webp", alt: "Hair treatments", label: "Hair treatments" },
  { src: "/images/services/service-facial.webp", alt: "Facial procedures", label: "Facial procedures" },
  { src: "/images/services/service-nonsurgical.webp", alt: "Non-surgical treatments", label: "Non-surgical treatments" },
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
