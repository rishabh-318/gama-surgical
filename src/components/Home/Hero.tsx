"use client";
import React from "react";
import { ArrowUpRight, Shield } from "lucide-react";
import BadgeIcon from "../CustomIcons/BadgeIcon";
import ShieldIcon from "../CustomIcons/ShieldIcon";
import CuboidIcon from "../CustomIcons/CuboidIcon";
import Button from "../ui/Button";
import Link from "next/link";

interface StatItemProps {
  number: string;
  label: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

// Extracted components with improved props
const StatItem = ({ number, label }: StatItemProps) => (
  <div className="text-center sm:text-start flex flex-col justify-center items-center">
    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
      {number}
    </div>
    <div className="text-white/80 text-xs sm:text-sm md:text-base font-medium">
      {label}
    </div>
  </div>
);

const FeatureCard = ({ icon, title, subtitle }: FeatureCardProps) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
    <div className="flex justify-center mb-3 sm:mb-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
      {title}
    </h3>
    <p className="text-white/80 text-xs sm:text-sm">{subtitle}</p>
  </div>
);

// Certification badges data
const certifications = [
  { icon: <BadgeIcon />, text: "ISO 9001:2015" },
  { icon: <BadgeIcon />, text: "ISO 13485:2016" },
  { icon: <ShieldIcon />, text: "CE Certified" },
  { icon: <BadgeIcon />, text: "GMP Compliant" },
  { icon: <ShieldIcon />, text: "MSME Registered" },
];

const Hero = () => {
  return (
    <div className="font-Inter min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 pb-20 gap-8 sm:gap-16 sm:pt-20 bg-gradient-to-b from-[#1679CACF] to-[#0F69B3F2] relative">
      <div className="flex flex-col gap-6 sm:gap-8 items-center w-full max-w-7xl mx-auto">
        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6">
          {/* Header Certification Badge */}
          <div className="flex items-center text-center justify-center lg:justify-start mb-6">
            <div className="flex items-center flex-wrap justify-center md:justify-start gap-2">
              <Shield className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-white text-xs sm:text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/30">
                ISO 9001:2015 & ISO 13485:2016 Certified
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* div Heading */}
              <div className="space-y-3 sm:space-y-4 font-Montserrat">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  We Commit.
                  <br />
                  <span className="text-white font-Montserrat">
                    We Deliver.
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-white/90 font-light max-w-2xl mx-auto lg:mx-0">
                  Medical-grade disposable surgical products manufactured with
                  precision.
                  <br className="hidden sm:block" />
                  Trusted by hospitals, clinics & OEMs across India and
                  globally.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-center sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=Hello! I would like to request a sample.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="bg-white text-[#1679CA] px-6 sm:px-8 py-3 rounded-lg w-fit font-semibold text-base sm:text-lg hover:bg-white/95 transition-all duration-300 flex items-center justify-center group"
                    // onClick={() => (window.location.href = "tel:+919484449452")}
                  >
                    Request a Sample
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <Link href="/products">
                  <Button className="bg-[#FE5E0E] border border-white/60 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#FE5E0E]/90 transition-all duration-300 flex items-center justify-center group">
                    Explore Products
                    <CuboidIcon />
                  </Button>
                </Link>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-4 mb-16">
                <StatItem number="50+" label="Products" />
                <StatItem number="1000+" label="Clients" />
                <StatItem number="5+" label="Years" />
                <StatItem number="20+" label="Countries" />
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 sm:mb-12 bg-white/4 border border-white/10 shadow-white/4 rounded-2xl">
              <FeatureCard
                icon={
                  <svg
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                    className="w-8 h-8 sm:w-12 sm:h-12"
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
                    className="w-8 h-8 sm:w-12 sm:h-12"
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
                    className="w-8 h-8 sm:w-12 sm:h-12"
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
                    className="w-8 h-8 sm:w-12 sm:h-12"
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
      </div>

      {/* Bottom Certification Bar */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 absolute bottom-0 py-2 sm:py-3 shadow-2xl bg-white w-full overflow-x-auto">
        {certifications.map((cert, index) => (
          <span
            key={index}
            className="flex items-center md:gap-2 justify-between sm:justify-center whitespace-nowrap text-xs sm:text-sm "
          >
            {cert.icon}
            <span className=" hidden md:block ">{cert.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
