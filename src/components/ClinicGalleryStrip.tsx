import { AutoGallery } from "@/components/AutoGallery";
import { CLINIC_IMAGES } from "@/components/HeroSection";

export function ClinicGalleryStrip() {
  return (
    <section className="bg-white py-[72px]">
      <AutoGallery images={CLINIC_IMAGES} cell={187} gap={32} radius={10} arrows="right" />
    </section>
  );
}
