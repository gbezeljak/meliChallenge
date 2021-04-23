import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { resetSearchInputValue } from 'actions/mainSearch'
import { fetchProductsById } from 'actions/product'

import Page from 'components/Page'
import ProductCard from 'components/ProductCard'
import { PageLoader } from 'components/Loader'

import { CardWrapper } from './styles'

class Product extends Component {
  componentDidMount = () => {
    const { fetchProductsById, product, history } = this.props
    const search = history.location.pathname.split(':').pop()
    fetchProductsById(product.selectedProduct || search)
    this.props.resetSearchInputValue()
  }

  render() {
    const { isFetching, values, error } = this.props.product
    return (
      <Page withHeader>
        <CardWrapper>
          {isFetching ? (
            <PageLoader />
          ) : values ? (
            <ProductCard values={values} />
          ) : error ? (
            <div>error wip</div>
          ) : (
            <div>nono</div>
          )}
        </CardWrapper>
      </Page>
    )
  }
}

const mapStateToProps = ({ product }) => ({ product })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ resetSearchInputValue, fetchProductsById }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Product)
