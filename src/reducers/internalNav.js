import { handleActions } from 'redux-actions'
import { setInternalNav, resetAllInternalNav } from 'actions/internalNav'

const defaultState = {
  search: '',
  product: '',
}

const reducer = handleActions(
  {
    [setInternalNav]: (
      state,
      {
        payload: {
          data: { value },
        },
      }
    ) => ({ ...state, ...value }),
    [resetAllInternalNav]: () => defaultState,
  },
  defaultState
)

export default reducer
