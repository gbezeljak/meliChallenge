import { handleActions } from 'redux-actions'
import {
  setSearchInput,
  resetSearchInput,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsError,
} from 'actions/mainSearch'

const defaultState = {
  inputValue: '',

  values: null,
  isFetching: false,
  error: false,
}

const reducer = handleActions(
  {
    [setSearchInput]: (
      state,
      {
        payload: {
          data: { value },
        },
      }
    ) => ({ ...state, inputValue: value }),
    [resetSearchInput]: () => defaultState,
    [fetchProductsStart]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [fetchProductsSuccess]: (state, { payload: { values } }) => ({
      ...state,
      values,
      isFetching: false,
      error: null,
    }),
    [fetchProductsError]: (state, { payload: { error } }) => ({
      ...state,
      isFetching: false,
      error,
    }),
  },
  defaultState
)

export default reducer
