import css from "./Header.module.css";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserLogo from "../UserLogo/UserLogo";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import HamburgerNavigation from "../Navigation/HamburgerNavigation";

const Header = () => {
  return (
    <div>
      <nav className={css.nav} role="navigation">
        <div className={css.menuToggle}>
          <div className={css.container}>
            <Logo></Logo>
            <Navigation></Navigation>
            <div className={css.rightHeader}>
              <UserLogo></UserLogo>
              <ThemeToggler></ThemeToggler>
            </div>
          </div>
          <input className={css.input} type="checkbox" />
          <div className={css.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={css.menu}>
            <li>
              <div className={css.hamburgerLogo}>
                <Logo />
              </div>
            </li>
            <li>
              <HamburgerNavigation></HamburgerNavigation>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
