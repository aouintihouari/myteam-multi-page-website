import { NavLink } from "react-router";
import clsx from "clsx";

const Button = ({ variant = "primary", disabled = false, className = "" }) => {
  const baseStyles =
    "flex font-bold items-center justify-center duration-300 hover:cursor-pointer font-bold hover:text-midnight-green rounded-4xl border-2";
  const variants = {
    primary: `border-white text-white hover:bg-white w-36 h-12 md:h-10 md:w-28`,
    secondary: `border-sacramento-state-green text-sacramento-state-green hover:bg-sacramento-state-green hover:text-white w-36 h-12 md:h-10 md:w-38`,
    tertiary: ``,
  };

  return (
    <NavLink to="/contact-us">
      <button
        disabled={disabled}
        className={clsx(baseStyles, variants[variant], className)}
      >
        contact us
      </button>
    </NavLink>
  );
};

export default Button;
