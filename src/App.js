/* eslint-disable no-undef */
import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { createBrowserHistory } from 'history'
import GlobalStyle from 'config/globalStyle'
import theme from 'config/theme'

import store from './store'

import Home from 'pages/Home'
import Product from 'pages/Product'

const browserHistory = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Router history={browserHistory}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/items" component={Home} />
              <Route exact path="/items/:id" component={Product} />
            </Switch>
          </Router>
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    </Provider>
  )
}

export default App

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}
