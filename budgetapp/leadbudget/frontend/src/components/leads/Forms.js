import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLeads } from "../../actions/leads";

export class Forms extends Component {
  state = {
    balance: "",
    description: ""
  };

  static propTypes = {
    addLeads: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  changeBalance = (action) => {

    console.log("changing balnce", action)
    console.log("Current state: ", this.state.balance)
  
  }
  onSubmit = e => {
    e.preventDefault();
    console.log("submitting");
    const { balance, description } = this.state;
    const lead = { balance, description };
    this.props.addLeads(lead);
    this.setState({
      balance: "",
      description: "",

    });
  };

  render() {
    const { balance, description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Record Balance</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control"
              type="text"
              name="balance"
              onChange={this.onChange}
              value={balance}
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
            <button type="button" onClick={()=> this.changeBalance('add')} className="btn btn-primary mr-1 mt-1">Add</button>
            <button type="button" onClick={()=>this.changeBalance('subtract')} className="btn btn-danger mt-1">Subtract</button>
          </div>
        </form>
      </div >
    );
  }
}

export default connect(null, { addLeads })(Forms);
