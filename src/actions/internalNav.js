import { createActions } from 'redux-actions'

const { setInternalNav, resetAllInternalNav } = createActions({
  SET_INTERNAL_NAV: (data) => ({ data }),
  RESET_ALL_INTERNAL_NAV_: () => {},
})

const setInternalNavValue = (value) => (dispatch) => dispatch(setInternalNav({ value }))

const resetAllInternalNavValues = () => (dispatch) => dispatch(resetAllInternalNav())

export { setInternalNavValue, setInternalNav, resetAllInternalNavValues, resetAllInternalNav }
