import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Balance from "./layout/Balance";
import Deposit from "./layout/Deposit";
import Withdraw from "./layout/Withdraw";
import Debt from "./layout/Debt";
import Dashboard from "./leads/Dashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
          <Balance />
          <Deposit />
          <Withdraw />
          <Debt />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
