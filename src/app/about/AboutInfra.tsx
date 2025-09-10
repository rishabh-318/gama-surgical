// AboutInfra.tsx - Improved and Responsive
import { Card, CardContent } from "@/components/ui/card";
import { Award, Building, Users } from "lucide-react";

interface InfraCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfraCard = ({ icon, title, description }: InfraCardProps) => (
  <Card className="border-[#E8ECEE] h-full">
    <CardContent className="p-4 sm:p-6 space-y-3">
      <div className="text-[#15ADC1]">{icon}</div>
      <h4 className="text-[#22282A] text-base sm:text-lg font-medium">
        {title}
      </h4>
      <p className="text-[#6A767C] text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const infrastructure = [
  {
    icon: <Building className="w-6 h-6" />,
    title: "Manufacturing Facility",
    description:
      "Modern production unit in Surat with automated packaging lines",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality Control Labs",
    description:
      "In-house testing facilities for batch validation and quality assurance",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team",
    description: "Skilled professionals dedicated to manufacturing excellence",
  },
];

const AboutInfra = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 my-12 sm:my-24 space-y-8 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-normal">
          Infrastructure
        </h4>
        <p className="text-base sm:text-lg text-[#6A767C] max-w-2xl mx-auto">
          State-of-the-art manufacturing facility with advanced quality control
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 py-8">
        {infrastructure.map((item, index) => (
          <InfraCard key={index} {...item} />
        ))}
      </div>

      <div className="shadow-sm border border-[#E8ECEE] bg-[#FFFFFF] p-4 sm:p-6 rounded-lg">
        <h4 className="text-base sm:text-lg font-medium text-[#22282A] mb-2">
          Factory Address:
        </h4>
        <p className="text-sm sm:text-base text-[#6A767C] leading-relaxed">
          547-548, RJD Textile Park, Hazira Road, Ichchhapore, Surat - 394510,
          Gujarat
        </p>
      </div>
    </div>
  );
};

export default AboutInfra;
