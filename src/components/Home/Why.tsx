import { CircleCheck, Clock, Globe, Users } from "lucide-react";
import React from "react";
import BadgeIcon from "../CustomIcons/BadgeIcon";
import CuboidIcon from "../CustomIcons/CuboidIcon";

interface WhyCardProps {
  icon: React.ReactNode;
  heading: string;
  subHeading: string;
}

const WhyCard = (props: WhyCardProps) => {
  return (
    <div className="p-4 w-full max-w-[27.5rem] bg-[#FFFFFF] text-start border border-[#1D25300D] rounded shadow-[#1D25300D] shadow-sm flex flex-col sm:flex-row gap-4">
      <div className="p-2 bg-[#DBECFA] rounded-lg aspect-square h-fit self-center sm:self-start flex-shrink-0">
        {props.icon}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold mb-2 text-[#1D2530] text-center sm:text-left">
          {props.heading}
        </h4>
        <p className="text-[#52637A] text-sm sm:text-base text-center sm:text-left">
          {props.subHeading}
        </p>
      </div>
    </div>
  );
};

const Why = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center font-Montserrat bg-gradient-to-b from-[#DBECFA] to-[#FFFFFF] px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="my-8 sm:my-12 lg:my-24 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Why Choose GAMA Surgical?
        </h2>
        <p className="text-base sm:text-lg font-normal text-[#52637A] max-w-3xl mx-auto">
          Delivering excellence in medical disposables through quality,
          innovation, and trust
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-7xl mb-8 sm:mb-12 lg:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          <WhyCard
            heading="ISO Certified"
            subHeading="ISO 9001:2015 & ISO 13485:2016 certified manufacturing facility"
            icon={<BadgeIcon textColor="#1679CA" />}
          />
          <WhyCard
            heading="Quality Raw Materials"
            subHeading="Premium grade materials sourced from trusted suppliers"
            icon={<CuboidIcon textColor="#1679CA" />}
          />
          <WhyCard
            heading="Timely Delivery"
            subHeading="On-time delivery with efficient supply chain management"
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
      </div>

      {/* Vision & Mission Section */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Vision Card */}
          <div className="flex-1 p-4 sm:p-6 bg-[#FFFFFF] text-start border border-[#1D25300D] rounded shadow-[#1D25300D] shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg h-fit flex-shrink-0">
                <Globe className="text-[#1679CA] w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#1D2530]">Our Vision</h4>
            </div>
            <p className="text-[#52637A] text-sm sm:text-base leading-relaxed">
              To be a globally recognized leader in manufacturing high-quality
              medical disposables, setting industry standards for innovation,
              quality, and customer satisfaction while contributing to better
              healthcare outcomes worldwide.
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex-1 p-4 sm:p-6 bg-[#FFFFFF] text-start border border-[#1D25300D] rounded shadow-[#1D25300D] shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg h-fit flex-shrink-0">
                <CircleCheck className="text-[#358D84] w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#1D2530]">Our Mission</h4>
            </div>
            <p className="text-[#52637A] text-sm sm:text-base leading-relaxed">
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
