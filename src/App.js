import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import { checkLoggedInStatus } from "./actions/userActions";
class App extends Component {
  componentDidMount() {
    //check if logged in
    this.props.checkLoggedInStatus();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={Registration} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { checkLoggedInStatus })(App);
