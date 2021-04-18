const getBaseUrl = () => {
  // PROD ENVIROMENT
  if (process.env.REACT_APP_ENVIROMENT === 'prod') {
    return 'PROD_URL'
  }
  // STAGING ENVIROMENT
  if (process.env.REACT_APP_ENVIROMENT === 'staging') {
    return 'STAGING_URL'
  }
  // DEV ENVIROMENT / DEFAULT ENVIROMENT
  return 'https://jsonplaceholder.typicode.com'
}
const API_ROUTES = {
  BASE_URL: getBaseUrl(),
  USERS: '/users'
}

export default API_ROUTES
