import GlobeIcon from "@/components/CustomIcons/GlobeIcon";
import TargetIcon from "@/components/CustomIcons/TargetIcon";
import { CircleCheckBig } from "lucide-react";
import React from "react";

const AboutCertificate = () => {
  return (
    <>
      <div className="my-14 ">
        <div className="bg-linear-to-b from-[#F4FAFB] to-[#FFFFFF] py-[2rem] px-[4rem]">
          <div className="flex gap-16 items-center justify-between my-8  container-2">
            <div className="bg-white rounded-xl p-8 w-[45%] h-60 flex flex-col gap-2 border border-[#E8ECEE] shadow-[#0000000D]">
              <TargetIcon />
              <h3>Our Target</h3>
              <p className="text-[#6A767C] text-sm">
                To be a globally recognized leader in manufacturing high-quality
                medical disposables. And to protect and support clinical care by
                manufacturing and delivering medical-grade, reliable disposable
                surgical consumables consistently, transparently, and
                sustainably.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 w-[45%] h-60 flex flex-col gap-2 border border-[#E8ECEE] shadow-[#0000000D]">
              <GlobeIcon />
              <h3>Our Vision</h3>
              <p className="text-[#6A767C] text-sm">
                To be recognized globally as a benchmark manufacturer of
                disposable surgical supplies synonymous with clinical trust,
                compliance and continuous innovation. We aim to expand our
                product range, strengthen manufacturing excellence, and enable
                safer patient care worldwide through scalable, certified
                manufacturing and reliable distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* cert section */}
      <div className="text-center my-14 space-y-4">
        <h3 className="text-4xl font-normal">Certifications & Compliance</h3>
        <p className="text-[#6A767C] text-lg">
          Meeting international quality standards for medical device
          manufacturing
        </p>
      </div>
      <div className="flex flex-wrap px-[4rem] gap-12 items-center justify-center my-16 ">
        <div className="flex shadow-sm shadow-[#22282A14] p-4 rounded-lg gap-6 w-100">
          <CircleCheckBig className="text-[#16A249]" />
          <span>
            <h4 className="text-[#22282A] text-[1rem]">ISO 9001:2015</h4>
            <p className="text-sm text-[#6A767C]">Quality Management System</p>
          </span>
        </div>
        <div className="flex shadow-sm shadow-[#22282A14] p-4 rounded-lg gap-6 w-100">
          <CircleCheckBig className="text-[#16A249]" />
          <span>
            <h4 className="text-[#22282A] text-[1rem]">ISO 9001:2015</h4>
            <p className="text-sm text-[#6A767C]">Quality Management System</p>
          </span>
        </div>
        <div className="flex shadow-sm shadow-[#22282A14] p-4 rounded-lg gap-6 w-100">
          <CircleCheckBig className="text-[#16A249]" />
          <span>
            <h4 className="text-[#22282A] text-[1rem]">ISO 9001:2015</h4>
            <p className="text-sm text-[#6A767C]">Quality Management System</p>
          </span>
        </div>
        <div className="flex shadow-sm shadow-[#22282A14] p-4 rounded-lg gap-6 w-100">
          <CircleCheckBig className="text-[#16A249]" />
          <span>
            <h4 className="text-[#22282A] text-[1rem]">ISO 9001:2015</h4>
            <p className="text-sm text-[#6A767C]">Quality Management System</p>
          </span>
        </div>
        <div className="flex shadow-sm shadow-[#22282A14] p-4 rounded-lg gap-6 w-100">
          <CircleCheckBig className="text-[#16A249]" />
          <span>
            <h4 className="text-[#22282A] text-[1rem]">ISO 9001:2015</h4>
            <p className="text-sm text-[#6A767C]">Quality Management System</p>
          </span>
        </div>
        <div className="flex shadow-sm shadow-[#22282A14] p-4 rounded-lg gap-6 w-100">
          <CircleCheckBig className="text-[#16A249]" />
          <span>
            <h4 className="text-[#22282A] text-[1rem]">ISO 9001:2015</h4>
            <p className="text-sm text-[#6A767C]">Quality Management System</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutCertificate;
