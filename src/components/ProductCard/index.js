import React from 'react'

import commonText from 'constants/commonText'

import { conditionParser, capitalizeFirstLetter } from 'utils/strings'

import {
  Card,
  Wrapper,
  ImgWrapper,
  ExtraDataWrapper,
  ProductMainWrapper,
  Title,
  Price,
  BuyButton,
  FooterExtraDataWrapper,
  DescriptionWrapper,
  DescriptionTitle,
  Description,
} from './styles'

const { COMMON, PHRASES } = commonText

const ProductCard = ({ values }) => (
  <Card>
    <Wrapper>
      <ImgWrapper>
        <img src={values.thumbnail} />
      </ImgWrapper>
      <ProductMainWrapper>
        <ExtraDataWrapper>
          {capitalizeFirstLetter(conditionParser(values.condition))} - {values.sold_quantity}{' '}
          {COMMON.SOLD}
        </ExtraDataWrapper>
        <Title>{values.title}</Title>
        <Price> $ {values.price}</Price>
        <BuyButton>{capitalizeFirstLetter(COMMON.BUY)}</BuyButton>
        <FooterExtraDataWrapper>{`${capitalizeFirstLetter(PHRASES.ONLY_LEFT)} ${
          values.available_quantity
        } ${COMMON.UNITS}`}</FooterExtraDataWrapper>
      </ProductMainWrapper>
    </Wrapper>
    <DescriptionWrapper>
      <DescriptionTitle>{capitalizeFirstLetter(PHRASES.PRODUCT_DECRIPTION)}</DescriptionTitle>
      <Description>
        pablito clavo un clavito que clavito clavo pablito, no olvidarse de hacer el request para
        esta descripción.
      </Description>
    </DescriptionWrapper>
  </Card>
)

export default ProductCard
