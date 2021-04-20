import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Page from 'components/Page'
import NoSearch from 'components/NoSearch'

class Home extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Page withHeader>
        <NoSearch />
      </Page>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
