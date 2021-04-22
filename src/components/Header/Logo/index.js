import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHistory } from 'react-router'

import { StyledLogo } from './styles'

import { resetSearchInputValue } from 'actions/mainSearch'

import meliLogo from 'assets/images/meliLogo.png'

const Logo = ({ resetSearchInputValue }) => {
  const history = useHistory()
  return (
    <StyledLogo
      src={meliLogo}
      onClick={() => {
        resetSearchInputValue()
        history.push('/')
      }}
    />
  )
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ resetSearchInputValue }, dispatch)

export default connect(null, mapDispatchToProps)(Logo)
