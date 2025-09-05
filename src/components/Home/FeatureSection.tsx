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
    <div className="p-4  w-[29rem] text-start border border-[#1D25300D] rounded shadow-[#1D25300D] shadow-sm flex">
      <div className="p-2 bg-[#DBECFA] rounded-lg aspect-square h-fit mx-2">
        {props.icon}
      </div>
      <div>
        <h4 className="text-lg font-bold mb-1 text-[#1D2530]">
          {props.heading}
        </h4>
        <p className="text-[#52637A]">{props.subHeading}</p>
        <div className="flex my-2 text-sm">
          {props.tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center text-xs justify-center w-fit bg-[#F3F5F7]"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="flex gap-2 text-[#FE5E0E] my-4 mt-5 text-sm items-center -translate-x-11 ">
          View Products{" "}
          <ArrowRight className="text-sm" width={15} height={15} />
        </button>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center font-Montserrat">
      <div className="my-[6rem]">
        <h2 className="text-4xl font-bold ">Featured Product Categories</h2>
        <p className="text-lg font-normal text-[#52637A] ">
          Comprehensive range of medical disposables manufactured to the highest
          quality standards
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[0.8rem]">
        <FeatureCard
          heading="Dressings & Bandages"
          subHeading="Sterile and non-sterile wound care solutions"
          tags={["Gamjee Roll", "Combine Dressing", "Gauze Swabs"]}
          icon={<Bandage />}
        />
        <FeatureCard
          heading="Plasters & Tapes"
          subHeading="Medical adhesive tapes and compression bandages"
          tags={["GAMA's Plast", "Surgical Tape", "Adhesive Bandages"]}
          icon={<Heart />}
        />
        <FeatureCard
          heading="Drapes & Gowns"
          subHeading="Sterile surgical drapes and protective gowns"
          tags={["Eye Drape", "Surgeon Gown", "Patient Drapes"]}
          icon={<Shield />}
        />
        <FeatureCard
          heading="Gloves & Masks"
          subHeading="Medical gloves and protective face masks"
          tags={["Examination Gloves", "Surgical Masks", "N95 Masks"]}
          icon={<Stethoscope />}
        />
        <FeatureCard
          heading="Catheters & Tubes"
          subHeading="Foley catheters and medical tubing solutions"
          tags={["Foley Catheter", "Suction Tubes", "IV Sets"]}
          icon={<Syringe />}
        />
        <FeatureCard
          heading="Wipes & Cleaning"
          subHeading="Medical wipes and cleaning solutions"
          tags={["Alcohol Wipes", "Cotton Rolls", "Cleaning Solutions"]}
          icon={<Sparkles />}
        />
      </div>
      <Button
        variant="secondary"
        icon={<ArrowRight className="w-5" />}
        className="flex flex-row-reverse hover:translate-0 my-10 text-white items-center"
      >
        View All Products
      </Button>
    </div>
  );
};

export default FeatureSection;
