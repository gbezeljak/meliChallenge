import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "components/Page";
import { fetchUsers } from "actions/users";

import logo from "./logo.svg";
import "./App.css";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <Page withHeader>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>WELCOME</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Page>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchUsers,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
