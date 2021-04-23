import React from 'react'

import { capitalizeFirstLetter } from 'utils/strings'

import commonText from '../../constants/commonText'

import img from '../../assets/images/meliLogo.png'

import { Wrapper, RetryButton, Card, HeimdallImg, ErrTitle, ErrSubTitle } from './styles'

const { COMMON, HINTS } = commonText

const NotFound = () => (
  <Wrapper>
    <Card>
      <HeimdallImg src={img} />
      <div>
        <ErrTitle>404!</ErrTitle>
        <ErrSubTitle>{capitalizeFirstLetter(HINTS.NO_PAGE)}</ErrSubTitle>
        <RetryButton onClick={() => window.location.replace('/')}>
          {capitalizeFirstLetter(COMMON.GO_BACK)}
        </RetryButton>
      </div>
    </Card>
  </Wrapper>
)

export default NotFound
