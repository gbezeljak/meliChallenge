import React from 'react'
import Loader from 'react-loader-spinner'

import theme from 'config/theme'

//https://mhnpd.github.io/react-loader-spinner/

export const PageLoader = () => (
  <Loader
    type="TailSpin"
    color={theme.colors.meLiYellow}
    height={100}
    width={100}
    style={{ margin: 'auto' }}
  />
)

export const InlineLoader = () => (
  <Loader type="ThreeDots" color={theme.colors.meLiYellow} height={100} width={100} />
)
