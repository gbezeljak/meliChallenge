import styled from 'styled-components'
import theme from 'config/theme'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.meLiYellow};
`

export const RetryButton = styled.button`
  height: 36px;
  border: none;
  background: ${theme.colors.meLiYellow};
  font-weight: bold;
  border-radius: 5px;
  width: 220px;
  cursor: pointer;
  margin: 0px auto;
  font-size: 18px;
  :hover {
    opacity: 0.7;
  }
`

export const Card = styled.div`
  padding: 15px;
  text-align: center;
  border-radius: 3px;
  width: 460px;
  display: flex;
  flex-direction: row;
  height: 190px;
  box-shadow: -39px 33px 6px -4px rgba(0, 0, 0, 0.09);
  background: white;
`

export const HeimdallImg = styled.img`
  width: 120px;
  height: 75px;
  margin: auto 11px;
`

export const ErrTitle = styled.h1`
  margin: 0px;
  text-align: center;
  font-size: 34px;
`

export const ErrSubTitle = styled.h4`
  margin: 10px 0px 30px 0px;
`
