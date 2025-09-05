import { Card, CardContent } from "@/components/ui/card";
import { Award, Building, Users } from "lucide-react";
import React from "react";

const AboutInfra = () => {
  return (
    <div className="container-2 px-[4rem] my-[6rem] space-y-8">
      <div className="text-center space-y-4">
        <h4 className="text-4xl font-normal">Infrastructure</h4>
        <p className="text-lg text-[#6A767C]">
          State-of-the-art manufacturing facility with advanced quality control
        </p>
      </div>
      <div className="flex gap-4 items-center justify-center py-[2rem]">
        <Card className="border-[#E8ECEE]">
          <CardContent>
            <Building className="text-[#15ADC1]" />
            <h4 className="text-[#22282A] text-[1rem]">
              Manufacturing Facility
            </h4>
            <p className="text-[#6A767C] text-sm">
              Modern production unit in Surat with automated packaging lines
            </p>
          </CardContent>
        </Card>
        <Card className="border-[#E8ECEE]">
          <CardContent>
            <Award className="text-[#15ADC1]" />
            <h4 className="text-[#22282A] text-[1rem]">Quality Control Labs</h4>
            <p className="text-[#6A767C] text-sm">
              In-house testing facilities for batch validation and quality
              assurance
            </p>
          </CardContent>
        </Card>
        <Card className="border-[#E8ECEE]">
          <CardContent>
            <Users className="text-[#15ADC1]" />
            <h4 className="text-[#22282A] text-[1rem]">Expert Team</h4>
            <p className="text-[#6A767C] text-sm">
              Skilled professionals dedicated to manufacturing excellence
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="shadow-sm border-[#22282A14] border shadow-[#22282A14] bg-[#FFFFFF] p-4 rounded-lg">
        <h4 className="text-[1rem] font-normal text-[#22282A]">
          Factory Address:
        </h4>
        <p className="text-[1rem] font-normal text-[#6A767C]">
          Plot No. 123, GIDC Industrial Estate, Pandesara, Surat - 394221,
          Gujarat, India
        </p>
      </div>
    </div>
  );
};

export default AboutInfra;
