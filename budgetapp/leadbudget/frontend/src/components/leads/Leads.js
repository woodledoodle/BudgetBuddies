//Component
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLeads } from "../../actions/leads";

export class Leads extends Component {
  static propTypes = {
    lead: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLeads: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
    console.log("are records here?? ", this.props.lead);
  }
  render() {
    return (
      <Fragment>
        <h2>Records</h2>
        <h2>Balance</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>Description</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.props.lead.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.description}</td>
                <td>{lead.balance}</td>
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
            ))} */}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  lead: state.leads.leads
});
export default connect(mapStateToProps, { getLeads, deleteLeads })(Leads);
