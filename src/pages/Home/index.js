import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { resetSearchInputValue, fetchProducts, setSearchInputValue } from 'actions/mainSearch'
import { setSelectedProductValue } from 'actions/product'

import { PageLoader } from 'components/Loader'
import Page from 'components/Page'
import NoSearch from 'components/NoSearch'
import HorizontalProductCard from 'components/HorizontalProductCard'
import NoValues from 'components/NoValues'

import commonText from 'constants/commonText'

import { capitalizeFirstLetter } from 'utils/strings'

import { ResultsWrapper } from './styles'

class Home extends React.Component {
  componentDidMount() {
    const { history, fetchProducts, setSearchInputValue } = this.props
    if (history.location && history.location.search) {
      const search = history.location.search.split('=').pop()
      setSearchInputValue(search)
      fetchProducts(search, history)
    }
  }
  render() {
    const { isFetching, values, error } = this.props.mainSearch
    return (
      <Page withHeader>
        {isFetching ? (
          <PageLoader />
        ) : values ? (
          values.results.length ? (
            <ResultsWrapper>
              {values.results.map((result) => (
                <HorizontalProductCard
                  key={result.id}
                  values={result}
                  persistSelectedProduct={this.props.setSelectedProductValue}
                />
              ))}
            </ResultsWrapper>
          ) : (
            <NoValues />
          )
        ) : error ? (
          <div>{error || capitalizeFirstLetter(commonText.ERRORS.DEFAULT_SEARCH)}</div>
        ) : (
          <NoSearch />
        )}
      </Page>
    )
  }
}

const mapStateToProps = ({ mainSearch }) => ({ mainSearch })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { resetSearchInputValue, fetchProducts, setSearchInputValue, setSelectedProductValue },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
