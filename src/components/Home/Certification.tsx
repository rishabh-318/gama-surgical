import React, { ReactNode } from "react";
import BadgeIcon from "../CustomIcons/BadgeIcon";
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
  icon: React.ElementType; // ✅ Accepts any React component
  code: string;
  about: string;
}

const Card = ({ icon: Icon, code, about }: CardProps) => {
  return (
    <div className="w-54 h-42 aspect-square flex flex-col gap-2 justify-center items-center border border-[#DAE0E7] shadow-sm rounded-lg">
      <div className="rounded-full w-16 h-16 bg-[#DBECFA] flex items-center justify-center">
        <Icon
          textcolor="#FE5E0E"
          bgcolr="transparent"
          className="w-10 h-10 p-1 text-[#FE5E0E] "
        />
      </div>
      <p className="font-semibold">{code}</p>
      <p className="text-sm text-[#52637A]">{about}</p>
    </div>
  );
};

const Certification = () => {
  return (
    <div className="px-2 py-4 text-center font-Montserrat">
      <div>
        <h4 className="text-4xl my-2 font-bold">
          Quality Certifications & Compliance
        </h4>
        <p className="my-2 text-lg text-[#52637A]">
          Meeting global standards with internationally recognized
          certifications
        </p>
        <span className="text-sm text-[#52637A] flex items-center justify-center my-2">
          <p>Mfg. Lic no. MFG/MD/2023/000116</p> <Dot />
          <p>MDR-5 & MD 42 Licensed</p>
        </span>

        <div className="flex items-center justify-center gap-6 my-8">
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
        <div className="border-[#1679CA33] bg-[#DBECFA] px-4 h-[32rem] rounded-lg flex gap-8 m-11 justify-center items-center">
          {/* left text section */}
          <div className="text-start w-1/2 p-4">
            <h4 className="font-bold text-black text-2xl">
              Committed to Quality Excellence
            </h4>
            <p className="text-[#52637A] ">
              Our state-of-the-art manufacturing facility in Surat, Gujarat
              operates under strict quality control measures. Every product
              undergoes rigorous testing in our in-house laboratory to ensure
              compliance with international standards.
            </p>
            <ul className="list-none space-y-2">
              <li className="flex gap-2">
                <CircleCheckBig className="text-[#21C45D]" />{" "}
                <p>Strict raw material quality checks</p>
              </li>
              <li className="flex gap-2">
                <CircleCheckBig className="text-[#21C45D]" />{" "}
                <p>In-process quality monitoring</p>
              </li>
              <li className="flex gap-2">
                <CircleCheckBig className="text-[#21C45D]" />{" "}
                <p>Final product inspection & testing</p>
              </li>
              <li className="flex gap-2">
                <CircleCheckBig className="text-[#21C45D]" />{" "}
                <p>Batch traceability & documentation</p>
              </li>
            </ul>
            <div className="my-4 gap-4 flex font-Inter">
              <Button className="bg-[#FE5E0E] hover:bg-[#FE5E0E] shadow-sm text-sm">
                View All Certificate <FileText className="w-5 h-5 text-white" />
              </Button>
              <Button className="bg-white hover:bg-white/10 shadow-sm text-black ">
                Download Quality Policy
              </Button>
            </div>
          </div>

          {/* certificate images */}

          <div className="w-1/2 flex flex-col items-center justify-center m-8 p-4 bg-white rounded-lg">
            <Image
              src="/images/certi1.png"
              alt="certificate 1"
              width={570}
              height={530}
              className="rounded-lg shadow-sm"
              //   fill
            />
            {/* <Image
              src="/images/certi2.png"
              alt="certificate 2"
              width={236}
              height={330}
            /> */}
            <p className="m-2 text-[#52637A] text-sm ">
              Our certifications ensure that every product meets the highest
              standards of quality and safety
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
