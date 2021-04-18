import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isUserLoggedIn } from 'utils/session'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isUserLoggedIn() ? ( // Implement the correct function to evaluate the user login status
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: `/`, // Redirect to the correspondent url
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export default PrivateRoute
