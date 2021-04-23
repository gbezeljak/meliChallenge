import React from 'react'

import { capitalizeFirstLetter } from 'utils/strings'

import commonText from '../../constants/commonText'

import magnifyingGlass1 from '../../assets/images/magnifyingGlass1.png'

import { Label, Wrapper, HintWrapper, StyledImg } from './styles'

const NoSearch = () => (
  <Wrapper>
    <HintWrapper>
      <StyledImg src={magnifyingGlass1} />
      <Label>{capitalizeFirstLetter(commonText.HINTS.NO_SEARCH)}</Label>
    </HintWrapper>
  </Wrapper>
)
export default NoSearch
