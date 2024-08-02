import { NavLink } from "react-router-dom";

import css from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={css.navList}>
      <li>
        <NavLink className={css.link} to='/add'>
          Add recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to='/search'>
          Search
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
    </ul>
  );
};

export default Nav;
