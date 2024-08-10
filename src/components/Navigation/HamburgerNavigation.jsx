import { NavLink } from "react-router-dom";
import hamburger from "./HamburgerNavigation.module.css";

import SearchIcon from "../IconsSVG/SearchIcon";

const HamburgerNavigation = () => {
  return (
    <ul className={hamburger.navList}>
      <li>
        <NavLink className={hamburger.link} to="/categories/Breakfast">
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink className={hamburger.link} to="/add">
          Add recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={hamburger.link} to="/my">
          My recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={hamburger.link} to="/favorite">
          Favourites
        </NavLink>
      </li>
      <li>
        <NavLink className={hamburger.link} to="/shopping-list">
          Shopping list
        </NavLink>
      </li>
      <li>
        <NavLink className={hamburger.link} to="/search">
          <SearchIcon />
        </NavLink>
      </li>
      <li></li>
    </ul>
  );
};

export default HamburgerNavigation;
