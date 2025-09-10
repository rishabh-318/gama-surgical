// AboutHero.tsx - Improved and Responsive
interface FeatureCardProps {
  title: string;
  subheading: string;
}

const FeatureCard = ({ title, subheading }: FeatureCardProps) => (
  <div className="bg-[#F4FAFB] rounded-xl p-3 sm:p-4 text-center border border-[#E8ECEE]">
    <div className="flex justify-center items-center gap-2">
      <h3 className="text-[#15ADC1] font-semibold text-base sm:text-lg mb-2">
        {title}
      </h3>
    </div>
    <p className="text-center text-xs sm:text-sm text-[#6A767C]">
      {subheading}
    </p>
  </div>
);

const stats = [
  { title: "2020", subheading: "Established" },
  { title: "50+", subheading: "Products" },
  { title: "500+", subheading: "Clients" },
  { title: "9+", subheading: "Certifications" },
];

const AboutHero = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <header className="flex flex-col items-center justify-center text-center my-6 sm:my-9">
        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4">
          About GAMA Surgical
        </h2>
        <p className="text-[#6A767C] text-base sm:text-lg lg:text-xl max-w-3xl">
          Leading marketing company representing top manufacturers of disposable
          medical supplies
        </p>
      </header>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 my-8 sm:my-14">
          {/* Left section */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-normal">Our Story</h3>
            <div className="space-y-4">
              <p className="text-[#6A767C] text-sm sm:text-base leading-relaxed">
                GAMA Surgical India Pvt. Ltd. is a leading manufacturer and
                supplier of sterile and non-sterile disposable surgical
                products. With over 15 years of experience, we have established
                ourselves as a trusted partner for healthcare institutions
                across India and globally.
              </p>
              <p className="text-[#6A767C] text-sm sm:text-base leading-relaxed">
                Founded with a single purpose to supply hospitals, clinics and
                healthcare professionals with dependable, high-quality
                disposable surgical consumables GAMA Surgical India has grown
                from a small manufacturing unit into a trusted partner for
                medical facilities across India and abroad. Rooted in
                Surat&apos;s industrial ecosystem, we blended traditional
                manufacturing discipline with modern quality systems to deliver
                products that clinicians rely on every day: from dressings and
                gauze to surgical drapes, masks and catheters. Our beginnings
                were humble; our commitment to patient safety and consistent
                delivery is what scaled us.
              </p>
            </div>
          </div>

          {/* Right section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md">
              {stats.map((stat, index) => (
                <FeatureCard
                  key={index}
                  title={stat.title}
                  subheading={stat.subheading}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
