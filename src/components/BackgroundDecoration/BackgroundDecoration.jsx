import css from "./BackgroundDecoration.module.css";

const BackgroundDecoration = () => {
  return (
    <>
      <div className={css.background}>
        <div className={css.elements}>
          <div className={css.squareOne}></div>
          <div className={css.squareTwo}></div>
          <div className={css.dot}></div>
        </div>
      </div>
    </>
  );
};

export default BackgroundDecoration;
