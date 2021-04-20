import styled from 'styled-components'

export const Container = styled.div`
  flex: 0.075;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.meLiYellow};
`

export const StyledLogo = styled.img`
  height: 50px;
`
