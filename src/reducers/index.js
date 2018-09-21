import { combineReducers } from "redux";
import incidentsReducer from './incidents';
import requestsReducer from './requests';
import appReducer from './app';

export default combineReducers({ incidents: incidentsReducer, requests: requestsReducer, app: appReducer });