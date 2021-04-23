import styled from 'styled-components'

import theme from 'config/theme'

export const Card = styled.div`
  width: 100%;
  height: 200px;
  background: ${theme.colors.white};
  padding: 15px;
  border-bottom: 1px solid ${theme.colors.gray};
  display: flex;
`

export const ThumbnailWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
`

export const Thumbnail = styled.img`
  max-height: 150px;
  max-width: 150px;
  margin: auto 0px;
  cursor: pointer;
  transition: all 0.2s ease;
  :hover {
    opacity: 0.5;
  }
`

export const ProdInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px 40px 20px;
`

export const PriceWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
`

export const Arrival = styled.p`
  background: ${theme.colors.phantomGreen};
  color: ${theme.colors.green};
  font-weight: bold;
  padding: 4px;
  margin-left: 20px;
  border-radius: 4px;
`

export const Price = styled.h2`
  font-size: 24px;
  display: flex;
`

export const NameWrapper = styled.div`
  display: flex;
`

export const Condition = styled.p`
  background: ${theme.colors.phantomGreen};
  color: ${theme.colors.green};
  font-weight: bold;
  padding: 4px;
  border-radius: 4px;
  max-height: 29px;
`
export const Title = styled.button`
  border: 0px;
  border-left: 1px solid ${theme.colors.mediumGray};
  margin-left: 10px;
  padding: 3px 3px 3px 5px;
  font-size: 20px;
  background: ${theme.colors.transparent};
  cursor: pointer;
  transition: all 0.2s ease;
  :hover {
    opacity: 0.5;
  }
`

export const Localization = styled.div`
  margin: 20px 20px auto auto;
  color: ${theme.colors.mediumGray};
`

export const Currency = styled.p`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`
