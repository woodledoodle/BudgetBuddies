import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Balance from "./layout/Balance";
import Deposit from "./layout/Deposit";
import Withdraw from "./layout/Withdraw";
import Debt from "./layout/Debt";
import Dashboard from "./leads/Dashboard";
import Login from "./Login";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  constructor(props) {
    super(props);
    // console.log("this is store", store.getState());
  }
  render() {
    console.log("this inside app", this);
    return (
      <Provider store={store}>
        <Login />
        <Fragment>
          <Header />
          <div className="container">
            <h1>"Its Budget Time!"</h1>
            <Balance />
            <Deposit />
            <Withdraw />
            <Debt />
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
