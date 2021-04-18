import { createActions } from 'redux-actions'
import API_ROUTES from 'config/apiRoutes'
import getApi from 'services/api'

const { fetchUsersStart, fetchUsersSuccess, fetchUsersError } = createActions({
  FETCH_USERS_START: () => {},
  FETCH_USERS_SUCCESS: values => ({ values }),
  FETCH_USERS_ERROR: error => ({ error })
})

const fetchUsers = () => {
  return async dispatch => {
    const api = await getApi()
    dispatch(fetchUsersStart())
    try {
      const response = await api.get(API_ROUTES.USERS)
      dispatch(fetchUsersSuccess(response.data))
    } catch (error) {
      dispatch(fetchUsersError(error))
    }
  }
}

export { fetchUsers, fetchUsersStart, fetchUsersSuccess, fetchUsersError }
