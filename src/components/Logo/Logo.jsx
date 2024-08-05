import css from "./Logo.module.css";
import LogoIcon from "../IconsSVG/LogoIcon";

const Logo = () => {
  return (
    <div className={css.LogoBkg}>
      <LogoIcon className={css.logoIcon} />
    </div>
  );
};

export default Logo;
