import { createActions } from 'redux-actions'
import API_ROUTES from 'config/apiRoutes'
import getApi from 'services/api'

const {
  setSelectedProduct,
  fetchProductByIdStart,
  fetchProductByIdSuccess,
  fetchProductByIdError,
} = createActions({
  SET_SELECTED_PRODUCT: (data) => ({ data }),

  FETCH_PRODUCT_BY_ID_START: () => {},
  FETCH_PRODUCT_BY_ID_SUCCESS: (values) => ({ values }),
  FETCH_PRODUCT_BY_ID_ERROR: (error) => ({ error }),
})

const setSelectedProductValue = (value) => (dispatch) => dispatch(setSelectedProduct({ value }))

const fetchProductsById = (id) => {
  return async (dispatch) => {
    const api = await getApi()
    dispatch(fetchProductByIdStart())

    try {
      const response = await api.get(`${API_ROUTES.PRODUCT_BY_ID}?ids=${id}`)
      dispatch(fetchProductByIdSuccess(response.data[0].body))
    } catch (error) {
      dispatch(fetchProductByIdError(error))
    }
  }
}

export {
  setSelectedProductValue,
  setSelectedProduct,
  fetchProductsById,
  fetchProductByIdStart,
  fetchProductByIdSuccess,
  fetchProductByIdError,
}
