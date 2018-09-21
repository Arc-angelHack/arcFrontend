import * as types from '../../actionTypes/app';

const getGeoLocation = () => {
    return dispatch => {        
        dispatch({ type: types.GET_COORDS_START });
        navigator.geolocation.getCurrentPosition(response =>  dispatch({ type: types.GET_COORDS_SUCCESS, payload: {
            coords: {
                latitude: response.coords.latitude,
                longitude: response.coords.longitude,
            }
        }}), 
        error => dispatch({ type: types.GET_COORDS_FAILED }), { timeout: 20000, enableHighAccuracy: true });
    }
};

export { getGeoLocation };