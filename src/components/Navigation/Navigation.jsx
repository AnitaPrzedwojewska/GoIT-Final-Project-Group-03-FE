import { NavLink } from "react-router-dom";

import routes from "../../constants/routes";
import SearchIcon from '../IconsSVG/SearchIcon'

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={css.navList}>
      <li>
        <NavLink className={css.link} to={`/${routes.CATEGORIES}/Breakfast`}>
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to={`/${routes.ADD}`}>
          Add recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to={`/${routes.MY}`}>
          My recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to={`/${routes.FAVORITE}`}>
          Favourites
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to={`/${routes.SHOPPING_LIST}`}>
          Shopping list
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to={`/${routes.SEARCH}`}>
          <SearchIcon />
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
