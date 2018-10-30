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

const getRequests = (coords, token) =>
  async function (dispatch) {
    try {
      dispatch(getRequestsStart());
      const responseOffers = await fetch(`${baseURL}/api/resOffer?lat=${coords.latitude}&long=${coords.longitude}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      });
      const responseRequests = await fetch(`${baseURL}/api/resRequest?lat=${coords.latitude}&long=${coords.longitude}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      })
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

const createRequest = (text, coords, userId, token, data) =>
  async function (dispatch) {
    try {
      const requestBody = {
        lat: `${coords.latitude}`,
        long: `${coords.longitude}`,
        description: text,
        user_id: userId,
        food: data.food,
        water: data.water,
        shelter: data.shelter,
        medical: data.medical,
        other: data.other,
        people_count: data.peopleCount,
      };
      dispatch(createRequestStart());
      const url = data.type == 'offer' ? `${baseURL}/api/resOffer/create` : `${baseURL}/api/resRequest/create`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
      });
      const payload = JSON.parse(response._bodyText);
      dispatch(createRequestSuccess(payload));
    } catch (error) {
      dispatch(createRequestFailure(error));
    }
  };

export { getRequests, createRequest, }