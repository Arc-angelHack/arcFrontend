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
        console.log(error);
        dispatch(getRequestsFailure(error));
      }
    };

export { getRequests, getRequestsStart, getRequestsFailure, getRequestsSuccess }