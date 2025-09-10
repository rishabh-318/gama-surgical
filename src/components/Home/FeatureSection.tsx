import {
  ArrowRight,
  Bandage,
  Heart,
  Shield,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import React from "react";
import Button from "../ui/Button";

interface FeatureCardProps {
  icon: React.ReactNode;
  heading: string;
  subHeading: string;
  tags: string[];
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="p-4 w-full max-w-[29rem] text-start border border-[#1D25300D] rounded shadow-[#1D25300D] shadow-sm flex flex-col sm:flex-row">
      <div className="p-2 bg-[#DBECFA] rounded-lg aspect-square h-fit mx-2 mb-4 sm:mb-0 self-center sm:self-start">
        {props.icon}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold mb-1 text-[#1D2530]">
          {props.heading}
        </h4>
        <p className="text-[#52637A] mb-2">{props.subHeading}</p>
        <div className="flex flex-wrap gap-1 my-2 text-sm">
          {props.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center text-xs justify-center px-2 py-1 bg-[#F3F5F7] rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="flex gap-2 text-[#FE5E0E] my-4 mt-5 text-sm items-center hover:gap-3 transition-all duration-200">
          View Products{" "}
          <ArrowRight className="text-sm" width={15} height={15} />
        </button>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center font-Montserrat px-4 sm:px-6 lg:px-8">
      <div className="my-8 sm:my-12 lg:my-24 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Featured Product Categories
        </h2>
        <p className="text-base sm:text-lg font-normal text-[#52637A] max-w-3xl mx-auto">
          Comprehensive range of medical disposables manufactured to the highest
          quality standards
        </p>
      </div>

      {/* Responsive grid container */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-4 justify-items-center">
          <FeatureCard
            heading="Dressings & Bandages"
            subHeading="Sterile and non-sterile wound care solutions"
            tags={["Gamjee Roll", "Combine Dressing", "Gauze Swabs"]}
            icon={<Bandage className="text-[#1679CA] w-6 h-6" />}
          />
          <FeatureCard
            heading="Plasters & Tapes"
            subHeading="Medical adhesive tapes and compression bandages"
            tags={["Adhesive", "Tape", "U.S.P"]}
            icon={<Heart className="text-[#1679CA] w-6 h-6" />}
          />
          <FeatureCard
            heading="Drapes & Gowns"
            subHeading="Sterile surgical drapes and protective gowns"
            tags={["Eye Drape", "Surgeon Gown", "Patient Drapes"]}
            icon={<Shield className="text-[#1679CA] w-6 h-6" />}
          />
          <FeatureCard
            heading="Gloves & Masks"
            subHeading="Medical gloves and protective face masks"
            tags={["Examination Gloves", "Surgical Masks", "N95 Masks"]}
            icon={<Stethoscope className="text-[#1679CA] w-6 h-6" />}
          />
          <FeatureCard
            heading="Catheters & Tubes"
            subHeading="Foley catheters and medical tubing solutions"
            tags={[
              "Selicone Foley Catheter",
              "Suction Tubes",
              "Ballon Catheter",
            ]}
            icon={<Syringe className="text-[#1679CA] w-6 h-6" />}
          />
          <FeatureCard
            heading="Wipes & Cleaning"
            subHeading="Medical wipes and cleaning solutions"
            tags={["Bed Bath Wipes", "Baby Wipes", "Prep Razor"]}
            icon={<Sparkles className="text-[#1679CA] w-6 h-6" />}
          />
          <FeatureCard
            heading="Others"
            subHeading=""
            tags={[]}
            icon={<Sparkles className="text-[#1679CA] w-6 h-6" />}
          />
        </div>
      </div>

      <div className="mt-8 sm:mt-10 lg:mt-16">
        <Button
          variant="secondary"
          icon={<ArrowRight className="w-5 h-5" />}
          className="flex flex-row-reverse hover:translate-0 text-white items-center px-6 py-3 text-sm sm:text-base"
        >
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default FeatureSection;
