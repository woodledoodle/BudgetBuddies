import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { } from "react-router-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Header from "./layout/Header";
import Balance from "./layout/Balance";
import Deposit from "./layout/Deposit";
import Withdraw from "./layout/Withdraw";
import Debt from "./layout/Debt";
import Dashboard from "./leads/Dashboard";
// import Login from "./Login";
import Login from "./accounts/Login";
import Register from "./accounts/Register";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from '../actions/auth';
import PrivateRoute from './common/PrivateRoute'

class App extends Component {

  // console.log("this is store", store.getState());
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    console.log("this inside app", this);
    return (
      <Provider store={store}>

        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <h1>"Its Budget Time!"</h1>
              <Balance />
              <Deposit />
              <Withdraw />
              <Debt />
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                {/* <Dashboard /> */}
              </Switch>

            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
