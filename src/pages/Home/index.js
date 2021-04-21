import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { PageLoader } from 'components/Loader'

import Page from 'components/Page'
import NoSearch from 'components/NoSearch'
import HorizontalProductCard from 'components/HorizontalProductCard'

import { ResultsWrapper } from './styles'

class Home extends React.Component {
  componentDidMount() {}
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
                <HorizontalProductCard key={result.id} values={result} />
              ))}
            </ResultsWrapper>
          ) : (
            <div>no values</div>
          )
        ) : error ? (
          <div>error wip</div>
        ) : (
          <NoSearch />
        )}
      </Page>
    )
  }
}

const mapStateToProps = ({ mainSearch }) => ({ mainSearch })

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
