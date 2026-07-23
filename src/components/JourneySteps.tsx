import type { ComponentType, SVGProps } from "react";
import { GetAppointmentButton } from "@/components/BrandButtons";
import {
  AssessmentIcon,
  BloomIcon,
  CalendarCheckIcon,
  OptionsIcon,
} from "@/components/icons";

interface Step {
  label: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const STEPS: Step[] = [
  {
    label: "Book an Appointment",
    description: "Schedule a private consultation at a time that works for you.",
    Icon: CalendarCheckIcon,
  },
  {
    label: "Get Assessment",
    description: "A thorough one-on-one evaluation of your goals and concerns.",
    Icon: AssessmentIcon,
  },
  {
    label: "Know Treatment Options",
    description: "Understand every option with a plan tailored to you.",
    Icon: OptionsIcon,
  },
  {
    label: "Enjoy the Transformation",
    description: "Recover with guided aftercare and love your results.",
    Icon: BloomIcon,
  },
];

export function JourneySteps() {
  return (
    <section className="bg-white px-6 py-[88px]">
      <p className="text-center font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
        So, What Next?
      </p>
      <h2 className="mt-1 text-center font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
        Navigate your Transformation journey with us!
      </h2>
      <div className="mx-auto mt-16 grid max-w-[1200px] grid-cols-1 gap-14 sm:grid-cols-2 lg:mt-[100px] lg:grid-cols-4 lg:gap-8">
        {STEPS.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <s.Icon className="size-[64px] text-maroon" />
            <h3 className="mt-8 font-sans text-[20px] font-medium text-black">{s.label}</h3>
            <p className="mt-3 max-w-[250px] font-sans text-[15px] leading-[24px] text-gray-text">
              {s.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-14 flex justify-center lg:mt-16">
        <GetAppointmentButton />
      </div>
    </section>
  );
}
