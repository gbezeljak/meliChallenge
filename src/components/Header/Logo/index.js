import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHistory } from 'react-router'

import { StyledLogo } from './styles'

import { resetSearchInputValue } from 'actions/mainSearch'
import { resetAllInternalNavValues } from 'actions/internalNav'

import meliLogo from 'assets/images/meliLogo.png'

const Logo = ({ resetSearchInputValue, resetAllInternalNavValues }) => {
  const history = useHistory()
  return (
    <StyledLogo
      src={meliLogo}
      onClick={() => {
        resetSearchInputValue()
        resetAllInternalNavValues()
        history.push('/')
      }}
    />
  )
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ resetSearchInputValue, resetAllInternalNavValues }, dispatch)

export default connect(null, mapDispatchToProps)(Logo)
