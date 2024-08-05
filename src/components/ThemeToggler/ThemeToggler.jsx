import { useState, useEffect } from "react";
import css from "./ThemeToggler.module.css";

const ThemeToggler = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const handleToggle = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <>
      <input
        className={css.slider}
        type="checkbox"
        id="switch"
        onChange={handleToggle}
      />
      <label className={css.sliderLabel} htmlFor="switch"></label>
    </>
  );
};

export default ThemeToggler;
