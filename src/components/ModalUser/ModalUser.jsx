import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import css from "./ModalUser.module.css";

import {
  setModalUser,
  setModalUserInfo,
  setModalUserLogout,
} from "../../redux/app/app.slices";

import ButonFancy from "../ButonFancy/ButonFancy";
import EditIcon from "../IconsSVG/EditIcon";
import RightArrowIcon from "../IconsSVG/RightArrowIcon";

const ModalUser = () => {
  const dispatch = useDispatch();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(setModalUser(false));
    }
  };

  const handleOpenModalUserInfo = () => {
    dispatch(setModalUser(false));
    dispatch(setModalUserInfo(true));
  };

  const handleOpenModalUserLogout = () => {
    dispatch(setModalUser(false));
    dispatch(setModalUserLogout(true));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        dispatch(setModalUser(false));
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  return (
    <>
      <div className={css.modalOverlay} onClick={handleOverlayClick}>
        <div className={css.modalContent}>
          <div className={css.editProfile}>
            <p>Edit Profile</p>
            <NavLink onClick={handleOpenModalUserInfo}>
              <EditIcon
                width={"20px"}
                height={"20px"}
                className={css.EditIcon}
              />
            </NavLink>
          </div>

          <ButonFancy
            height='43px'
            className={css.buttonLogout}
            onClick={handleOpenModalUserLogout}>
            Log out
            <RightArrowIcon
              width={"25px"}
              height={"25px"}
              className={css.RightArrowIcon}
            />
          </ButonFancy>
        </div>
      </div>
    </>
  );
};

// UserLogoModal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   user: PropTypes.shape({
//     name: PropTypes.string,
//     image: PropTypes.string,
//   }).isRequired,
// };

export default ModalUser;
