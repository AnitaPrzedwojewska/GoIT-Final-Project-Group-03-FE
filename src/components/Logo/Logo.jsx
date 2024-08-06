import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import LogoIcon from "../IconsSVG/LogoIcon";

const Logo = () => {
  return (
    <NavLink to="/" className={css.LogoBkg}>
      <LogoIcon className={css.logoIcon} />
    </NavLink>
  );
};

export default Logo;
