import { NavLink } from "react-router";
import logo from "../../assets/logo.svg";
import SocialMediaIcons from "../ui/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="bg-dark-green w-screen max-w-screen justify-between overflow-hidden lg:flex">
      <footer className="flex flex-col px-4 py-6 text-white md:flex-row md:justify-between md:px-16 md:py-12 lg:flex-row lg:justify-start lg:px-48">
        <div className="mx-auto flex flex-col md:mx-0">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className="mx-auto mt-6 flex md:mx-0">
            <li className="hover:text-light-coral cursor-pointer duration-300">
              <NavLink to="/">home</NavLink>
            </li>
            <li className="hover:text-light-coral ml-8 cursor-pointer duration-300">
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
          <div className="mx-auto mb-10 hidden md:mx-0 md:block lg:hidden">
            <SocialMediaIcons />
          </div>
        </div>
        <div className="mt-10 text-center md:mt-0 md:text-right lg:ml-40 lg:text-left">
          <p>
            987 Hillcrest Lane
            <br />
            Irvine, CA
            <br />
            California 92714
            <br />
            Call Us : 949-833-7432
          </p>
          <div className="mx-auto mb-10 flex justify-center md:mx-0 md:hidden lg:hidden">
            <SocialMediaIcons />
          </div>
          <p className="mt-8 lg:hidden">Copyright 2020. All Rights Reserved</p>
        </div>
      </footer>
      <div className="hidden flex-col items-end lg:flex lg:px-48">
        <SocialMediaIcons />
        <p className="mt-13 hidden text-white lg:block">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
