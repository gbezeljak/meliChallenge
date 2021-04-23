import React from 'react'
import { useHistory } from 'react-router'

import commonText from 'constants/commonText'

import { conditionParser, capitalizeFirstLetter } from 'utils/strings'

import {
  Card,
  ThumbnailWrapper,
  Thumbnail,
  ProdInfoWrapper,
  PriceWrapper,
  Price,
  Arrival,
  Condition,
  NameWrapper,
  Title,
  Localization,
  Currency,
} from './styles'

const { COMMON } = commonText

const handleProductClick = (history, productId, persistSelectedProduct) => {
  persistSelectedProduct(productId)
  history.push(`items/:${productId}`)
}

const HorizontalProductCard = ({ values, persistSelectedProduct }) => {
  const history = useHistory()
  return (
    <Card>
      {values && (
        <>
          <ThumbnailWrapper>
            <Thumbnail
              src={values.thumbnail}
              onClick={() => handleProductClick(history, values.id, persistSelectedProduct)}
            />
          </ThumbnailWrapper>
          <ProdInfoWrapper>
            <PriceWrapper>
              <Price>
                $ {values.price} - <Currency>{values.currency_id}</Currency>
              </Price>
              {values.shipping.free_shipping && (
                <Arrival>{capitalizeFirstLetter(COMMON.COMES_FREE)}</Arrival>
              )}
            </PriceWrapper>
            <NameWrapper>
              <Condition>{capitalizeFirstLetter(conditionParser(values.condition))}</Condition>
              <Title onClick={() => handleProductClick(history, values.id, persistSelectedProduct)}>
                {' '}
                {values.title}
              </Title>
            </NameWrapper>
          </ProdInfoWrapper>

          <Localization>{values.address.state_name}</Localization>
        </>
      )}
    </Card>
  )
}

export default HorizontalProductCard
