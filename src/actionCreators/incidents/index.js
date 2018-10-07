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

const getIncidents = () =>
  async function (dispatch) {
    try {
      dispatch(getIncidentsStart());
      const response = await fetch(`${baseURL}/incidents`);
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
        latitude: `${coords.latitude}`,
        longitude: `${coords.longitude}`,
        description: text,
        user_id: userId,
      };
      dispatch(createIncidentStart());
      const response = await fetch(`${baseURL}/api/${userId}/incidents`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
      });
      console.log(response);
      const payload = JSON.parse(response._bodyText);
      console.log(payload);
      dispatch(createIncidentSuccess(requestBody))
    } catch (error) {
      dispatch(createIncidentFailure(error));
    }
  };

export { getIncidents, createIncident, }