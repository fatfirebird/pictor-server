const initialState = {
  modal: {
    isOpened: false,
    modalName: null,
  },
  menu: {
    menuName: 'filters'
  }
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU': {
      const { menuName } = action.payload;
      return {
        ...state,
        modal: {
          isOpened: false,
        },
        menu: {
          menuName: menuName
        }
      }
    }
    case 'SHOW_MODAL': {
      const { modal } = action.payload;
      return {
        ...state,
        modal: {
          isOpened: true,
          modalName: modal
        }
      };
    }
    case 'HIDE_MODAL': {
      const { modal } = action.payload;
      return {
        ...state,
        modal: {
          isOpened: false,
          modalName: modal
        }
      };
    }
    default:
      return state;
  }
}

export default menuReducer
