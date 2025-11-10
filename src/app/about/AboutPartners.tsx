const AboutPartners = () => {
  const partners = [
    {
      name: "Touch Safe Surgical – Surat",
      description:
        "Our key distribution partner managing local supply and logistics with a 5000 sq ft facility in Surat. Touch Safe Surgical provides daily order booking, retail solutions, and last-mile delivery to healthcare institutions.",
      tags: ["Retail License", "Daily Deliveries", "5000 sq ft Facility"],
    },
    {
      name: "Mediox – Ahmedabad",
      description:
        "A key regional partner overseeing distribution and logistics with a state-of-the-art 5000 sq ft warehouse in Ahmedabad. Mediox focuses on inventory management, timely retail fulfillment, and daily supply chain operations to healthcare providers and pharmacies.",
      tags: ["Retail License", "Daily Deliveries", "5000 sq ft Facility"],
    },
    {
      name: "Aarchi – Surat",
      description:
        "Our trusted distribution partner in Surat, operating a 5000 sq ft logistics facility dedicated to efficient local supply management. Aarchi ensures daily order processing, retail support, and last-mile delivery to healthcare institutions across the region.",
      tags: ["Retail License", "Daily Deliveries", "5000 sq ft Facility"],
    },
  ];
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

      {partners.map((partner, index) => (
        <div
          key={`partner-${index}`}
          className="shadow-sm shadow-[#0000000D] space-y-4 rounded-lg w-full max-w-4xl mx-auto p-6 sm:p-8 bg-gradient-to-b from-[#F4FAFB] to-[#FFFFFF] m-4"
        >
          <h4 className="text-lg sm:text-xl font-medium">{partner.name}</h4>
          <p className="text-[#6A767C] text-sm sm:text-base leading-relaxed">
            {partner.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {partner.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#D6E8FE] text-[#0553AE] rounded-full px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutPartners;
