import React from 'react'

import { capitalizeFirstLetter } from 'utils/strings'

import commonText from '../../constants/commonText'

import { Label, Wrapper, HintWrapper, TitleWrapper } from './styles'

const NoSearch = () => (
  <Wrapper>
    <HintWrapper>
      <TitleWrapper>Oops!</TitleWrapper>
      <Label>{capitalizeFirstLetter(commonText.HINTS.NO_VALUES)}</Label>
    </HintWrapper>
  </Wrapper>
)
export default NoSearch
