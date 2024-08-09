// node modules
import { useState, useRef } from 'react';

// npm packages
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

// constants
import routes from '../../constants/routes.js';

// functions
import { getCategory } from '../../redux/recipes/recipes.selectors.js';
import { getCategories } from "../../redux/recipes/recipes.selectors.js";
import { setCategory } from '../../redux/recipes/recipes.slices.js';

// styles
import css from './CategoriesNav.module.css';

const CategoriesNav = () => {

  const dispatch = useDispatch();
  const category = useSelector(getCategory);
  const categories = useSelector(getCategories);

  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX = itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemsRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    itemsRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className={css.nav}>
      {categories.length === 0 ? (
        <p>Sorry, something wrong. No results!</p>
      ) : (
        <ul
          className={css.menu}
          ref={itemsRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}>
          {categories.map((cat) => (
            <li key={cat.title} className={css.menuItem}>
              <NavLink
                // className={css.menuLink `${cat.title} == ${category} && css.active}`}
                className={({ isActive } ) => `${css.menuLink} ${isActive && cat.title === category ? css.active : ''}`}
                to={`/${routes.CATEGORIES}/${cat.title}`}
                onMouseUp={() => dispatch(setCategory(cat.title))}>
                {cat.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoriesNav;