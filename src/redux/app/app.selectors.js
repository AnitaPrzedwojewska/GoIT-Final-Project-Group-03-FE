export const getDarkMode = (state) => state.app.darkMode;

export const getSlideMenu = (state) => state.app.slideMenu;

export const getModalStatuses = (state) => ({
  modalUser: state.app.modalUser,
  modalUserInfo: state.app.modalUserInfo,
  modalUserLogout: state.app.modalUserLogout,
  modalUserAvatar: state.app.modalUserAvatar,
});

export const getIsError = (state) => state.app.isError;
