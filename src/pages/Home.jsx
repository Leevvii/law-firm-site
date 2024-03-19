import AboutSection from "../components/AboutSection";
import ChooseSection from "../components/ChooseSection";
import GetStartedSection from "../components/GetStartedSection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ChooseSection />
      <GetStartedSection />
    </>
  );
}
