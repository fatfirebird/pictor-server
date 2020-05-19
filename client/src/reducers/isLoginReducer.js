const isLoginReducer = (state = false, action) => {
  switch (action.type) {
    case 'EXIT':
      return false;
    case 'AUTH':
      return true;
    default:
      return state;
  }
}

export default isLoginReducer
