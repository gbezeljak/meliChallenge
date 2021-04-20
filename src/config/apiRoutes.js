const getBaseUrl = () => process.env.REACT_APP_URI_BACKEND

const API_ROUTES = {
  BASE_URL: getBaseUrl(),
  MAIN_SEARCH: '/sites/MLA/search',
}

export default API_ROUTES
