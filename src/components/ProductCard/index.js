import React from 'react'

import commonText from 'constants/commonText'

import { InlineLoader } from 'components/Loader'

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
  DescriptionLoaderWrapper,
} from './styles'

const { COMMON, PHRASES, ERRORS } = commonText

const ProductCard = ({ values, descriptionObj }) => (
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
        {descriptionObj.isFetchingDescription ? (
          <DescriptionLoaderWrapper>
            <InlineLoader />
          </DescriptionLoaderWrapper>
        ) : descriptionObj.descriptionError ? (
          <div>{descriptionObj.descriptionError || ERRORS.DEFAULT_PRODUCT_DESCRIPTION}</div>
        ) : (
          descriptionObj.valueDescription.plain_text
        )}
      </Description>
    </DescriptionWrapper>
  </Card>
)

export default ProductCard
