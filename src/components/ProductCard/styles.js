import styled from 'styled-components'

import theme from 'config/theme'

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.white};
  border-radius: 5px;
  padding: 40px;
`

export const Wrapper = styled.div`
  height: 70%;
  display: flex;
`

export const ImgWrapper = styled.div`
  width: 70%;
  display: flex;
`

export const ExtraDataWrapper = styled.div`
  color: ${theme.colors.mediumGray};
  border-bottom: 1px solid ${theme.colors.mediumGray};
  padding-bottom: 10px;
`

export const ProductMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.mediumGray};
  border-radius: 5px;
  width: 35%;
  padding: 20px;
`

export const Title = styled.p`
  font-size: 24px;
  margin-top: 10px;
`

export const Price = styled.p`
  font-size: 30px;
  margin: 20px 0px 40px 0px;
`

export const BuyButton = styled.button`
  border: 0px;
  height: 40px;
  color: ${theme.colors.white};
  background: ${theme.colors.blue};
  border-radius: 5px;
  max-width: 270px;
  width: 100%;
  margin: 0px auto;
  font-size: 21px;
  transition: all 0.2s ease;
  :hover {
    opacity: 0.8;
  }
`

export const FooterExtraDataWrapper = styled.p`
  color: ${theme.colors.mediumGray};
  border-top: 1px solid ${theme.colors.mediumGray};
  padding-top: 10px;
  margin-top: auto;
`

export const DescriptionWrapper = styled.div`
  margin-top: 30px;
  height: 30%;
  display: flex;
  flex-direction: column;
`

export const DescriptionTitle = styled.p`
  font-size: 24px;
`

export const Description = styled.p`
  margin-top: 20px;
  color: ${theme.colors.mediumGray};
  overflow: auto;
`

export const DescriptionLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
