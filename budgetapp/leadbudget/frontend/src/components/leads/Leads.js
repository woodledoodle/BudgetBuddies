//Component
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteRecord } from "../../actions/leads";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteRecord: PropTypes.func.isRequired
  };


  componentDidMount() {
    this.props.getLeads();
    console.log("are records here?? ", this.props.leads);
  }
  render() {
    const lead = this.props.leads[0];
    // this.someOtherFunction(lead)
    
    console.log("the lead is: ", lead)
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
            {(lead) ? lead.records.map(record => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.description}</td>
                <td>{record.amount}</td>
                <td>{record.action}</td>
                <td>
                  <button
                    onClick={this.props.deleteRecord.bind(this, record.id)}
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
    leads: state.leads.leads
  })
}

export default connect(mapStateToProps, { getLeads, deleteRecord })(Leads);
