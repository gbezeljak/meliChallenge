import axios from 'axios'
import API_ROUTES from 'config/apiRoutes'

export default () => {
  let headerConf = {}

  let api = axios.create({
    baseURL: API_ROUTES.BASE_URL,
    headers: {
      common: headerConf
    }
  })

  return api
}
