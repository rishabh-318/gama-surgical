import React from "react";
import BadgeIcon from "../CustomIcons/BadgeIcon";
import { ArrowUpRight, ChevronRightIcon, Shield } from "lucide-react";
import ShieldIcon from "../CustomIcons/ShieldIcon";
import Button from "../ui/Button";
import { Montserrat, Outfit, Share_Tech } from "next/font/google";
import CuboidIcon from "../CustomIcons/CuboidIcon";

// Icons as React components
const CertificationIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.5 8.5L22 9L17 14L18.5 22L12 18.5L5.5 22L7 14L2 9L8.5 8.5L12 2Z" />
  </svg>
);

const LabIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M13,13H18V18H13V13M6,6H11V11H6V6M16,6H18V11H16V6M6,13H11V18H6V13Z" />
  </svg>
);

const GlobeIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
  </svg>
);

interface StatItemProps {
  number: string;
  label: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="text-start">
    <div className="text-4xl font-bold text-white mb-2">{number}</div>
    <div className="text-white/80 text-sm md:text-base font-medium">
      {label}
    </div>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
    <div className="flex justify-center mb-4">
      <div className="w-12 h-12 flex items-center justify-center">{icon}</div>
    </div>
    <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{subtitle}</p>
  </div>
);
const Hero = () => {
  return (
    <div className="font-Inter h-[95vh] items-center justify-items-center p-8 pb-20 gap-16 sm:pt-20 bg-gradient-to-b from-[#1679CACF] to-[#0F69B3F2] relative">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div> */}

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 ">
          {/* Header Certification Badge */}
          <div className="flex items-center justify-start mb-4">
            <div className="flex items-center">
              <Shield className="text-white mx-4" />
              <span className="text-white text-sm font-medium  bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                ISO 9001:2015 & ISO 13485:2016 Certified
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-4 my-4 font-Montserrat">
                <h1 className="text-5xl lg:text-7xl font-bold font-Montserrat text-white leading-[85%]">
                  We Commit.
                  <br />
                  <span className="text-white leading-[6%] font-Montserrat">
                    We Deliver.
                  </span>
                </h1>

                <p className="text-xl  text-white/90 font-light  max-w-2xl">
                  Medical-grade disposable surgical products manufactured with
                  precision.
                  <br />
                  Trusted by hospitals, clinics & OEMs across India and
                  globally.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#1679CA] px-8  rounded-lg font-semibold text-lg hover:bg-white/95 transition-all duration-300 flex items-center justify-center group">
                  Request a Sample
                  <ArrowUpRight className="w-6 h-5  rotate-45 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button className="bg-[#FE5E0E] border border-white/60 text-white px-8 rounded-lg font-semibold text-lg hover:bg-[#FE5E0E]/90 transition-all duration-300 flex items-center justify-center group">
                  Explore Products
                  <CuboidIcon />
                </Button>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                <StatItem number="500+" label="Products" />
                <StatItem number="1000+" label="Clients" />
                <StatItem number="15+" label="Years" />
                <StatItem number="25+" label="Countries" />
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 bg-white/4 border border-white/10 shadow-white/4 rounded-2xl">
              <FeatureCard
                icon={
                  <svg
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.7539 25.78L34.7839 42.832C34.8178 43.0328 34.7896 43.2392 34.7031 43.4235C34.6166 43.6079 34.4759 43.7614 34.2997 43.8636C34.1236 43.9658 33.9204 44.0118 33.7175 43.9954C33.5145 43.9791 33.3213 43.9011 33.1639 43.772L26.0039 38.398C25.6582 38.1398 25.2383 38.0003 24.8069 38.0003C24.3754 38.0003 23.9555 38.1398 23.6099 38.398L16.4379 43.77C16.2805 43.8989 16.0876 43.9767 15.8848 43.9931C15.6821 44.0095 15.4792 43.9637 15.3032 43.8618C15.1272 43.7598 14.9864 43.6067 14.8997 43.4227C14.813 43.2387 14.7844 43.0327 14.8179 42.832L17.8459 25.78"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.7999 28C31.4273 28 36.7999 22.6274 36.7999 16C36.7999 9.37258 31.4273 4 24.7999 4C18.1724 4 12.7999 9.37258 12.7999 16C12.7999 22.6274 18.1724 28 24.7999 28Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="GMP Certified"
                subtitle="Good Manufacturing Practice"
              />

              <FeatureCard
                icon={
                  <svg
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.7999 26C40.7999 36 33.7999 41 25.4799 43.9C25.0442 44.0477 24.5709 44.0406 24.1399 43.88C15.7999 41 8.79987 36 8.79987 26V12C8.79987 11.4696 9.01058 10.9609 9.38565 10.5858C9.76073 10.2107 10.2694 10 10.7999 10C14.7999 10 19.7999 7.60001 23.2799 4.56001C23.7036 4.19801 24.2426 3.99911 24.7999 3.99911C25.3572 3.99911 25.8962 4.19801 26.3199 4.56001C29.8199 7.62001 34.7999 10 38.7999 10C39.3303 10 39.839 10.2107 40.2141 10.5858C40.5892 10.9609 40.7999 11.4696 40.7999 12V26Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="CE Marked"
                subtitle="European Conformity"
              />

              <FeatureCard
                icon={
                  <svg
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.7999 26C40.7999 36 33.7999 41 25.4799 43.9C25.0442 44.0477 24.5709 44.0406 24.1399 43.88C15.7999 41 8.79987 36 8.79987 26V12C8.79987 11.4696 9.01058 10.9609 9.38565 10.5858C9.76073 10.2107 10.2694 10 10.7999 10C14.7999 10 19.7999 7.60001 23.2799 4.56001C23.7036 4.19801 24.2426 3.99911 24.7999 3.99911C25.3572 3.99911 25.8962 4.19801 26.3199 4.56001C29.8199 7.62001 34.7999 10 38.7999 10C39.3303 10 39.839 10.2107 40.2141 10.5858C40.5892 10.9609 40.7999 11.4696 40.7999 12V26Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="In-House Lab"
                subtitle="Quality Control"
              />

              <FeatureCard
                icon={
                  <svg
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7999 44C35.8456 44 44.7999 35.0457 44.7999 24C44.7999 12.9543 35.8456 4 24.7999 4C13.7542 4 4.79987 12.9543 4.79987 24C4.79987 35.0457 13.7542 44 24.7999 44Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.7999 4C19.6643 9.39231 16.7999 16.5535 16.7999 24C16.7999 31.4465 19.6643 38.6077 24.7999 44C29.9354 38.6077 32.7999 31.4465 32.7999 24C32.7999 16.5535 29.9354 9.39231 24.7999 4Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.79987 24H44.7999"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="Export Ready"
                subtitle="Global Standards"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        {/* <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div> */}
        {/* <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/60 rounded-full"></div> */}
        {/* <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-1000"></div> */}
      </main>
      <div className="flex items-center justify-center gap-4 absolute bottom-0 py-3 shadow-2xs bg-white w-full">
        <span className="flex items-center gap-2 justify-center">
          <BadgeIcon />
          ISO 9001:2015
        </span>
        <span className="flex items-center gap-2 justify-center">
          <BadgeIcon />
          ISO 13485:2016
        </span>
        <span className="flex items-center gap-2 justify-center">
          <ShieldIcon />
          CE Certified
        </span>
        <span className="flex items-center gap-2 justify-center">
          <BadgeIcon />
          GMP Compliant
        </span>
        <span className="flex items-center gap-2 justify-center">
          <ShieldIcon />
          MSME Registered
        </span>
      </div>
    </div>
  );
};

export default Hero;
