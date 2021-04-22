import React from 'react'
import { withRouter } from 'react-router-dom'

import { Container } from './styles'

import Search from './SearchInput'
import Logo from './Logo'

const Header = () => {
  return (
    <Container>
      <Logo />
      <Search />
    </Container>
  )
}

export default withRouter(Header)
