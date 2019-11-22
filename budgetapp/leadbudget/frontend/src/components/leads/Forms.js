import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLeads, createRecord } from "../../actions/leads";

export class Forms extends Component {
  state = {
    amount: "",
    description: ""
  };

  static propTypes = {
    addLeads: PropTypes.func.isRequired,
    createRecord: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  changeBalance = (action) => {
    let { amount, description } = this.state;
    amount = Number(Number(amount).toFixed(2));
    let budget = this.props.leads[0];
    budget.balance = Number(budget.balance);

    if (action == 'addition') {
      budget.balance += amount;
    } else if (action == 'expense') {
      budget.balance -= amount;
    }
    budget.balance = Number(budget.balance).toFixed(2)
    budget = budget.id;
    const record = { amount, description, action, budget }
    this.props.createRecord(record);
    this.setState({
      amount: "",
      description: ""
    })
  }
  onSubmit = e => {
    e.preventDefault();
    const { amount, description } = this.state;
    const lead = { amount, description };
    this.props.addLeads(lead);
    this.setState({
      amount: "",
      description: "",

    });
  };

  render() {
    const { amount, description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Record Transaction</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control"
              type="numeric"
              name="amount"
              onChange={this.onChange}
              value={amount}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          {/* <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div> */}
          <div className="form-group">
            <button type="button" onClick={() => this.changeBalance('addition')} className="btn btn-primary mr-1 mt-1">Add</button>
            <button type="button" onClick={() => this.changeBalance('expense')} className="btn btn-danger mt-1">Subtract</button>
          </div>
        </form>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  console.log("the state in FORMS", state)
  return ({
    leads: state.leads.leads
  })
}
export default connect(mapStateToProps, { addLeads, createRecord })(Forms);
