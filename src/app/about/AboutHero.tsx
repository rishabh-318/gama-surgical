import React from "react";

interface FeatureCardProps {
  title: string;
  subheading: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subheading }) => (
  <div className="bg-[#F4FAFB]  rounded-xl p-4 w-50 text-center text-3xl border border-[#E8ECEE]">
    <div className="flex justify-center items-center gap-2">
      <h3 className="text-[#15ADC1] font-semibold text-lg mb-2">{title}</h3>
    </div>
    <p className="text-center text-sm text-[#6A767C]">{subheading}</p>
  </div>
);

const AboutHero = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center text-center m-9 ">
        <h2 className="font-semibold text-5xl">About GAMA Surgical</h2>
        <p className="text-[#6A767C] text-xl">
          Leading marketing company representing top manufacturers of disposable
          medical supplies
        </p>
      </header>
      <main>
        <div className="container-2 flex gap-8 my-14 px-[4rem]">
          {/* left section */}
          <div className="w-1/2 space-y-4">
            <h3 className="text-3xl font-normal ">Our Story</h3>
            <p className="text-[#6A767C] text-[1rem]">
              GAMA Surgical India Pvt. Ltd. is a leading manufacturer and
              supplier of sterile and non-sterile disposable surgical products.
              With over 15 years of experience, we have established ourselves as
              a trusted partner for healthcare institutions across India and
              globally.
            </p>
            <p className="text-[#6A767C] text-[1rem]">
              Founded with a single purpose to supply hospitals, clinics and
              healthcare professionals with dependable, high-quality disposable
              surgical consumables GAMA Surgical India has grown from a small
              manufacturing unit into a trusted partner for medical facilities
              across India and abroad. Rooted in Surat’s industrial ecosystem,
              we blended traditional manufacturing discipline with modern
              quality systems to deliver products that clinicians rely on every
              day: from dressings and gauze to surgical drapes, masks and
              catheters. Our beginnings were humble; our commitment to patient
              safety and consistent delivery is what scaled us.
            </p>
          </div>
          {/* right section */}
          <div className="w-1/2 flex items-center justify-center p-6">
            <div className="p-4 grid grid-cols-2 gap-2">
              <FeatureCard title="2000" subheading="Establish" />
              <FeatureCard title="50+" subheading="Products" />
              <FeatureCard title="500+" subheading="Clients" />
              <FeatureCard title="9+" subheading="Certifications" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutHero;
