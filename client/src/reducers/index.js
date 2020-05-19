import isLoginReducer from './isLoginReducer.js'
import authorizationReducer from './authorizationReducer.js'
import isImgLoaded from './imgLoadedReducer.js'
import menuReducer from './menuReducer.js'
import filtersReducer from './filtersReducer.js'
import presetsReducer from './presetsReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  isLoggedIn: isLoginReducer,
  authStatus: authorizationReducer,
  isImgLoaded,
  menuReducer,
  filters: filtersReducer,
  presets: presetsReducer,
})

export default rootReducer
