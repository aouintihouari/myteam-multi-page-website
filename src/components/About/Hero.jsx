import bgPattern1 from "../../assets/bg-pattern-about-1-mobile-nav-1.svg";

const Hero = () => {
  return (
    <section className="bg-midnight-green relative gap-50 overflow-hidden px-5 py-15 text-center text-white lg:flex lg:px-48 lg:py-20 lg:text-left">
      <h1 className="text-xl lg:text-xl">About</h1>
      <div className="relative z-30 mb-20">
        <div className="bg-light-coral mb-10 hidden h-2 w-20 lg:block"></div>
        <p className="text-m mx-auto mt-10 font-light md:w-9/12 lg:mx-0 lg:mt-0 lg:w-9/12">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </div>
      <div className="overflow-hidden">
        <img
          className="absolute -right-27 -bottom-27 z-20 md:bottom-0"
          src={bgPattern1}
        />
      </div>
    </section>
  );
};

export default Hero;
