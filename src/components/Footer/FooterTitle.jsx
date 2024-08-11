import css from './Footer.module.css';

import LogoInvIcon from "../IconsSVG/LogoInvIcon";

 const FooterTitle = () => {
  return (
    <div className={css.title}>
      <LogoInvIcon />
      So Yummy
    </div>
  );
}

export default FooterTitle;