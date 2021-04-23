import { handleActions } from 'redux-actions'
import {
  setSelectedProduct,
  fetchProductByIdStart,
  fetchProductByIdSuccess,
  fetchProductByIdError,
  fetchProductDescriptionStart,
  fetchProductDescriptionSuccess,
  fetchProductDescriptionError,
} from 'actions/product'

const defaultState = {
  selectedProduct: null,

  values: null,
  isFetching: false,
  error: false,

  valueDescription: null,
  isFetchingDescription: false,
  descriptionError: false,
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

    [fetchProductDescriptionStart]: (state) => ({
      ...state,
      isFetchingDescription: true,
      descriptionError: null,
    }),
    [fetchProductDescriptionSuccess]: (state, { payload: { values } }) => ({
      ...state,
      valueDescription: values,
      isFetchingDescription: false,
      descriptionError: null,
    }),
    [fetchProductDescriptionError]: (state, { payload: { error } }) => ({
      ...state,
      isFetchingDescription: false,
      descriptionError: error,
    }),
  },
  defaultState
)

export default reducer
