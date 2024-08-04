import PropTypes from 'prop-types';

import css from "./Logo.module.css";
import LogoIcon from '../IconsSVG/LogoIcon';

const Logo = ({colorLogo, colorBkg}) => {
  return (
    <div className={css.LogoBkg}>
      <LogoIcon stroke={colorLogo} fill={colorBkg} />
    </div>
  );
};

Logo.propTypes = {
  colorLogo: PropTypes.String,
  colorBkg: PropTypes.String
}

export default Logo;
