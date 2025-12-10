import patternHome1 from "../../assets/bg-pattern-home-1.svg";
import patternHome2 from "../../assets/bg-pattern-home-2.svg";

const Hero = () => {
  return (
    <section className="relative px-5 py-15 lg:px-48 lg:py-20">
      <img className="absolute -left-25 hidden lg:block" src={patternHome1} />
      <article className="text-center lg:flex lg:text-left">
        <h1 className="text-l lg:text-xxl font-bold text-white md:mx-auto md:w-1/2 md:text-xl lg:mx-0 lg:w-1/2">
          Find the best <span className="text-light-coral">talent</span>
        </h1>
        <div className="mx-auto mt-8 mb-35 w-8/12 text-white lg:w-4/12">
          <div className="bg-rapture-blue mb-10 hidden h-2 w-20 lg:block"></div>
          <p>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </article>
      <img
        className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-1/2 lg:left-10/12"
        src={patternHome2}
      />
    </section>
  );
};

export default Hero;
