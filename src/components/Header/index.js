import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, StyledLogo } from './styles'

import Search from './SearchInput'

import meliLogo from 'assets/images/meliLogo.png'

const Header = () => {
  return (
    <Container>
      <StyledLogo src={meliLogo} />
      <Search />
    </Container>
  )
}

export default withRouter(Header)
