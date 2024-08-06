import css from "./Header.module.css";
import hamburger from "./HamburgerMenu.module.css";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserLogo from "../UserLogo/UserLogo";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import HamburgerNavigation from "../Navigation/HamburgerNavigation";

const Header = () => {
  const handleCheckboxChange = (event) => {
    const sidebar = document.getElementById("navList");
    sidebar.style.display = event.target.checked ? "block" : "none";
  };
  return (
    <div className={css.header}>
      <label className={hamburger.hamburgerMenu}>
        <input type="checkbox" onChange={handleCheckboxChange} />
      </label>
      <aside className={hamburger.sidebar} id="navList">
        <div className={css.hamburgerLogo}>
          <Logo />
        </div>
        <HamburgerNavigation></HamburgerNavigation>
      </aside>
      <div className={css.container}>
        <Logo></Logo>
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
