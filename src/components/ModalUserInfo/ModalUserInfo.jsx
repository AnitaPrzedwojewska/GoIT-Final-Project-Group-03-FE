import { useState} from "react";
import { useDispatch} from "react-redux";

import css from "./ModalUserInfo.module.css";
import PropTypes from "prop-types";

import useAuth from "../../hooks/useAuth";

import ButonClassic from "../ButonClassic/ButonClassic";
import NameIcon from "../IconsSVG/NameIcon";
import updateUser from "../../api/users/updateUser";
import { setModalUserInfo } from "../../redux/app/app.slices";

const UserInfoModal = () => {
  const user = useAuth();
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);

  const handleCloseModalUserInfo = () => {
    dispatch(setModalUserInfo(false));
  }

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    console.log("Changes saved:", { name, avatar });
    dispatch(updateUser({ name: name, avatar: avatar }));
    dispatch(setModalUserInfo(false));
  };

  return (
    <div className={css.modalOverlay} onClick={handleCloseModalUserInfo}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={css.container}>
          <div className={css.imageUpload}>
            <input
              type='file'
              accept='image/*'
              onChange={handleAvatarChange}
              style={{ display: "none" }}
              id='image-upload'
            />
            <label htmlFor='image-upload' className={css.addButton}>
              +
            </label>

            {avatar ? (
              <>
                <img
                  src={avatar}
                  alt='Profile Preview'
                  className={css.imagePreview}
                />
              </>
            ) : (
              <label htmlFor='image-upload'>
                <NameIcon
                  width={"47px"}
                  height={"47px"}
                  className={css.svgIcon}
                />
              </label>
            )}
          </div>

          <label className={css.label}>
            <div className={css.icon}>
              <NameIcon
                width={"16px"}
                height={"18px"}
                className={css.inputIcon}
              />
            </div>
            <input
              className={css.input}
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <ButonClassic className={css.buttonSave} onClick={handleSaveChanges}>
            Save Changes
          </ButonClassic>
        </div>
      </div>
    </div>
  );
};

UserInfoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfoModal;
