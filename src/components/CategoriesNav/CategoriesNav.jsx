import { useEffect, useState, useRef } from 'react';
import { NavLink } from "react-router-dom";

import { getCategory } from '../../redux/recipes/recipes.selectors.js';
import { setCategory } from '../../redux/recipes/recipes.slices.js';
import getRecipeCategories from '../../api/recipes/getRecipeCategories.js';

import routes from '../../constants/routes.js';

import css from './CategoriesNav.module.css';
import { useDispatch, useSelector } from 'react-redux';

const CategoriesNav = () => {

  const dispatch = useDispatch();
  const category = useSelector(getCategory);

  const [categories, setCategories] = useState([]);
  console.log('Categories: ', categories);

  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getRecipeCategories();
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

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
            <li
              key={cat.title}
              className={`${css.menuItem} ${
                category === cat.title && css.active
              }`}>
              <NavLink
                className={css.menuLink}
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