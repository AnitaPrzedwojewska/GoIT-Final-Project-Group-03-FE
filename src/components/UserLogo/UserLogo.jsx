import { NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

import css from "./UserLogo.module.css";
import PropTypes from "prop-types";

import NameIcon from "../IconsSVG/NameIcon";
import UserLogoModal from "../UserLogoModal/UserLogoModal";

const UserLogo = () => {
  const { user } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <NavLink
        onClick={openModal}
        className={css.userImage}
        style={{
          backgroundImage: user.image ? `url(${user.image})` : "none",
        }}
      >
        {!user.image && (
          <NameIcon width={"20px"} height={"20px"} className={css.svgIcon} />
        )}
      </NavLink>
      <div className={css.userName}>{user.name}</div>
      {isModalOpen && <UserLogoModal onClose={closeModal} user={user} />}
    </>
  );
};

UserLogo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  }),
};

export default UserLogo;
