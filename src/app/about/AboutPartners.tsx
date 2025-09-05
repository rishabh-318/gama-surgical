import React from "react";

const AboutPartners = () => {
  return (
    <div className="pb-12">
      {/* dist  */}
      <div className="text-center space-y-2">
        <h4 className="text-4xl font-normal">Distribution Partners</h4>
        <p className="text-[#6A767C] text-lg">
          Working with trusted partners for efficient supply chain management
        </p>
      </div>
      <div className="shadow-sm shadow-[#0000000D] space-y-2 rounded-lg w-[70%] m-auto my-18 p-8 bg-linear-to-b from-[#F4FAFB] to-[#FFFFFF]">
        <h4 className="text-xl font-normal">Aarchi Distributor - Surat</h4>
        <p className="text-[#6A767C] text-[1rem]">
          Our key distribution partner managing local supply and logistics with
          a 5000 sq ft facility in Surat. Aarchi provides daily order booking,
          retail solutions, and last-mile delivery to healthcare institutions.
        </p>

        <div className="space-x-2">
          <span className="bg-[#D6E8FE] text-[#0553AE] rounded-full px-2">
            Retail License
          </span>
          <span className="bg-[#D6E8FE] text-[#0553AE] rounded-full px-2">
            Daily Deliveries
          </span>
          <span className="bg-[#D6E8FE] text-[#0553AE] rounded-full px-2">
            5000 sq ft Facility
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutPartners;
