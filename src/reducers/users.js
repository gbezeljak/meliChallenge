import { handleActions } from 'redux-actions'
import { fetchUsersStart, fetchUsersSuccess, fetchUsersError } from 'actions/users'

export const defaultState = {
  values: null,
  error: null,
  isFetching: false
}

const reducer = handleActions(
  {
    [fetchUsersStart]: state => ({
      ...state,
      isFetching: true,
      error: null
    }),
    [fetchUsersSuccess]: (state, { payload: { values } }) => ({
      ...state,
      values,
      isFetching: false,
      error: null
    }),
    [fetchUsersError]: (state, { payload: { error } }) => ({
      ...state,
      isFetching: false,
      error
    })
  },
  defaultState
)

export default reducer
