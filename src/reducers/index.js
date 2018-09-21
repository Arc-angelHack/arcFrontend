import { combineReducers } from "redux";
import incidentsReducer from './incidents';
import requestsReducer from './requests';

export default combineReducers({ incidents: incidentsReducer, requests: requestsReducer });