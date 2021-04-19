import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, SearchWrapper, SearchInput, SearchButton, StyledImg } from './styled'

import magnifyingGlass from 'assets/images/magnifyingGlass.png'

const Header = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput onChange={(e) => console.log(e.target.value)} placeholder="WIP" />
        <SearchButton onClick={() => console.log('click')}>
          <StyledImg src={magnifyingGlass} />
        </SearchButton>
      </SearchWrapper>
    </Container>
  )
}

export default withRouter(Header)
