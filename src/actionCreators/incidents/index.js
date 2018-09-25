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
      console.log(error);
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

const createIncident = (text, coords) =>
  async function (dispatch) {
    {/* TODO: Shouldn't have hardcoded userIds */}
    try {
      const userId = 5;
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjV9LCJpYXQiOjE1Mzc4NDc0MDgsImV4cCI6MTUzODcxMTQwOH0.KmMq-PLa_IvNhs-JNCQgpCe9eNXBUtbnlVxZYiDj4wc";
      const requestBody = {
        latitude: `${coords.latitude}`,
        longitude: `${coords.longitude}`,
        description: text,
        user_id: userId,
      };
      console.log(requestBody);
      dispatch(createIncidentStart());
      const response = await fetch(`${baseURL}/api/${userId}/incidents`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
      });
      const payload = JSON.parse(response._bodyText);
      // Temporary
      dispatch(createIncidentSuccess(requestBody))
    } catch (error) {
      console.log(error);
      dispatch(createIncidentFailure(error));
    }
  };

export { getIncidents, createIncident, }