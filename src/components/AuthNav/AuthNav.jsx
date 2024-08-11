import css from "./AuthNav.module.css";

import LogoIcon from "../IconsSVG/LogoIcon";
import AuthNavWelcome from "./AuthNavWelcome";
import AuthOptions from "./AuthNavOptions";


const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <LogoIcon className={css.logoIcon} />
      <AuthNavWelcome />
      <AuthOptions />
    </div>
  );
};

export default AuthNav;
