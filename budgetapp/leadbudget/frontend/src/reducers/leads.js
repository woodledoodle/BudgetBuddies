import { GET_LEADS, DELETE_LEADS, ADD_LEADS, UPDATE_LEADS, GET_RECORDS, DELETE_RECORD, CREATE_RECORD } from "../actions/types.js";

const initialState = {
  leads: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      };
    case DELETE_RECORD:
      let records = state.leads[0].records;
      records = records.filter(record => record.id !== action.payload)
      state.leads[0].records = records;
      return {
        ...state,
        leads: state.leads.map(lead => lead)
      }
    case DELETE_LEADS:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload)
      };
    case UPDATE_LEADS:
    case ADD_LEADS:
      return {
        ...state,
        leads: [...state.leads, action.payload]
      };
    case CREATE_RECORD:
      state.leads[0].records.push(action.payload)
      return {
        ...state,
        leads: state.leads.map(lead => lead)
      }
    case GET_RECORDS:
      return {
        ...state,
        records: action.payload
      }
    default:
      return state;
  }
}
