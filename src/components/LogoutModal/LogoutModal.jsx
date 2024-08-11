import css from "./LogoutModal.module.css";
import PropTypes from "prop-types";
import ButonClassic from "../ButonClassic/ButonClassic";

const LogoutModal = ({ onClose, onLogout }) => {
  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent}>
        <p className={css.description}>Are you sure you want to logout?</p>
        <ButonClassic
          onClick={onLogout}
          className={`${css.smallClassicButton} ${css.buttonLogout}`}
        >
          Logout
        </ButonClassic>
        <ButonClassic
          onClick={onClose}
          className={`${css.smallClassicButton} ${css.buttonCancel}`}
        >
          Cancel
        </ButonClassic>
      </div>
    </div>
  );
};

LogoutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default LogoutModal;
