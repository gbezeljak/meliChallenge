import React from 'react'
import { useHistory } from 'react-router'

import commonText from 'constants/commonText'

import { capitalizeFirstLetter } from 'utils/strings'

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
} from './styles'

const { COMMON } = commonText

const conditionParser = (condition) =>
  condition === 'new' ? capitalizeFirstLetter(COMMON.NEW) : capitalizeFirstLetter(COMMON.USED)

const handleProductClick = (history, productId) => history.push(`items/:${productId}`)

const HorizontalProductCard = ({ values }) => {
  const history = useHistory()
  return (
    <Card>
      {values && (
        <>
          <ThumbnailWrapper>
            <Thumbnail
              src={values.thumbnail}
              onClick={() => handleProductClick(history, values.id)}
            />
          </ThumbnailWrapper>
          <ProdInfoWrapper>
            <PriceWrapper>
              <Price>
                $ {values.price} - {values.currency_id}
              </Price>
              {values.shipping.free_shipping && (
                <Arrival>{capitalizeFirstLetter(COMMON.COMES_FREE)}</Arrival>
              )}
            </PriceWrapper>
            <NameWrapper>
              <Condition>{conditionParser(values.condition)}</Condition>
              <Title onClick={() => handleProductClick(history, values.id)}> {values.title}</Title>
            </NameWrapper>
          </ProdInfoWrapper>

          <Localization>{values.address.state_name}</Localization>
        </>
      )}
    </Card>
  )
}

export default HorizontalProductCard
