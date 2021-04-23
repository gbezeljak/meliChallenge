import { handleActions } from 'redux-actions'
import {
  setSelectedProduct,
  fetchProductByIdStart,
  fetchProductByIdSuccess,
  fetchProductByIdError,
} from 'actions/product'

const defaultState = {
  selectedProduct: null,

  values: null,
  isFetching: false,
  error: false,
}

const reducer = handleActions(
  {
    [setSelectedProduct]: (
      state,
      {
        payload: {
          data: { value },
        },
      }
    ) => ({ ...state, selectedProduct: value }),
    [fetchProductByIdStart]: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    [fetchProductByIdSuccess]: (state, { payload: { values } }) => ({
      ...state,
      values,
      isFetching: false,
      error: null,
    }),
    [fetchProductByIdError]: (state, { payload: { error } }) => ({
      ...state,
      isFetching: false,
      error,
    }),
  },
  defaultState
)

export default reducer
