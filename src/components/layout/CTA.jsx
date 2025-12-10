import Button from "../ui/Button";
import bgPattern6 from "../../assets/bg-pattern-home-6-about-5.svg";

const CTA = () => {
  return (
    <section className="bg-light-coral relative z-30 flex flex-col items-center justify-between px-4 py-6 md:flex-row md:px-16 md:py-12 lg:px-48">
      <h4 className="text-sacramento-state-green text-l md:text-l z-40 mt-15 mb-10 ml-10 text-center md:mt-10 md:mb-20 md:text-left">
        Ready to get started?
      </h4>
      <Button variant="secondary" className="mb-15 md:mb-10" />
      <img className="absolute bottom-0 left-0 -z-10" src={bgPattern6} />
    </section>
  );
};

export default CTA;
