import * as types from '../../actionTypes/sos';
import { baseURL } from '../../consts';

const getSosStart = () => ({
  type: types.GET_ALL_SOSREQUESTS_START,
});

const getSosSuccess = payload => ({
  type: types.GET_ALL_SOSREQUESTS_SUCCESS,
  payload,
});

const getSosFailure = () => ({
  type: types.GET_ALL_SOSREQUESTS_FAILED,
});

const getSos = (coords) =>
  async function (dispatch) {
    try {
      dispatch(getSosStart());
      const response = await fetch(`${baseURL}/sosrequests?lat=${coords.latitude}&long=${coords.longitude}&range=20`);
      const payload = JSON.parse(response._bodyText);
      dispatch(getSosSuccess(payload.data))
    } catch (error) {
      dispatch(getSosFailure(error));
    }
  };

const createSosStart = () => ({
  type: types.CREATE_SOSREQUEST_START,
});

const createSosSuccess = payload => ({
  type: types.CREATE_SOSREQUEST_SUCCESS,
  payload,
});

const createSosFailure = () => ({
  type: types.CREATE_SOSREQUEST_FAILED,
});

const createSos = (text, coords, userId, token, locationData) =>
  async function (dispatch) {
    try {
      const requestBody = {
        lat: `${coords.latitude}`,
        long: `${coords.longitude}`,
        description: text,
        city: locationData.city,
        zip: locationData.zip,
        state: locationData.state,
        street: locationData.street,
        user_id: userId,
      };
      dispatch(createSosStart());
      const response = await fetch(`${baseURL}/sosrequests`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
      });
      const payload = JSON.parse(response._bodyText);
      dispatch(createSosSuccess(requestBody))
    } catch (error) {
      dispatch(createSosFailure(error));
    }
  };

export { getSos, createSos, }