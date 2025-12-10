import { useState } from "react";
import { NavLink } from "react-router";

import hamburgerIcon from "../../assets/icon-hamburger.svg";
import logo from "../../assets/logo.svg";
import Button from "../ui/Button";
import SideMenu from "./SideMenu";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <nav className="bg-midnight-green relative z-20 flex items-center justify-between px-4 py-6 md:px-16 md:py-12 lg:px-48">
        <div className="flex">
          <img src={logo} alt="logo" />
          <ul className="ml-5 hidden items-center gap-4 text-white md:flex">
            <li className="hover:text-light-coral ml-10 duration-300">
              <NavLink to="/">home</NavLink>
            </li>
            <li className="hover:text-light-coral ml-5 duration-300">
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <Button variant="primary" />
        </div>
        <button
          className="relative z-100 block md:hidden"
          onClick={toggleNav}
          aria-label="Toggle menu"
        >
          {!toggleMenu && <img src={hamburgerIcon} alt="hamburger" />}
        </button>
      </nav>

      {toggleMenu && <SideMenu onClose={toggleNav} />}
    </>
  );
};

export default Header;
