import css from "./Header.module.css";
import hamburger from "./HamburgerMenu.module.css";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserLogo from "../UserLogo/UserLogo";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import HamburgerNavigation from "../Navigation/HamburgerNavigation";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <Logo></Logo>
        <label className={hamburger.hamburgerMenu}>
          <input type="checkbox" />
        </label>
        <aside className={hamburger.sidebar} id="navList">
          <HamburgerNavigation></HamburgerNavigation>
        </aside>
        <Navigation></Navigation>
        <div className={css.rightHeader}>
          <UserLogo></UserLogo>
          <ThemeToggler></ThemeToggler>
        </div>
      </div>
    </div>
  );
};

export default Header;
