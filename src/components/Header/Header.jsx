import css from "./Header.module.css";

import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import UserLogo from '../UserLogo/UserLogo'
import ThemeToggler from '../ThemeToggler/ThemeToggler'

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <Logo></Logo>
        <Navigation></Navigation>
        <UserLogo></UserLogo>
        <ThemeToggler></ThemeToggler>
      </div>
    </div>
  );
};

export default Header;
