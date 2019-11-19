import React, { Component, Fragment } from "react";

//try to change values
// import { BudgetConsumer} from '../../store'

export class Balance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>
          Balance <input type="text" />
        </h1>
        <h1>another tag</h1>
      </>
    );
  }
}

export default Balance;
