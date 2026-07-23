import { AppointmentPopup } from "@/components/AppointmentPopup";
import { ClinicGalleryStrip } from "@/components/ClinicGalleryStrip";
import { ContactSection } from "@/components/ContactSection";
import { Disclaimer } from "@/components/Disclaimer";
import { HeroSection } from "@/components/HeroSection";
import { JourneySteps } from "@/components/JourneySteps";
import { MeetTheDoctor } from "@/components/MeetTheDoctor";
import { PatientDocumentaries } from "@/components/PatientDocumentaries";
import { ProcedureSection } from "@/components/ProcedureSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StatsBar } from "@/components/StatsBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PROCEDURE_SECTIONS } from "@/data/procedures";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsBar />
        <PatientDocumentaries />
        <ServicesCarousel />
        {PROCEDURE_SECTIONS.map((section) => (
          <ProcedureSection key={section.id} data={section} />
        ))}
        <MeetTheDoctor />
        <ClinicGalleryStrip />
        <WhyChooseUs />
        <JourneySteps />
        <ContactSection />
        <Disclaimer />
      </main>
      <SiteFooter />
      <AppointmentPopup />
    </>
  );
}
