import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Balance from "./layout/Balance";
import Deposit from "./layout/Deposit";
import Withdraw from "./layout/Withdraw";
import Debt from "./layout/Debt";
import Dashboard from "./leads/Dashboard";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
