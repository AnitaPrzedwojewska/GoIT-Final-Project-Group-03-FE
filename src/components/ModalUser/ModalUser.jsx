import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import css from "./ModalUser.module.css";

import { setModalUser } from "../../redux/app/app.slices";
import { getModalUserInfo, getModalUserLogout } from "../../redux/app/app.selectors";
import { setModalUserInfo, setModalUserLogout } from "../../redux/app/app.slices";

import EditIcon from "../IconsSVG/EditIcon";
import RightArrowIcon from "../IconsSVG/RightArrowIcon";
import ButonFancy from "../ButonFancy/ButonFancy";
import ModalUserInfo from "../ModalUserInfo/ModalUserInfo";
import ModalUserLogout from "../ModalUserLogout/ModalUserLogout";

const UserLogoModal = () => {
  const dispatch = useDispatch();

  const isOpenModalUserInfo = useSelector(getModalUserInfo);
  const isOpenModalUserLogout = useSelector(getModalUserLogout);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(setModalUser(false));
    }
  };

  const handleOpenUserInfo = () => {
    dispatch(setModalUser(false));
    dispatch(setModalUserInfo(true));
  };

  const handleOpenUserLogout = () => {
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
      {isOpenModalUserInfo ? (
        <ModalUserInfo />
      ) : isOpenModalUserLogout ? (
        <ModalUserLogout />
      ) : (
        <div className={css.modalOverlay} onClick={handleOverlayClick}>
          <div className={css.modalContent}>
            <div className={css.editProfile}>
              <p>Edit Profile</p>
              <NavLink onClick={handleOpenUserInfo}>
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
              onClick={handleOpenUserLogout}>
              Log out
              <RightArrowIcon
                width={"25px"}
                height={"25px"}
                className={css.RightArrowIcon}
              />
            </ButonFancy>
          </div>
        </div>
      )}
    </>
  );
};

UserLogoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default UserLogoModal;
