import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Page from 'components/Page'
import { fetchUsers } from 'actions/users'

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }
  render() {
    return <Page withHeader>WIP Home</Page>
  }
}

const mapStateToProps = ({ users }) => ({
  users,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUsers,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
