import BarLoader from "react-spinners/BarLoader";
import BeatLoader from "react-spinners/BeatLoader";
import MoonLoader from "react-spinners/MoonLoader";
import FadeLoader from "react-spinners/FadeLoader";
import PuffLoader from "react-spinners/PuffLoader";
import SyncLoader from "react-spinners/SyncLoader";
import PropTypes from "prop-types";

import css from './Loader.module.css'

// zostawić tylko jeden loader
// color zmienić na zaimportowaną stałą
// skasować niepotrzebne właściwości w stylu loaderWrap
const Loader = () => {
  return (
    <div className={css.loaderWrap}>
      <BarLoader color='#8BAA36' />
      <BeatLoader color='#8BAA36' />
      <MoonLoader color='#8Baa36' />
      <FadeLoader color='#8Baa36' />
      <PuffLoader color='#8Baa36' />
      <SyncLoader color='#8Baa36' />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
};

export default Loader;
