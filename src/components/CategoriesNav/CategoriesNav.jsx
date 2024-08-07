import { useEffect, useState } from 'react';

import getRecipeCategories from '../../api/recipes/getRecipeCategories.js';

import PropTypes from 'prop-types';
import css from './CategoriesNav.module.css';

const CategoriesNav = ({categoryName = 'Breakfast'}) => {
  const [category, setCategory] = useState(categoryName);
  console.log('Category: ', category);

  const [categories, setCategories] = useState([]);
  console.log('Categories: ', categories);

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

  return (
    <div className={css.nav}>
      {categories.length === 0 ? (
        <p>Sorry, something wrong. No results!</p>
      ) : (
        <ul className={css.menu}>
          {categories.map((cat) => (
            <li
              key={cat.title}
              className={`${css.menuItem} ${
                category === cat.title && css.active
              }`}
              onClick={() => setCategory(cat.title)}>
              {cat.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

CategoriesNav.propTypes = {
  categoryName: PropTypes.String,
}

export default CategoriesNav;