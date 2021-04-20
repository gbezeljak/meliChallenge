import { createActions } from 'redux-actions'
import API_ROUTES from 'config/apiRoutes'
import getApi from 'services/api'

const {
  setSearchInput,
  resetSearchInput,

  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsError,
} = createActions({
  SET_SEARCH_INPUT: (data) => ({ data }),
  RESET_SEARCH_INPUT: () => {},

  FETCH_PRODUCTS_START: () => {},
  FETCH_PRODUCTS_SUCCESS: (values) => ({ values }),
  FETCH_PRODUCTS_ERROR: (error) => ({ error }),
})

const setSearchInputValue = (value) => (dispatch) => dispatch(setSearchInput({ value }))

const resetSearchInputValue = () => (dispatch) => dispatch(resetSearchInput())

const fetchProducts = (value) => {
  return async (dispatch) => {
    const api = await getApi()
    dispatch(fetchProductsStart())
    try {
      const response = await api.get(`${API_ROUTES.MAIN_SEARCH}?q=:${value}`)
      dispatch(fetchProductsSuccess(response.data))
    } catch (error) {
      dispatch(fetchProductsError(error))
    }
  }
}

export {
  setSearchInput,
  resetSearchInput,
  setSearchInputValue,
  resetSearchInputValue,
  fetchProducts,
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsError,
}
