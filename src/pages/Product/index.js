import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { resetSearchInputValue } from 'actions/mainSearch'

import Page from 'components/Page'

class Product extends Component {
  componentDidMount = () => {
    this.props.resetSearchInputValue()
  }

  render() {
    return <Page withHeader>WIP product</Page>
  }
}

const mapStateToProps = ({ mainSearch }) => ({ mainSearch })

const mapDispatchToProps = (dispatch) => bindActionCreators({ resetSearchInputValue }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Product)
