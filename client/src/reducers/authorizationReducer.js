const initialState = {
  status: false,
  loading: false
}

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        status: 'login',
        loading: false
      }
    case 'REGISTARTION':
      return {
        status: 'reg',
        loading: false,
      }
    case 'CONNECTION':
      return {
        ...state,
        loading: true
      }
    case 'CLOSE':
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
}

export default authorizationReducer
