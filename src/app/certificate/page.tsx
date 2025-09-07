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
      <div className="flex flex-col justify-center items-center gap-8 my-12">
        <h4 className="text-[#22282A] font-semibold text-5xl">
          Quality & Certifications{" "}
        </h4>
        <p className="text-lg text-[#6A767C]">
          Meeting international quality standards for medical device
          manufacturing
        </p>
        <div className="bg-[#16A2491A] border-[#16A24933] rounded-full flex items-center justify-center w-fit p-3 px-6 text-[#16A249] text-[1rem] ">
          <Shield /> <p>9+ International Certifications</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-center my-8  container-2">
        <div className="bg-white rounded-xl p-8 w-[31.5rem] h-70 flex flex-col gap-2 border border-[#E8ECEE] shadow-[#0000000D]">
          <span className="bg-linear-to-b from-[#0553AE] to-[#0697E0] w-12 h-12 rounded-xl flex justify-center items-center">
            <Award className=" w-6 h-6 text-white" />
          </span>
          <h3 className="text-2xl">ISO 9001:2015</h3>

          <p className="text-[#6A767C] mb-4 text-sm">
            Quality Management System
          </p>
          <p className="text-[#6A767C] text-sm">
            International standard that specifies requirements for a quality
            management system. This certification demonstrates our ability to
            consistently provide products that meet customer and regulatory
            requirements.
          </p>
        </div>
        <div className="bg-white rounded-xl p-8 w-[31.5rem] h-70 flex flex-col gap-2 border border-[#E8ECEE] shadow-[#0000000D]">
          <span className="bg-linear-to-b from-[#0553AE] to-[#0697E0] w-12 h-12 rounded-xl flex justify-center items-center">
            <Shield className=" w-6 h-6 text-white" />
          </span>
          <h3 className="text-2xl">ISO 13485:2016</h3>

          <p className="text-[#6A767C] mb-4 text-sm">
            Medical Devices - Quality Management
          </p>
          <p className="text-[#6A767C] text-sm">
            Specifically designed for medical device manufacturers, this
            certification ensures our products meet comprehensive regulatory
            requirements and maintain consistent quality in medical device
            production.
          </p>
        </div>
        <div className="bg-white rounded-xl p-8 w-[31.5rem] h-70 flex flex-col gap-2 border border-[#E8ECEE] shadow-[#0000000D]">
          <span className="bg-linear-to-b from-[#0553AE] to-[#0697E0] w-12 h-12 rounded-xl flex justify-center items-center">
            <CircleCheckBig className=" w-6 h-6 text-white" />
          </span>
          <h3 className="text-2xl">CE Marking</h3>

          <p className="text-[#6A767C] mb-4 text-sm">European Conformity</p>
          <p className="text-[#6A767C] text-sm">
            Indicates conformity with health, safety, and environmental
            protection standards for products sold within the European Economic
            Area. Essential for export to European markets.
          </p>
        </div>
        <div className="bg-white rounded-xl p-8 w-[31.5rem] h-70 flex flex-col gap-2 border border-[#E8ECEE] shadow-[#0000000D]">
          <span className="bg-linear-to-b from-[#0553AE] to-[#0697E0] w-12 h-12 rounded-xl flex justify-center items-center">
            <FileCheck className=" w-6 h-6 text-white" />
          </span>
          <h3 className="text-2xl">GMP</h3>

          <p className="text-[#6A767C] mb-4 text-sm">
            Good Manufacturing Practices
          </p>
          <p className="text-[#6A767C] text-sm">
            FDCA Gujarat certified facility following Good Manufacturing
            Practices ensuring products are consistently produced and controlled
            according to quality standards.
          </p>
        </div>
        <div className="bg-white rounded-xl p-8 w-[31.5rem] h-70 flex flex-col gap-2 border border-[#E8ECEE] shadow-[#0000000D]">
          <span className="bg-linear-to-b from-[#0553AE] to-[#0697E0] w-12 h-12 rounded-xl flex justify-center items-center">
            <Shield className=" w-6 h-6 text-white" />
          </span>
          <h3 className="text-2xl">CDSCO</h3>

          <p className="text-[#6A767C] mb-4 text-sm">
            Central Drugs Standard Control Organization
          </p>
          <p className="text-[#6A767C] text-sm">
            Approval from India&apos;s national regulatory body for
            pharmaceuticals and medical devices, ensuring compliance with all
            Indian medical device regulations.
          </p>
        </div>
        <div className="bg-white rounded-xl p-8 w-[31.5rem] h-70 flex flex-col gap-2 border border-[#E8ECEE] shadow-[#0000000D]">
          <span className="bg-linear-to-b from-[#0553AE] to-[#0697E0] w-12 h-12 rounded-xl flex justify-center items-center">
            <Award className=" w-6 h-6 text-white" />
          </span>
          <h3 className="text-2xl">MDR-5 & MD-42</h3>

          <p className="text-[#6A767C] mb-4 text-sm">
            Medical Device Rules Compliance
          </p>
          <p className="text-[#6A767C] text-sm">
            Full compliance with Medical Device Rules ensuring all products meet
            safety and performance requirements set by Indian regulatory
            authorities.
          </p>
        </div>
      </div>
      <div className="bg-[#F4FAFB] mx-[15rem] rounded-xl my-10 p-12">
        <h4 className="text-xl text-black">Additional Recognitions</h4>
        <div className="grid grid-cols-3">
          <span className="flex gap-4 my-4">
            <CircleCheckBig className="text-[#16A249]" />{" "}
            <p>MSME-Udyam Registered</p>
          </span>
          <span className="flex gap-4 my-4">
            <CircleCheckBig className="text-[#16A249]" />{" "}
            <p>Startup India Recognition</p>
          </span>
          <span className="flex gap-4 my-4">
            <CircleCheckBig className="text-[#16A249]" />{" "}
            <p>Trademark (IP India)</p>
          </span>
          <span className="flex gap-4 my-4">
            <CircleCheckBig className="text-[#16A249]" />{" "}
            <p>MFG. Lic: MFG/MD/2023/000116</p>
          </span>
          <span className="flex gap-4 my-4">
            <CircleCheckBig className="text-[#16A249]" />{" "}
            <p>GUJ/MD-42/SUR/00097</p>
          </span>
        </div>
      </div>
      <div className="p-8 pb-0 text-center space-y-8  my-4">
        <h3 className="text-2xl text-[#22282A]">Download Certificates</h3>
        <p className="text-sm text-[#6A767C]">
          Access our complete certification documentation for verification and
          compliance
        </p>
        <div className="flex items-center justify-center gap-4">
          <span className="h-10">
            <Button className="bg-[#FE5E0E] px-4 text-sm h-5 text-white ">
              <Download />
              All Certificates (ZIP)
            </Button>
          </span>
          <span className="h-10">
            <Button className="bg-[#FFFFFF] px-4 text-sm h-5 border border-[#E8ECEE]  text-black ">
              Request Specific Certificate
            </Button>
          </span>
        </div>
      </div>
      <div className="p-8 text-center space-y-8 bg-linear-to-b from-[#F4FAFB] to-[#FFFFFF] my-12 flex flex-col items-center justify-center">
        <div className="w-[60%] space-y-4">
          <h4 className="text-3xl text-[#22282A]">Our Quality Commitment</h4>
          <p className="text-[#6A767C] text-lg">
            Every product leaving our facility undergoes rigorous quality
            control procedures. From raw material inspection to final product
            testing, we ensure that each item meets the highest standards of
            quality and safety.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-65 border-[#22282A14] bg-white shadow-sm p-2 border rounded-lg">
            <p className="text-3xl text-[#0697E0]">100%</p>
            <p className="text-sm text-[#6A767C]">Batch Testing</p>
          </div>
          <div className="w-65 border-[#22282A14] bg-white shadow-sm p-2 border rounded-lg">
            <p className="text-3xl text-[#0697E0]">Zero</p>
            <p className="text-sm text-[#6A767C]">Defect Policy</p>
          </div>
          <div className="w-65 border-[#22282A14] bg-white shadow-sm p-2 border rounded-lg">
            <p className="text-3xl text-[#0697E0]">24/7</p>
            <p className="text-sm text-[#6A767C]">Quality Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
