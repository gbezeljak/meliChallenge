import React from 'react'

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

const ConditionParser = (condition) =>
  condition === 'new' ? capitalizeFirstLetter(COMMON.NEW) : capitalizeFirstLetter(COMMON.USED)

const HorizontalProductCard = ({ values }) => {
  console.log(values)
  return (
    <Card>
      {values && (
        <>
          <ThumbnailWrapper>
            <Thumbnail src={values.thumbnail} onClick={() => alert('WIP')} />
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
              <Condition>{ConditionParser(values.condition)}</Condition>
              <Title onClick={() => alert('WIP')}> {values.title}</Title>
            </NameWrapper>
          </ProdInfoWrapper>

          <Localization>{values.address.state_name}</Localization>
        </>
      )}
    </Card>
  )
}

export default HorizontalProductCard
