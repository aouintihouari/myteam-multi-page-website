import personIcon from "../../assets/icon-person.svg";
import cogIcon from "../../assets/icon-cog.svg";
import chartIcon from "../../assets/icon-chart.svg";
import bgPatternHome3 from "../../assets/bg-pattern-home-3.svg";

const Features = () => {
  return (
    <section className="bg-sacramento-state-green relative overflow-x-hidden px-4 py-6 md:px-16 md:py-12 lg:px-48">
      <div className="bg-light-coral my-10 block h-2 w-20"></div>
      <div className="flex flex-col text-white lg:flex-row lg:gap-40 lg:text-xl">
        <h2 className="text-l my-15 w-8/12 font-semibold md:w-9/12 md:font-bold">
          Build & manage distributed teams like no one else.
        </h2>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 text-center md:flex-row md:text-left">
            <img
              src={personIcon}
              alt="person icon"
              className="mx-auto h-20 w-20"
            />
            <div>
              <h3 className="text-light-coral text-m">
                Experienced Individuals
              </h3>
              <p className="mt-4 text-xs font-medium text-white">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 text-center md:flex-row md:text-left">
            <img src={cogIcon} alt="cog icon" className="mx-auto h-20 w-20" />
            <div>
              <h3 className="text-light-coral text-m">Easy to Implement</h3>
              <p className="mt-4 text-xs font-medium text-white">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 text-center md:flex-row md:text-left">
            <img
              src={chartIcon}
              alt="chart icon"
              className="mx-auto h-20 w-20"
            />
            <div>
              <h3 className="text-light-coral text-m">Enhanced Productivity</h3>
              <p className="mt-4 text-xs font-medium text-white">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 -right-21 lg:top-auto lg:bottom-0"
          src={bgPatternHome3}
        />
      </div>
    </section>
  );
};

export default Features;
