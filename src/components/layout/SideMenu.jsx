import { NavLink } from "react-router";

import Button from "../ui/Button";
import closeIcon from "../../assets/icon-close.svg";
import bgSidebarPattern from "../../assets/bg-pattern-about-1-mobile-nav-1.svg";

const SideMenu = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-40 flex">
      <button
        onClick={onClose}
        className="absolute top-6 right-4 z-50 mt-6 mr-3"
        aria-label="Close menu"
      >
        <img src={closeIcon} alt="close" />
      </button>

      <div className="flex-1 bg-black/50" onClick={onClose} />

      <div className="bg-police-blue flex h-screen w-64 flex-col p-8 pt-20">
        <ul className="mt-6 ml-4 flex flex-col gap-6 font-bold text-white">
          <li>
            <NavLink
              to="/"
              onClick={onClose}
              className="text-lg transition-opacity hover:opacity-80"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={onClose}
              className="text-lg transition-opacity hover:opacity-80"
            >
              about
            </NavLink>
          </li>
          <li className="mt-4">
            <Button variant="primary" className="" />
          </li>
        </ul>
        <img
          className="absolute -right-[24vw] bottom-30"
          src={bgSidebarPattern}
        />
      </div>
    </div>
  );
};

export default SideMenu;
