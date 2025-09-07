import Button from "@/components/ui/Button";
import {
  Award,
  CircleCheckBig,
  Download,
  FileCheck,
  Shield,
} from "lucide-react";
import React from "react";

const Certificate = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-8 my-8 sm:my-12 px-4">
        <h4 className="text-[#22282A] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
          Quality & Certifications{" "}
        </h4>
        <p className="text-sm sm:text-base lg:text-lg text-[#6A767C] text-center max-w-2xl px-4">
          Meeting international quality standards for medical device
          manufacturing
        </p>
        <div className="bg-[#16A2491A] border-[#16A24933] rounded-full flex items-center justify-center w-fit p-2 sm:p-3 px-4 sm:px-6 text-[#16A249] text-sm sm:text-base gap-2">
          <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
          <p>9+ International Certifications</p>
        </div>
      </div>

      {/* Certification Cards Grid */}
      <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 items-center justify-center my-8 px-4 sm:px-6 lg:px-8">
        {/* ISO 9001:2015 */}
        <div className="bg-white rounded-xl p-6 sm:p-8 w-full sm:w-[calc(50%-12px)] lg:w-[31.5rem] min-h-[280px] flex flex-col gap-2 border border-[#E8ECEE] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <span className="bg-gradient-to-b from-[#0553AE] to-[#0697E0] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex justify-center items-center">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold">ISO 9001:2015</h3>
          <p className="text-[#6A767C] mb-4 text-sm font-medium">
            Quality Management System
          </p>
          <p className="text-[#6A767C] text-sm leading-relaxed">
            International standard that specifies requirements for a quality
            management system. This certification demonstrates our ability to
            consistently provide products that meet customer and regulatory
            requirements.
          </p>
        </div>

        {/* ISO 13485:2016 */}
        <div className="bg-white rounded-xl p-6 sm:p-8 w-full sm:w-[calc(50%-12px)] lg:w-[31.5rem] min-h-[280px] flex flex-col gap-2 border border-[#E8ECEE] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <span className="bg-gradient-to-b from-[#0553AE] to-[#0697E0] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex justify-center items-center">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold">ISO 13485:2016</h3>
          <p className="text-[#6A767C] mb-4 text-sm font-medium">
            Medical Devices - Quality Management
          </p>
          <p className="text-[#6A767C] text-sm leading-relaxed">
            Specifically designed for medical device manufacturers, this
            certification ensures our products meet comprehensive regulatory
            requirements and maintain consistent quality in medical device
            production.
          </p>
        </div>

        {/* CE Marking */}
        <div className="bg-white rounded-xl p-6 sm:p-8 w-full sm:w-[calc(50%-12px)] lg:w-[31.5rem] min-h-[280px] flex flex-col gap-2 border border-[#E8ECEE] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <span className="bg-gradient-to-b from-[#0553AE] to-[#0697E0] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex justify-center items-center">
            <CircleCheckBig className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold">CE Marking</h3>
          <p className="text-[#6A767C] mb-4 text-sm font-medium">
            European Conformity
          </p>
          <p className="text-[#6A767C] text-sm leading-relaxed">
            Indicates conformity with health, safety, and environmental
            protection standards for products sold within the European Economic
            Area. Essential for export to European markets.
          </p>
        </div>

        {/* GMP */}
        <div className="bg-white rounded-xl p-6 sm:p-8 w-full sm:w-[calc(50%-12px)] lg:w-[31.5rem] min-h-[280px] flex flex-col gap-2 border border-[#E8ECEE] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <span className="bg-gradient-to-b from-[#0553AE] to-[#0697E0] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex justify-center items-center">
            <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold">GMP</h3>
          <p className="text-[#6A767C] mb-4 text-sm font-medium">
            Good Manufacturing Practices
          </p>
          <p className="text-[#6A767C] text-sm leading-relaxed">
            FDCA Gujarat certified facility following Good Manufacturing
            Practices ensuring products are consistently produced and controlled
            according to quality standards.
          </p>
        </div>

        {/* CDSCO */}
        <div className="bg-white rounded-xl p-6 sm:p-8 w-full sm:w-[calc(50%-12px)] lg:w-[31.5rem] min-h-[280px] flex flex-col gap-2 border border-[#E8ECEE] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <span className="bg-gradient-to-b from-[#0553AE] to-[#0697E0] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex justify-center items-center">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold">CDSCO</h3>
          <p className="text-[#6A767C] mb-4 text-sm font-medium">
            Central Drugs Standard Control Organization
          </p>
          <p className="text-[#6A767C] text-sm leading-relaxed">
            Approval from India&apos;s national regulatory body for
            pharmaceuticals and medical devices, ensuring compliance with all
            Indian medical device regulations.
          </p>
        </div>

        {/* MDR-5 & MD-42 */}
        <div className="bg-white rounded-xl p-6 sm:p-8 w-full sm:w-[calc(50%-12px)] lg:w-[31.5rem] min-h-[280px] flex flex-col gap-2 border border-[#E8ECEE] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <span className="bg-gradient-to-b from-[#0553AE] to-[#0697E0] w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex justify-center items-center">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold">MDR-5 & MD-42</h3>
          <p className="text-[#6A767C] mb-4 text-sm font-medium">
            Medical Device Rules Compliance
          </p>
          <p className="text-[#6A767C] text-sm leading-relaxed">
            Full compliance with Medical Device Rules ensuring all products meet
            safety and performance requirements set by Indian regulatory
            authorities.
          </p>
        </div>
      </div>

      {/* Additional Recognitions */}
      <div className="bg-[#F4FAFB] mx-4 sm:mx-8 lg:mx-[15rem] rounded-xl my-10 p-6 sm:p-8 lg:p-12">
        <h4 className="text-lg sm:text-xl text-black mb-4 sm:mb-6">
          Additional Recognitions
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          <span className="flex gap-3 sm:gap-4 my-2 sm:my-4 items-start">
            <CircleCheckBig className="text-[#16A249] w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm sm:text-base">MSME-Udyam Registered</p>
          </span>
          <span className="flex gap-3 sm:gap-4 my-2 sm:my-4 items-start">
            <CircleCheckBig className="text-[#16A249] w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm sm:text-base">Startup India Recognition</p>
          </span>
          <span className="flex gap-3 sm:gap-4 my-2 sm:my-4 items-start">
            <CircleCheckBig className="text-[#16A249] w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm sm:text-base">Trademark (IP India)</p>
          </span>
          <span className="flex gap-3 sm:gap-4 my-2 sm:my-4 items-start">
            <CircleCheckBig className="text-[#16A249] w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm sm:text-base">MFG. Lic: MFG/MD/2023/000116</p>
          </span>
          <span className="flex gap-3 sm:gap-4 my-2 sm:my-4 items-start">
            <CircleCheckBig className="text-[#16A249] w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm sm:text-base">GUJ/MD-42/SUR/00097</p>
          </span>
        </div>
      </div>

      {/* Download Section */}
      <div className="p-6 sm:p-8 pb-0 text-center space-y-6 sm:space-y-8 my-4 px-4">
        <h3 className="text-xl sm:text-2xl text-[#22282A]">
          Download Certificates
        </h3>
        <p className="text-sm text-[#6A767C] max-w-2xl mx-auto">
          Access our complete certification documentation for verification and
          compliance
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-[#FE5E0E] px-4 sm:px-6 text-sm h-10 sm:h-12 text-white w-full sm:w-auto flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            All Certificates (ZIP)
          </Button>
          <Button className="bg-[#FFFFFF] px-4 sm:px-6 text-sm h-10 sm:h-12 border border-[#E8ECEE] text-black w-full sm:w-auto">
            Request Specific Certificate
          </Button>
        </div>
      </div>

      {/* Quality Commitment */}
      <div className="p-6 sm:p-8 text-center space-y-6 sm:space-y-8 bg-gradient-to-b from-[#F4FAFB] to-[#FFFFFF] my-12 flex flex-col items-center justify-center">
        <div className="w-full sm:w-[80%] lg:w-[60%] space-y-4 px-4">
          <h4 className="text-2xl sm:text-3xl text-[#22282A]">
            Our Quality Commitment
          </h4>
          <p className="text-[#6A767C] text-base sm:text-lg leading-relaxed">
            Every product leaving our facility undergoes rigorous quality
            control procedures. From raw material inspection to final product
            testing, we ensure that each item meets the highest standards of
            quality and safety.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none lg:px-40">
          <div className="flex-1 border-[#22282A14] bg-white shadow-sm p-4 sm:p-6 border rounded-lg text-center">
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-[#0553AE] to-[#0697E0] bg-clip-text text-transparent font-normal">
              100%
            </p>
            <p className="text-sm text-[#6A767C] mt-1">Batch Testing</p>
          </div>
          <div className="flex-1 border-[#22282A14] bg-white shadow-sm p-4 sm:p-6 border rounded-lg text-center">
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-[#0553AE] to-[#0697E0] bg-clip-text text-transparent font-normal">
              Zero
            </p>
            <p className="text-sm text-[#6A767C] mt-1">Defect Policy</p>
          </div>
          <div className="flex-1 border-[#22282A14] bg-white shadow-sm p-4 sm:p-6 border rounded-lg text-center">
            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-[#0553AE] to-[#0697E0] bg-clip-text text-transparent font-normal">
              24/7
            </p>
            <p className="text-sm text-[#6A767C] mt-1">Quality Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
