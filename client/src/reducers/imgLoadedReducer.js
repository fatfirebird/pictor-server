const initialState = {
  fileName: null,
  isLoaded: false,
  isLoading: false,
  url: null,
  disabled: false,
}

const isImgLoaded = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        disabled: false,
      }
    }
    case 'UNLOAD': {
      return {
        initialState,
      }
    }
    case 'LOADING': {
      return {
          ...initialState,
          isLoading: true,
        }
    }
    case 'EDITING': {
      return {
        ...state,
        disabled: true
      }
    }
    case 'IMG_DATA': {
      const { url, fileName } = action.payload;
      return {
        ...state,
        disabled: false,
        fileName,
        url
      }
    }
    default:
      return state;
  }
}

export default isImgLoaded
