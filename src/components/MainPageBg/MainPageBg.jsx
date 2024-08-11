import css from "./MainPageBg.module.css";

const MainPageBg = () => {
  return (
    <>
      <div className={css.mobile}>
        <img
          className={css.mobileBgImage}
          src="/images-bkg/mobile-main-bg.png"
        ></img>
        <img
          className={css.mobileSpinatImage}
          src="/images-bkg/mobile-search-spinach-leaves-2.png"
        ></img>
        <img
          className={css.mobilePlateImage}
          src="/images-bkg/mobile-search-vege-plate.png"
        ></img>

        <img
          className={css.mobileLeafImage}
          src="/images-bkg/mobile-search-spinach-leaves-1.png"
        ></img>
      </div>
      <div className={css.tablet}>
        <img
          className={css.tabletBgImage}
          src="/images-bkg/tablet-main-bg.png"
        ></img>
        <img
          className={css.tabletSpinatImage}
          src="/images-bkg/tablet-search-spinach-leaves-2.png"
        ></img>
        <img
          className={css.tabletPlateImage}
          src="/images-bkg/tablet-search-vege-plate.png"
        ></img>
        <img
          className={css.tabletArrow}
          src="/images-bkg/tablet-main-arrow.png"
        ></img>
        <img
          className={css.tabletLeafImage}
          src="/images-bkg/tablet-search-spinach-leaves-1.png"
        ></img>
      </div>
      <div className={css.desktop}>
        <img
          className={css.bgImage}
          src="/images-bkg/desktop-main-bg.png"
        ></img>
        <img
          className={css.spinatImage}
          src="/images-bkg/desktop-search-spinach-leaves-2.png"
        ></img>
        <img
          className={css.plateImage}
          src="/images-bkg/desktop-search-vege-plate.png"
        ></img>
        <img
          className={css.arrowImage}
          src="/images-bkg/desktop-main-arrow.png"
        ></img>
        <img
          className={css.leafImage}
          src="/images-bkg/desktop-search-spinach-leaves-1.png"
        ></img>
      </div>
    </>
  );
};

export default MainPageBg;
