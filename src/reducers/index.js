import { combineReducers } from 'redux'

import mainSearch from './mainSearch'
import product from './product'

const rootReducer = combineReducers({
  mainSearch,
  product,
})

export default rootReducer
