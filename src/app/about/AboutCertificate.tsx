import GlobeIcon from "@/components/CustomIcons/GlobeIcon";
import TargetIcon from "@/components/CustomIcons/TargetIcon";
import { CircleCheckBig } from "lucide-react";

interface VisionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const VisionCard = ({ icon, title, description }: VisionCardProps) => (
  <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 w-full h-auto min-h-[240px] flex flex-col gap-3 border border-[#E8ECEE] shadow-sm">
    {icon}
    <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
    <p className="text-[#6A767C] text-sm sm:text-base leading-relaxed">
      {description}
    </p>
  </div>
);

interface CertificationItemProps {
  title: string;
  description: string;
}

const CertificationItem = ({ title, description }: CertificationItemProps) => (
  <div className="flex shadow-sm shadow-[#22282A14] p-4 rounded-lg gap-4 sm:gap-6 w-full max-w-sm">
    <CircleCheckBig className="text-[#16A249] flex-shrink-0" />
    <span>
      <h4 className="text-[#22282A] text-base sm:text-lg font-medium">
        {title}
      </h4>
      <p className="text-sm text-[#6A767C]">{description}</p>
    </span>
  </div>
);

// Certification data
const certifications = [
  { title: "ISO 9001:2015", description: "Quality Management System" },
  { title: "ISO 13485:2016", description: "Medical Device Quality System" },
  { title: "CE Marking", description: "European Conformity" },
  { title: "GMP Certified", description: "Good Manufacturing Practice" },
  { title: "FDA Approved", description: "Food and Drug Administration" },
  { title: "MSME Registered", description: "Micro, Small & Medium Enterprise" },
];

const AboutCertificate = () => {
  return (
    <div className="my-8 sm:my-14">
      {/* Vision and Target Section */}
      <div className="bg-gradient-to-b from-[#F4FAFB] to-[#FFFFFF] py-8 sm:py-12 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch justify-center max-w-6xl mx-auto">
          <VisionCard
            icon={<TargetIcon />}
            title="Our Target"
            description="To be a globally recognized leader in manufacturing high-quality medical disposables. And to protect and support clinical care by manufacturing and delivering medical-grade, reliable disposable surgical consumables consistently, transparently, and sustainably."
          />
          <VisionCard
            icon={<GlobeIcon />}
            title="Our Vision"
            description="To be recognized globally as a benchmark manufacturer of disposable surgical supplies synonymous with clinical trust, compliance and continuous innovation. We aim to expand our product range, strengthen manufacturing excellence, and enable safer patient care worldwide through scalable, certified manufacturing and reliable distribution."
          />
        </div>
      </div>

      {/* Certifications Section */}
      <div className="text-center my-8 sm:my-14 space-y-4 px-4">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal">
          Certifications & Compliance
        </h3>
        <p className="text-[#6A767C] text-base sm:text-lg max-w-2xl mx-auto">
          Meeting international quality standards for medical device
          manufacturing
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto my-8 sm:my-16">
        {certifications.map((cert, index) => (
          <CertificationItem
            key={index}
            title={cert.title}
            description={cert.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCertificate;
