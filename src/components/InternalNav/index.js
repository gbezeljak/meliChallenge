import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { resetSearchInputValue } from 'actions/mainSearch'
import { setInternalNavValue, resetAllInternalNavValues } from 'actions/internalNav'

import { capitalizeFirstLetter } from 'utils/strings'

import commonText from 'constants/commonText'

import { Wrapper, NavItem, HomeNavItem } from './styles'

class InternalNav extends Component {
  state = {}
  render() {
    const { search, product } = this.props.internalNav
    return (
      <Wrapper>
        {this.props.history.location.pathname !== '/' && (
          <HomeNavItem
            onClick={() => {
              this.props.resetSearchInputValue()
              this.props.resetAllInternalNavValues()
              this.props.history.push('/')
            }}
          >
            {capitalizeFirstLetter(commonText.PAGES.HOME)}
          </HomeNavItem>
        )}
        {search && (
          <NavItem
            onClick={() => {
              this.props.setInternalNavValue({ product: '' })
              this.props.history.push(`/items?search=${search}`)
            }}
            clickable
          >
            {' '}
            {'>'} {search}
          </NavItem>
        )}
        {product && (
          <NavItem>
            {' '}
            {'>'} {product}
          </NavItem>
        )}
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ internalNav }) => ({ internalNav })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { resetSearchInputValue, setInternalNavValue, resetAllInternalNavValues },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(InternalNav)
