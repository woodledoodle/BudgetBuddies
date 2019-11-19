//The context api allows us to create a central store to keep our data and manage our state. Then we'll pass this data to the different component of our application. 
import React, { Component } from 'react';

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//look for a file called index.js
import rootReducer from "./reducers";

const BudgetTotal = React.createContext();
class BudgetShower extends Component {
  state = {
    budget: 0
  }
  render() {
    return(
      <BudgetTotal.Provider value={this.state}>
                {this.props.children}
            </BudgetTotal.Provider>
    )
  }
}
//display and use for later
const BudgetConsumer = BudgetTotal.Consumer


const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
export { BudgetShower, BudgetConsumer}
