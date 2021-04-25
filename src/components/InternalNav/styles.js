import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
`

export const HomeNavItem = styled.p`
  cursor: pointer;
  transition: all 0.2 ease;
  :hover {
    opacity: 0.7;
  }
`

export const NavItem = styled.p`
  margin-left: 8px;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'inherit')};
  transition: all 0.2 ease;
  :hover {
    opacity: ${({ clickable }) => (clickable ? '0.7' : 'inherit')};
  }
`
