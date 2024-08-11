import css from "./BackgroundLeaves.module.css";

const BackgroundLeaves = () => {
  return (
    <>
      <div className={css.background}>
        <img
          src="../../../public/images-bkg/mobile-shared-spinach-leaves.png"
          alt="basil leaves"
          className={css.image}
        ></img>
      </div>
    </>
  );
};

export default BackgroundLeaves;
