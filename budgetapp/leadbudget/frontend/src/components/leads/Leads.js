//Component
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLeads, getRecords } from "../../actions/leads";

export class Leads extends Component {
  static propTypes = {
    lead: PropTypes.array.isRequired,
    records: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLeads: PropTypes.func.isRequired,
    getRecords: PropTypes.func.isRequired
  };


  componentDidMount() {
    this.props.getLeads();
    console.log("are records here?? ", this.props.lead);
  }
  getRecords(budget) {

    console.log("will this break???", budget)
    if (budget) {
      this.props.getRecords(budget.id);
    }
  }
  render() {
    const lead = this.props.lead[0];
    // this.someOtherFunction(lead)
    if (!this.props.records) {
      this.getRecords(lead);
    }
    console.log("the lead is: ", lead)
    console.log("adff", lead)
    return (
      <Fragment>
        <h2>Records</h2>
        <h2>Balance: {(lead) ? lead.balance : ""}</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {(this.props.records) ? this.props.records.map(record => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.description}</td>
                <td>{record.amount}</td>
                <td>{record.action}</td>
                <td>
                  <button
                    onClick={this.props.deleteLeads.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            )) : <tr></tr>}
          </tbody>
        </table>
      </Fragment >
    );
  }
}
const mapStateToProps = (state) => {
  console.log("the stattttYTTTETTETETETET", state)
  return ({
    lead: state.leads.leads,
    records: state.leads.records
  })
}

export default connect(mapStateToProps, { getLeads, deleteLeads, getRecords })(Leads);
