import css from "./RecipeBg.module.css";

const RecipeBg = () => {
  return (
    <>
        <img
          className={css.recipeBgImage}
          src="/images-bkg/desktop-recipe-vege-assortment.png"
        ></img>
    </>
  );
};

export default RecipeBg;
