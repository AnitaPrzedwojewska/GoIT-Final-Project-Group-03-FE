import { useDispatch } from "react-redux";

import { logout } from "../../redux/auth/auth.operations";
import { setModalUserLogout } from "../../redux/app/app.slices";

import css from "./ModalUserLogout.module.css";
import ButonClassic from "../ButonClassic/ButonClassic";

const ModalUserLogout = () => {
  const dispatch = useDispatch();

  const handleOnLogout = () => {
    dispatch(setModalUserLogout(false));
    dispatch(logout());
  };

  const handleOnClose = () => {
    dispatch(setModalUserLogout(false));
  };

  return (
    <div className={css.modalOverlay} onClick={handleOnClose}>
      <div className={css.modalContent}>
        <p className={css.description}>Are you sure you want to logout?</p>
        <ButonClassic
          onClick={handleOnLogout}
          className={`${css.smallClassicButton} ${css.buttonLogout}`}>
          Logout
        </ButonClassic>
        <ButonClassic
          onClick={handleOnClose}
          className={`${css.smallClassicButton} ${css.buttonCancel}`}>
          Cancel
        </ButonClassic>
      </div>
    </div>
  );
};

export default ModalUserLogout;
