import {
  ArrowRight,
  Bandage,
  ChartLineIcon,
  CircleCheck,
  Clock,
  Globe,
  Heart,
  Microscope,
  Shield,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";
import React from "react";
import Button from "../ui/Button";
import BadgeIcon from "../CustomIcons/BadgeIcon";
import CuboidIcon from "../CustomIcons/CuboidIcon";

interface WhyCardProps {
  icon: React.ReactNode;
  heading: string;
  subHeading: string;
}
const WhyCard = (props: WhyCardProps) => {
  return (
    <div className="p-4  w-[27.5rem] bg-[#FFFFFF] h-30 text-start border border-[#1D25300D] rounded shadow-[#1D25300D] shadow-sm flex">
      <div className="p-2 bg-[#DBECFA] rounded-lg aspect-square h-fit mx-2">
        {props.icon}
      </div>
      <div>
        <h4 className="text-lg font-bold mb-1 text-[#1D2530]">
          {props.heading}
        </h4>
        <p className="text-[#52637A]">{props.subHeading}</p>
      </div>
    </div>
  );
};

const Why = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center font-Montserrat bg-gradient-to-b from-[#DBECFA] to-[#FFFFFF]">
      <div className="my-[6rem]">
        <h2 className="text-4xl font-bold ">Why Choose GAMA Surgical?</h2>
        <p className="text-lg font-normal text-[#52637A] ">
          Delivering excellence in medical disposables through quality,
          innovation, and trust
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[3rem]">
        <WhyCard
          heading="ISO Certified"
          subHeading="ISO 9001:2015 & ISO 13485:2016 certified
manufacturing facility"
          icon={<BadgeIcon textColor="#1679CA" />}
        />
        <WhyCard
          heading="In-House Lab"
          subHeading="Dedicated quality control laboratory for rigorous
testing"
          icon={<Microscope className="text-[#1679CA]" />}
        />
        <WhyCard
          heading="Quality Raw Materials"
          subHeading="Premium grade materials sourced from trusted
suppliers"
          icon={<CuboidIcon textColor="#1679CA" />}
        />
        <WhyCard
          heading="Timely Delivery"
          subHeading="On-time delivery with efficient supply chain
management"
          icon={<Clock className="text-[#1679CA]" />}
        />
        <WhyCard
          heading="Expert Team"
          subHeading="Experienced professionals committed to excellence"
          icon={<Users className="text-[#1679CA]" />}
        />
        <WhyCard
          heading="Market-Leading Prices"
          subHeading="Competitive pricing without compromising quality"
          icon={
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2999 7L13.7999 15.5L8.79987 10.5L2.29987 17"
                stroke="#1679CA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.2999 7H22.2999V13"
                stroke="#1679CA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>
      <div className="w-full p-13 flex gap-8 ">
        <div className="p-4 py-6 w-1/2 bg-[#FFFFFF] h-fit text-start border border-[#1D25300D] rounded shadow-[#1D25300D] shadow-sm flex">
          <div className="px-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg aspect-square  h-fit ">
                <Globe className="text-[#1679CA]" />
              </div>

              <h4 className="text-lg font-bold mb-1 text-[#1D2530]">
                Our Vision
              </h4>
            </div>
            <p className="text-[#52637A]">
              To be a globally recognized leader in manufacturing high-quality
              medical disposables, setting industry standards for innovation,
              quality, and customer satisfaction while contributing to better
              healthcare outcomes worldwide.
            </p>
          </div>
        </div>
        <div className="p-4 py-6 w-1/2 bg-[#FFFFFF] h-fit text-start border border-[#1D25300D] rounded shadow-[#1D25300D] shadow-sm flex">
          <div className="px-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg aspect-square  h-fit ">
                <CircleCheck className="text-[#358D84]" />
              </div>

              <h4 className="text-lg font-bold mb-1 text-[#1D2530]">
                Our Mission
              </h4>
            </div>
            <p className="text-[#52637A]">
              To provide healthcare institutions with reliable, safe, and
              cost-effective medical disposables through continuous innovation,
              stringent quality control, and exceptional customer service,
              ensuring the best possible patient care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
