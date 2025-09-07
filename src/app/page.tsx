import Certification from "@/components/Home/Certification";
import ContactGama from "@/components/Home/ContactGama";
import FeatureSection from "@/components/Home/FeatureSection";
import Hero from "@/components/Home/Hero";
import Why from "@/components/Home/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <Why />
      <Certification />
      <ContactGama />
    </>
  );
}
