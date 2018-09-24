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

export { getIncidents, getIncidentsStart, getIncidentsFailure, getIncidentsSuccess }