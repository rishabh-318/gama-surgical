import React from "react";
import {
  Award,
  Building,
  CircleCheckBig,
  Dot,
  FileText,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

interface CardProps {
  icon: React.ElementType;
  code: string;
  about: string;
}

const Card = ({ icon: Icon, code, about }: CardProps) => {
  return (
    <div className="w-[90%] md:p-auto md:w-full max-w-54 h-auto aspect-square flex flex-col gap-2 justify-center items-center border border-[#DAE0E7] shadow-sm rounded-lg p">
      <div className="rounded-full w-12 h-12 sm:w-16 sm:h-16 bg-[#DBECFA] flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 sm:w-10 sm:h-10 p-1 text-[#FE5E0E]" />
      </div>
      <p className="font-semibold text-sm sm:text-base text-center">{code}</p>
      <p className="text-xs sm:text-sm text-[#52637A] text-center">{about}</p>
    </div>
  );
};

const Certification = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 text-center font-Montserrat">
      {/* Header Section */}
      <div className="max-w-4xl w-auto mx-auto mb-8 sm:mb-12">
        <h4 className="text-2xl sm:text-3xl lg:text-4xl my-4 font-bold">
          Quality Certifications & Compliance
        </h4>
        <p className="my-4 text-base sm:text-lg text-[#52637A]">
          Meeting global standards with internationally recognized
          certifications
        </p>
        <div className="text-xs sm:text-sm text-[#52637A] flex flex-col sm:flex-row items-center justify-center my-4 gap-2">
          <p>Mfg. Lic no. MFG/MD/2023/000116</p>
          <Dot className="hidden sm:block" />
          <p>MDR-5 & MD 42 Licensed</p>
        </div>
      </div>

      {/* Certification Cards Grid */}
      <div className="mx-auto mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-4 px-12 sm:gap-6 justify-center">
          <Card
            icon={Award}
            code="ISO 9001:2015"
            about="Quality Management System"
          />
          <Card
            icon={Shield}
            code="ISO 13485:2016"
            about="Medical Devices QMS"
          />
          <Card
            icon={CircleCheckBig}
            code="CE Marking"
            about="European Conformity"
          />
          <Card
            icon={Award}
            code="GMP Certified"
            about="Good Manufacturing Practice"
          />
          <Card
            icon={Building}
            code="MSME-UDYAM"
            about="Government Registered"
          />
          <Card
            icon={Shield}
            code="Start-Up India"
            about="Recognized Startup"
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-full mx-auto">
        <div className="border-[#1679CA33] bg-[#DBECFA] rounded-lg flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 justify-center items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-start">
            <h4 className="font-bold text-black text-xl sm:text-2xl mb-4">
              Committed to Quality Excellence
            </h4>
            <p className="text-[#52637A] text-sm sm:text-base mb-6 leading-relaxed">
              Our state-of-the-art manufacturing facility in Surat, Gujarat
              operates under strict quality control measures. Every product
              undergoes rigorous testing in our in-house laboratory to ensure
              compliance with international standards.
            </p>

            {/* Quality Features List */}
            <ul className="list-none space-y-3 mb-6">
              <li className="flex gap-3 items-start">
                <CircleCheckBig className="text-[#21C45D] flex-shrink-0 w-5 h-5 mt-0.5" />
                <p className="text-sm sm:text-base">
                  Strict raw material quality checks
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <CircleCheckBig className="text-[#21C45D] flex-shrink-0 w-5 h-5 mt-0.5" />
                <p className="text-sm sm:text-base">
                  In-process quality monitoring
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <CircleCheckBig className="text-[#21C45D] flex-shrink-0 w-5 h-5 mt-0.5" />
                <p className="text-sm sm:text-base">
                  Final product inspection & testing
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <CircleCheckBig className="text-[#21C45D] flex-shrink-0 w-5 h-5 mt-0.5" />
                <p className="text-sm sm:text-base">
                  Batch traceability & documentation
                </p>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 font-Inter">
              <Button className="bg-[#FE5E0E] hover:bg-[#FE5E0E] shadow-sm text-sm flex items-center justify-center gap-2">
                View All Certificates
                <FileText className="w-4 h-4 text-white" />
              </Button>
              <Button className="bg-white hover:bg-white/90 shadow-sm text-black border border-gray-200">
                Download Quality Policy
              </Button>
            </div>
          </div>

          {/* Certificate Images */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm w-full">
              <div className="relative w-full h-64 sm:h-80 lg:h-96">
                <Image
                  src="/images/certi1.png"
                  alt="ISO Certification"
                  fill
                  className="rounded-lg shadow-sm object-contain"
                />
              </div>
              <p className="mt-4 text-[#52637A] text-xs sm:text-sm text-center">
                Our certifications ensure that every product meets the highest
                standards of quality and safety
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
