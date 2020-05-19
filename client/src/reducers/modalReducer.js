const initialState = {
  isOpened: false,
  modalName: null,
}

const openModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL': {
      const { modal } = action.payload;
      return {
        ...state,
        isOpened: true,
        modalName: modal
      };
    }
    case 'HIDE_MODAL': {
      const { modal } = action.payload;
      return {
        isOpened: false,
        modalName: null
      }
    }
    default:
      return state;
  }
}

export default openModalReducer
