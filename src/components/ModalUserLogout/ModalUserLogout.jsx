import { useDispatch } from "react-redux";

import css from "./ModalUserLogout.module.css";

import { logout } from "../../redux/auth/auth.operations";
import { setModalUserLogout } from "../../redux/app/app.slices";

import ButonClassic from "../ButonClassic/ButonClassic";

const ModalUserLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setModalUserLogout(false));
    dispatch(logout());
  };

  const handleCloseModalUserLogout = () => {
    dispatch(setModalUserLogout(false));
  };

  return (
    <div className={css.modalOverlay} onClick={handleCloseModalUserLogout}>
      <div className={css.modalContent}>
        <p className={css.description}>Are you sure you want to logout?</p>
        <ButonClassic
          onClick={handleLogout}
          className={`${css.smallClassicButton} ${css.buttonLogout}`}>
          Logout
        </ButonClassic>
        <ButonClassic
          onClick={handleCloseModalUserLogout}
          className={`${css.smallClassicButton} ${css.buttonCancel}`}>
          Cancel
        </ButonClassic>
      </div>
    </div>
  );
};

export default ModalUserLogout;
