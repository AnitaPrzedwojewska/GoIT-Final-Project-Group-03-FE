import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import css from "./UserLogoModal.module.css";
import PropTypes from "prop-types";

import EditIcon from "../IconsSVG/EditIcon";
import RightArrowIcon from "../IconsSVG/RightArrowIcon";

import ButonFancy from "../ButonFancy/ButonFancy";
import UserInfoModal from "../UserInfoModal/UserInfoModal";
import LogoutModal from "../LogoutModal/LogoutModal";

const UserLogoModal = ({ onClose, user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleLogoutClick = () => {
    setLogoutModalOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {isEditing ? (
        <UserInfoModal user={user} onClose={onClose} />
      ) : isLogoutModalOpen ? (
        <LogoutModal onClose={onClose} />
      ) : (
        <div className={css.modalOverlay} onClick={handleOverlayClick}>
          <div className={css.modalContent}>
            <div className={css.editProfile}>
              <p>Edit Profile</p>
              <NavLink onClick={handleEditClick}>
                <EditIcon
                  width={"20px"}
                  height={"20px"}
                  className={css.EditIcon}
                />
              </NavLink>
            </div>

            <ButonFancy
              height="43px"
              className={css.buttonLogout}
              onClick={handleLogoutClick}
            >
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

//dodać Logike wyogowywania
