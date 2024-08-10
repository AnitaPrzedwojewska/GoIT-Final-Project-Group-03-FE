import { NavLink } from "react-router-dom";

import css from "./Nav.module.css";

const Nav = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <ul className={css.navList}>
      <li>
        <NavLink className={css.link} to="/add" onClick={handleClick}>
          Add recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/search" onClick={handleClick}>
          Search
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/my" onClick={handleClick}>
          My recipes
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/favorite" onClick={handleClick}>
          Favourites
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/shopping-list" onClick={handleClick}>
          Shopping list
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
