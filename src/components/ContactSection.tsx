import { AppointmentForm } from "@/components/AppointmentForm";
import { CONTACT } from "@/types/content";

export function ContactSection() {
  return (
    <section id="contact" className="grid items-center bg-white py-[80px] lg:grid-cols-2">
      <div className="relative order-2 mt-8 lg:order-1 lg:mt-0">
        <iframe
          title="Dr Sunita Aesthetics location"
          src="https://maps.google.com/maps?q=Dr%20Sunita%20Aesthetics%2C%20Seethammadara%2C%20Visakhapatnam&z=15&output=embed"
          className="h-[320px] w-full transform-gpu border-0 saturate-[0.25] lg:h-[429px]"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 h-[189px] w-[330px] max-w-full rounded-tr-[24px] bg-maroon p-6">
          <p className="font-serif text-[21px] leading-[29.4px] text-white">Address:</p>
          <p className="mt-2 font-sans text-[14px] leading-[20px] text-white">{CONTACT.address}</p>
        </div>
      </div>
      <div className="order-1 mx-auto w-full max-w-[560px] px-6 lg:order-2 lg:px-12">
        <p className="font-sans text-[16px] font-bold text-maroon">Get in touch</p>
        <h2 className="mb-5 mt-1 font-serif text-[28px] leading-[1.3] text-black">
          Book Appointment
        </h2>
        <AppointmentForm />
      </div>
    </section>
  );
}
