import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Testimonials from "../components/Home/Testimonials";
import CTA from "../components/layout/CTA";

const Home = () => {
  return (
    <div className="bg-midnight-green">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
