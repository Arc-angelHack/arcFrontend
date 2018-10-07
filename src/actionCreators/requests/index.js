import * as types from '../../actionTypes/requests';
import { baseURL } from '../../consts';

const getRequestsStart = () => ({
  type: types.GET_ALL_REQUESTS_START,
});

const getRequestsSuccess = payload => ({
  type: types.GET_ALL_REQUESTS_SUCCESS,
  payload,
});

const getRequestsFailure = () => ({
  type: types.GET_ALL_REQUESTS_FAILED,
});

const getRequests = () =>
  async function (dispatch) {
    try {
      dispatch(getRequestsStart());
      const response = await fetch(`${baseURL}/requests`);
      const payload = JSON.parse(response._bodyText);
      dispatch(getRequestsSuccess(payload.data))
    } catch (error) {
      dispatch(getRequestsFailure(error));
    }
  };

const createRequestStart = () => ({
  type: types.CREATE_REQUEST_START,
});

const createRequestSuccess = payload => ({
  type: types.CREATE_REQUEST_SUCCESS,
  payload,
});

const createRequestFailure = () => ({
  type: types.CREATE_REQUEST_FAILED,
});

const createRequest = (text, coords, userId, token) =>
  async function (dispatch) {
    {/* TODO: Shouldn't have hardcoded userIds */ }
    try {
      const requestBody = {
        latitude: `${coords.latitude}`,
        longitude: `${coords.longitude}`,
        description: text,
        user_id: userId,
        ask_food: false,
        ask_water: false,
        ask_shelter: false,
        ask_medical: false,
      };
      dispatch(createRequestStart());
      const response = await fetch(`${baseURL}/api/${userId}/requests`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
      });
      const payload = JSON.parse(response._bodyText);
      console.log(payload);
      dispatch(createRequestSuccess(payload))
    } catch (error) {
      dispatch(createRequestFailure(error));
    }
  };

export { getRequests, createRequest, }