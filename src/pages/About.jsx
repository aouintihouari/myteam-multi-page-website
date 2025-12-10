import Clients from "../components/About/Clients";
import DirectorsSection from "../components/About/DirectorsSection";
import Hero from "../components/About/Hero";
import CTA from "../components/layout/CTA";

const About = () => {
  return (
    <div>
      <Hero />
      <DirectorsSection />
      <Clients />
      <CTA />
    </div>
  );
};

export default About;
