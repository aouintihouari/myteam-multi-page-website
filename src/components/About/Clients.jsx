import pattern4 from "../../assets/bg-pattern-about-4.svg";

import TheVerge from "../../assets/logo-the-verge.png";
import JakartaPost from "../../assets/logo-jakarta-post.png";
import TheGuardian from "../../assets/logo-the-guardian.png";
import TechRadar from "../../assets/logo-tech-radar.png";
import Gadgets from "../../assets/logo-gadgets-now.png";

const logos = [
  { name: "The Verge", src: TheVerge, alt: "The Verge" },
  { name: "The Jakarta Post", src: JakartaPost, alt: "The Jakarta Post" },
  { name: "The Guardian", src: TheGuardian, alt: "The Guardian" },
  { name: "TechRadar", src: TechRadar, alt: "TechRadar" },
  { name: "Gadgets Now", src: Gadgets, alt: "Gadgets Now" },
];

const Clients = () => {
  return (
    <section className="bg-sacramento-state-green relative overflow-hidden py-16 md:py-24">
      <div className="absolute -top-24 -left-25 opacity-25 md:-top-24 md:left-0 lg:top-0">
        <img src={pattern4} alt="pattern" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:mb-16 md:text-4xl">
          Some of our clients
        </h2>

        <div className="grid grid-cols-1 items-center justify-items-center gap-12 md:grid-cols-5 md:gap-8">
          {logos.map((logo) => (
            <img
              src={logo.src}
              alt={logo.name}
              className="h-6 w-auto object-contain brightness-0 invert md:h-7"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
