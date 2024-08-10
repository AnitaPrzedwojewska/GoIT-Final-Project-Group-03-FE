import { useDispatch } from "react-redux";

import css from "./ModalUserLogout.module.css";

import { setModalUserLogout } from "../../redux/app/app.slices";
import { logout } from "../../redux/auth/auth.operations";

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
    <div className={css.overlay} onClick={handleCloseModalUserLogout}>
      <div className={css.content}>
        <p className={css.question}>Are you sure you want to logout?</p>
        <div className={css.buttons}>
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
    </div>
  );
};

export default ModalUserLogout;
