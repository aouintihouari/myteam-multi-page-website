import kady from "../../assets/avatar-kady.jpg";
import aiysha from "../../assets/avatar-aiysha.jpg";
import arthur from "../../assets/avatar-arthur.jpg";
import quotesIcon from "../../assets/icon-quotes.svg";
import pattern4 from "../../assets/bg-pattern-home-4-about-3.svg";
import pattern5 from "../../assets/bg-pattern-home-5.svg";

const Testimonials = () => {
  return (
    <section className="bg-deep-jungle-green relative px-4 py-6 md:px-16 md:py-12 lg:px-48">
      <img src={pattern4} className="absolute top-0 left-0" />
      <img src={pattern5} className="absolute right-0 bottom-0" />
      <h4 className="mt-20 text-center text-xl text-white">
        Delivering real results for top companies. Some of our{" "}
        <span className="text-rapture-blue">success stories.</span>
      </h4>

      <section className="mt-30 grid-cols-3 gap-10 lg:grid">
        <div className="relative mb-10 text-center text-white lg:mb-0">
          <img
            className="absolute -top-6 left-1/2 z-0 w-12 -translate-x-1/2"
            src={quotesIcon}
          />

          <blockquote className="relative z-10 mb-5">
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </blockquote>

          <cite className="text-rapture-blue my-20 font-bold not-italic">
            Kady Baker
          </cite>
          <p className="my-5 italic">Product Manager at Bookmark</p>
          <img
            className="mx-auto w-20 rounded-full border-2 border-white"
            src={kady}
            alt="Kady Baker"
          />
        </div>

        <div className="relative mt-20 mb-10 text-center text-white lg:mt-0 lg:mb-0">
          <img
            className="absolute -top-6 left-1/2 z-0 w-12 -translate-x-1/2"
            src={quotesIcon}
          />

          <blockquote className="relative z-10 mb-5">
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </blockquote>

          <cite className="text-rapture-blue my-20 font-bold not-italic">
            Aiysha Reese
          </cite>
          <p className="my-5 italic">Founder of Manage</p>
          <img
            className="mx-auto w-20 rounded-full border-2 border-white"
            src={aiysha}
            alt="Aiysha Reese"
          />
        </div>

        <div className="relative mt-20 mb-20 text-center text-white lg:mt-0 lg:mb-0">
          <img
            className="absolute -top-6 left-1/2 z-0 w-12 -translate-x-1/2"
            src={quotesIcon}
          />

          <blockquote className="relative z-10 mb-5">
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </blockquote>

          <cite className="text-rapture-blue font-bold not-italic">
            Arthur Clarke
          </cite>
          <p className="my-5 italic">Co-founder of MyPhysio</p>
          <img
            className="mx-auto w-20 rounded-full border-2 border-white"
            src={arthur}
            alt="Arthur Clarke"
          />
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
