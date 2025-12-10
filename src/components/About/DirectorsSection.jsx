import { useState } from "react";
import { Twitter, Linkedin, Plus } from "lucide-react";

import bgPattern2 from "../../assets/bg-pattern-about-2-contact-1.svg";
import bgPattern3 from "../../assets/bg-pattern-home-4-about-3.svg";

import Nikita from "../../assets/avatar-nikita.jpg";
import Christian from "../../assets/avatar-christian.jpg";
import Cruz from "../../assets/avatar-cruz.jpg";
import Drake from "../../assets/avatar-drake.jpg";
import Griffin from "../../assets/avatar-griffin.jpg";
import Aden from "../../assets/avatar-aden.jpg";

const directors = [
  {
    id: 1,
    name: "Nikita Marks",
    role: "Founder & CEO",
    avatar: Nikita, // Placeholder
    quote:
      "It always amazes me how much talent there is in every corner of the globe.",
  },
  {
    id: 2,
    name: "Cristian Duncan",
    role: "Co-founder & COO",
    avatar: Christian,
    quote:
      "Distributed teams gave us the chance to build a truly global company.",
  },
  {
    id: 3,
    name: "Cruz Hamer",
    role: "Co-founder & CTO",
    avatar: Cruz,
    quote: "Technology is at the core of everything we do and aim to achieve.",
  },
  {
    id: 4,
    name: "Drake Heaton",
    role: "Business Development Lead",
    avatar: Drake,
    quote:
      "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
  },
  {
    id: 5,
    name: "Griffin Wise",
    role: "Lead Marketing",
    avatar: Griffin,
    quote:
      "Unique perspectives shape unique products, which is what you need to survive these days.",
  },
  {
    id: 6,
    name: "Aden Allan",
    role: "Head of Talent",
    avatar: Aden,
    quote:
      "Empowered teams create truly amazing products. Set the north star and let them follow it.",
  },
];

const DirectorCard = ({ person }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex h-[253px] w-full flex-col items-center justify-center bg-[#012F34] px-6 py-8">
      <div
        className={`flex flex-col items-center text-center transition-opacity duration-500 ease-in-out ${isOpen ? "hidden opacity-0" : "opacity-100"}`}
      >
        <img
          src={person.avatar}
          alt={person.name}
          className="mb-4 h-24 w-24 rounded-full border-2 border-[#C4FFFE] object-cover"
        />
        <h3 className="text-lg font-bold text-[#79C8C7]">{person.name}</h3>
        <p className="mt-1 text-sm text-white italic">{person.role}</p>
      </div>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-500 ease-in-out ${isOpen ? "z-10 opacity-100" : "-z-10 opacity-0"}`}
      >
        <h3 className="text-rapture-blue mb-2 text-lg font-bold">
          {person.name}
        </h3>
        <p className="mb-6 text-[15px] leading-6 font-medium text-white">
          “{person.quote}”
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-light-coral text-white transition-colors"
          >
            <Twitter size={20} fill="currentColor" strokeWidth={0} />
          </a>
          <a
            href="#"
            className="hover:text-light-coral text-white transition-colors"
          >
            <Linkedin size={20} fill="currentColor" strokeWidth={0} />
          </a>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute -bottom-7 z-20 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-[#79C8C7] hover:bg-[#F67E7E]" : "bg-[#F67E7E] hover:bg-[#79C8C7]"} `}
      >
        <div
          className={`cursor-pointer transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
        >
          <Plus size={28} className="text-deep-jungle-green" strokeWidth={3} />
        </div>
      </button>
    </div>
  );
};

const DirectorsSection = () => {
  return (
    <section className="bg-deep-jungle-green relative min-h-screen overflow-hidden px-6 py-24">
      <div className="absolute top-0 -left-24 opacity-25">
        <img src={bgPattern2} />
      </div>

      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-5xl">
          Meet the directors
        </h2>

        <div className="mb-10 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {directors.map((director) => (
            <DirectorCard key={director.id} person={director} />
          ))}
        </div>
      </div>

      <div className="absolute right-0 bottom-0">
        <img src={bgPattern3} />
      </div>
    </section>
  );
};

export default DirectorsSection;
