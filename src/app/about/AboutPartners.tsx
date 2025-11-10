const AboutPartners = () => {
  const touchSafeTags = ["Retail License", "Daily Deliveries", "5000 sq ft Facility"];
  const zainyOverseasTags = ["International Trade", "ISO 9001:2015 Certified", "GMP Certified", "Global Reach"];

  return (
    <div className="pb-12 px-4 sm:px-8 lg:px-16">
      <div className="text-center space-y-2 mb-8 sm:mb-12">
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-normal">
          Distribution Partners
        </h4>
        <p className="text-[#6A767C] text-base sm:text-lg max-w-2xl mx-auto">
          Working with trusted partners for efficient supply chain management
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Touch Safe Surgical */}
        <div className="shadow-sm shadow-[#0000000D] space-y-4 rounded-lg w-full p-6 sm:p-8 bg-gradient-to-b from-[#F4FAFB] to-[#FFFFFF]">
          <h4 className="text-lg sm:text-xl font-medium">
            Touch Safe Surgical - Surat
          </h4>
          <p className="text-[#6A767C] text-sm sm:text-base leading-relaxed">
            Our key distribution partner managing local supply and logistics with
            a 5000 sq ft facility in Surat. Aarchi provides daily order booking,
            retail solutions, and last-mile delivery to healthcare institutions.
          </p>

          <div className="flex flex-wrap gap-2">
            {touchSafeTags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#D6E8FE] text-[#0553AE] rounded-full px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Zainy Overseas */}
        <div className="shadow-sm shadow-[#0000000D] space-y-4 rounded-lg w-full p-6 sm:p-8 bg-gradient-to-b from-[#F4FAFB] to-[#FFFFFF]">
          <h4 className="text-lg sm:text-xl font-medium">
            Zainy Overseas
          </h4>
          <p className="text-[#6A767C] text-sm sm:text-base leading-relaxed">
            Our strategic international partner specializing in global distribution of sterile and non-sterile surgical products. 
            Based at RJD Textile Park, Hazira Road, Ichchhapore, Surat, Zainy Overseas ensures quality compliance and 
            international market penetration with ISO 9001:2015 and GMP certifications.
          </p>

          <div className="flex flex-wrap gap-2">
            {zainyOverseasTags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#D6E8FE] text-[#0553AE] rounded-full px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPartners;
