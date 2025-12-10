import { useForm } from "react-hook-form";

import pattern1 from "../assets/bg-pattern-about-2-contact-1.svg";
import pattern2 from "../assets/bg-pattern-contact-2.svg";
import personIcon from "../assets/icon-person.svg";
import cogIcon from "../assets/icon-cog.svg";
import chartIcon from "../assets/icon-chart.svg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent!");
  };

  return (
    <section className="bg-midnight-green relative w-full overflow-hidden font-sans">
      <div className="absolute top-4 -left-8 z-0 hidden md:-left-25 md:block">
        <img src={pattern1} alt="pattern 1" />
      </div>

      <div className="absolute right-0 bottom-0 z-0 translate-x-1/2 translate-y-1/2">
        <img src={pattern2} alt="pattern 2" />
      </div>

      <div className="relative z-10 px-6 py-20 md:py-24 lg:px-48 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="md:text-xxl -mt-10 mb-5 text-4xl font-bold text-white">
              Contact
            </h1>
            <h2 className="text-light-coral text-m md:text-l mb-8 font-bold md:mb-12">
              Ask us about
            </h2>

            <div className="w-full max-w-md space-y-6 md:space-y-8">
              <div className="flex items-center gap-6 text-left md:flex-row lg:justify-start">
                <div className="relative shrink-0">
                  <img src={personIcon} alt="" className="h-18 w-18" />
                </div>
                <p className="text-lg font-semibold text-white">
                  The quality of our talent network
                </p>
              </div>

              <div className="flex w-11/12 items-center gap-6 text-left md:flex-row lg:justify-start">
                <div className="relative shrink-0">
                  <img src={cogIcon} alt="" className="h-18 w-18" />
                </div>
                <p className="text-lg font-semibold text-white">
                  Usage & implementation of our software
                </p>
              </div>

              <div className="flex w-11/12 items-center gap-6 text-left md:flex-row lg:justify-start">
                <div className="relative shrink-0">
                  <img src={chartIcon} alt="" className="h-18 w-18" />
                </div>
                <p className="text-lg font-semibold text-white">
                  How we help drive innovation
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 w-full max-w-lg lg:mx-0 lg:mt-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative pb-5">
                <input
                  type="text"
                  placeholder="Name"
                  className={`w-full border-b bg-transparent pb-4 pl-4 transition-colors outline-none ${
                    errors.name
                      ? "border-light-coral text-light-coral placeholder-[#F67E7E]/60"
                      : "border-white text-white placeholder-white/70 focus:border-[#79C8C7]"
                  } `}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="absolute bottom-0 left-4 mt-1 text-[10px] font-bold text-[#F67E7E] italic md:text-xs">
                    This field is required
                  </span>
                )}
              </div>
              <div className="relative pb-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full border-b bg-transparent pb-4 pl-4 transition-colors outline-none ${
                    errors.email
                      ? "border-light-coral text-light-coral placeholder-[#F67E7E]/60"
                      : "border-white text-white placeholder-white/70 focus:border-[#79C8C7]"
                  } `}
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <span className="text-light-coral absolute bottom-0 left-4 mt-1 text-[10px] font-bold italic md:text-xs">
                    {errors.email.type === "pattern"
                      ? "Invalid email address"
                      : "This field is required"}
                  </span>
                )}
              </div>
              <div className="relative pb-5">
                <input
                  type="text"
                  placeholder="Company Name"
                  className={`w-full border-b bg-transparent pb-4 pl-4 transition-colors outline-none ${
                    errors.company
                      ? "border-light-coral text-light-coral placeholder-[#F67E7E]/60"
                      : "border-white text-white placeholder-white/70 focus:border-[#79C8C7]"
                  } `}
                  {...register("company", { required: true })}
                />
                {errors.company && (
                  <span className="absolute bottom-0 left-4 mt-1 text-[10px] font-bold text-[#F67E7E] italic md:text-xs">
                    This field is required
                  </span>
                )}
              </div>

              <div className="relative pb-5">
                <input
                  type="text"
                  placeholder="Title"
                  className={`w-full border-b bg-transparent pb-4 pl-4 transition-colors outline-none ${
                    errors.title
                      ? "border-light-coral text-light-coral placeholder-[#F67E7E]/60"
                      : "border-white text-white placeholder-white/70 focus:border-[#79C8C7]"
                  } `}
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-light-coral absolute bottom-0 left-4 mt-1 text-[10px] font-bold italic md:text-xs">
                    This field is required
                  </span>
                )}
              </div>

              <div className="relative pb-5">
                <textarea
                  rows="3"
                  placeholder="Message"
                  className={`w-full resize-none border-b bg-transparent pb-1 pl-4 transition-colors outline-none ${
                    errors.message
                      ? "border-light-coral text-light-coral placeholder-[#F67E7E]/60"
                      : "border-white text-white placeholder-white/70 focus:border-[#79C8C7]"
                  } `}
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <span className="absolute bottom-0 left-4 mt-1 text-[10px] font-bold text-[#F67E7E] italic md:text-xs">
                    This field is required
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="pointer text-deep-jungle-green mt-2 cursor-pointer rounded-full border-2 bg-white px-8 py-3 font-bold transition-colors hover:border-white hover:bg-transparent hover:text-white"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
