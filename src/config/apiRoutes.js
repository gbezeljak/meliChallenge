const getBaseUrl = () => process.env.REACT_APP_URI_BACKEND

const API_ROUTES = {
  BASE_URL: getBaseUrl(),
  MAIN_SEARCH: '/sites/MLA/search',
  PRODUCT_BY_ID: '/items',
  DESCRIPTION: '/description',
}

export default API_ROUTES
