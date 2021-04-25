import { combineReducers } from 'redux'

import mainSearch from './mainSearch'
import product from './product'
import internalNav from './internalNav'

const rootReducer = combineReducers({
  mainSearch,
  product,
  internalNav,
})

export default rootReducer
