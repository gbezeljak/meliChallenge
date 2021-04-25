import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { resetSearchInputValue } from 'actions/mainSearch'
import { fetchProductsById, fetchProductDescription } from 'actions/product'
import { setInternalNavValue } from 'actions/internalNav'

import Page from 'components/Page'
import ProductCard from 'components/ProductCard'
import { PageLoader } from 'components/Loader'

import commonText from 'constants/commonText'

import { capitalizeFirstLetter } from 'utils/strings'

import { CardWrapper } from './styles'

class Product extends Component {
  componentDidMount = () => {
    const { fetchProductsById, fetchProductDescription, product, history } = this.props
    const search = history.location.pathname.split(':').pop()
    fetchProductsById(product.selectedProduct || search)
    fetchProductDescription(product.selectedProduct || search)
    this.props.resetSearchInputValue()
  }

  componentDidUpdate = () => {
    const { product, setInternalNavValue } = this.props
    if (product.values) {
      setInternalNavValue({ product: product.values.title ? product.values.title : '' })
    }
  }

  render() {
    const {
      isFetching,
      values,
      error,
      valueDescription,
      isFetchingDescription,
      descriptionError,
    } = this.props.product
    return (
      <Page withHeader withInternalNav>
        <CardWrapper>
          {isFetching ? (
            <PageLoader />
          ) : values ? (
            <ProductCard
              values={values}
              descriptionObj={{ valueDescription, isFetchingDescription, descriptionError }}
            />
          ) : error ? (
            <div>{error || capitalizeFirstLetter(commonText.ERRORS.DEFAULT_PRODUCT)}</div>
          ) : (
            <div>{error || capitalizeFirstLetter(commonText.HINTS.NO_PRODUCT)}</div>
          )}
        </CardWrapper>
      </Page>
    )
  }
}

const mapStateToProps = ({ product }) => ({ product })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { resetSearchInputValue, fetchProductsById, fetchProductDescription, setInternalNavValue },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Product)
