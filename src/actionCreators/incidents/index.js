import * as types from '../../actionTypes/incidents';
import { baseURL } from '../../consts';

const getIncidentsStart = () => ({
  type: types.GET_ALL_INCIDENTS_START,
});

const getIncidentsSuccess = payload => ({
  type: types.GET_ALL_INCIDENTS_SUCCESS,
  payload,
});

const getIncidentsFailure = () => ({
  type: types.GET_ALL_INCIDENTS_FAILED,
});

const getIncidents = coords =>
  async function (dispatch) {
    try {
      dispatch(getIncidentsStart());
      const response = await fetch(`${baseURL}/incidents?lat=${coords.latitude}&long=${coords.longitude}&range=20`);
      const payload = JSON.parse(response._bodyText);
      dispatch(getIncidentsSuccess(payload.data))
    } catch (error) {
      dispatch(getIncidentsFailure(error));
    }
  };

const createIncidentStart = () => ({
  type: types.CREATE_INCIDENT_START,
});

const createIncidentSuccess = payload => ({
  type: types.CREATE_INCIDENT_SUCCESS,
  payload,
});

const createIncidentFailure = () => ({
  type: types.CREATE_INCIDENT_FAILED,
});

const createIncident = (text, coords, userId, token) =>
  async function (dispatch) {
    try {
      const requestBody = {
        lat: `${coords.latitude}`,
        long: `${coords.longitude}`,
        description: text,
        user_id: userId,
      };
      dispatch(createIncidentStart());
      const response = await fetch(`${baseURL}/incidents/byuser`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
      });
      const payload = JSON.parse(response._bodyText);
      dispatch(createIncidentSuccess(payload));
    } catch (error) {
      dispatch(createIncidentFailure(error));
    }
  };

export { getIncidents, createIncident, }