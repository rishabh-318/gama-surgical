import React from "react";
import AboutHero from "./AboutHero";
import AboutCertificate from "./AboutCertificate";
import AboutInfra from "./AboutInfra";
import AboutPartners from "./AboutPartners";

const About = () => {
  return (
    <div>
      <AboutHero />
      <div>
        {/* certi and comp */}
        <AboutCertificate />
        {/* infra */}
        <AboutInfra />
      </div>
      <AboutPartners />
    </div>
  );
};

export default About;
