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

const getRequests = (coords) =>
  async function (dispatch) {
    try {
      dispatch(getRequestsStart());
      const responseOffers = await fetch(`${baseURL}/api/resOffer?lat=${coords.latitude}&long=${coords.longitude}`);
      const responseRequests = await fetch(`${baseURL}/api/resRequest?lat=${coords.latitude}&long=${coords.longitude}`)
      const payloadOffers = JSON.parse(responseOffers._bodyText);
      const payloadRequests = JSON.parse(responseRequests._bodyText);
      const spreadData = [...payloadOffers.data, ...payloadRequests.data];
      dispatch(getRequestsSuccess(spreadData));
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