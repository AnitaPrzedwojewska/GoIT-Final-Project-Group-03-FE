import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

import SearchIcon from '../IconsSVG/SearchIcon'

const Navigation = () => {
  return (
    <ul className={css.navList}>
      <li>
        <NavLink className={css.link} to='/categories/:categoryName'>
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to='/add'>
          Add recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to='/my'>
          My recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to='/favorite'>
          Favorites
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to='/shopping-list'>
          Shopping list
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to='/search'>
          <SearchIcon />
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
