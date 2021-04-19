import styled from 'styled-components'

export const Container = styled.div`
  flex: 0.075;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.meLiYellow};
`

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: 700px;
  height: 40px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`

export const SearchButton = styled.button`
  height: 40px;
  width: 40px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`}!important;
  border-radius: 0px 5px 5px 0px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
  background: ${({ theme }) => theme.colors.gray};
  transition: all 0.2s ease;
  :hover {
    background: ${({ theme }) => theme.colors.mediumGray};
    border: ${({ theme }) => `1px solid ${theme.colors.mediumGray}`}!important;
  }
`

export const StyledImg = styled.img`
  height: 19px;
  margin: -4px;
`
