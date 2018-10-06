import { AsyncStorage } from 'react-native';
import * as types from '../../actionTypes/app';
import { baseURL } from '../../consts';

const getGeoLocation = () => {
  return dispatch => {
    dispatch({ type: types.GET_COORDS_START });
    navigator.geolocation.getCurrentPosition(response => dispatch({
      type: types.GET_COORDS_SUCCESS, payload: {
        coords: {
          latitude: response.coords.latitude,
          longitude: response.coords.longitude,
        }
      }
    }),
      error => dispatch({ type: types.GET_COORDS_FAILED }), { timeout: 20000, enableHighAccuracy: true });
  }
};

const showCommunityList = () => {
    return dispatch => {
        dispatch({ type: types.SHOW_COMMUNITY_LIST });
    }
};

const hideCommunityList = () => {
    return dispatch => {
        dispatch({ type: types.HIDE_COMMUNITY_LIST });
    }
}

const autoLogin = () =>
  async dispatch => {
    try {
      dispatch({ type: types.LOGIN_START })
      const token = await AsyncStorage.getItem('token')
      if (token) {
        dispatch({ type: types.LOGIN_SUCCESS })
      } else {
        dispatch({ type: types.LOGIN_FAILED })
      }
    } catch (e) {
      console.error(e)
    }
  }

const signupWithEmail = (user) => {
  return async dispatch => {
    try {
      dispatch({ type: types.SIGNUP_EMAIL_START })
      const response = await fetch(`${baseURL}/api/users/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (response.status === 201) {
        const token = JSON.parse(response._bodyText).token;
        await AsyncStorage.setItem('token', token);
        dispatch({ type: types.SIGNUP_EMAIL_SUCCESS })
      } else {
        dispatch({ type: types.SIGNUP_EMAIL_FAILED })
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: types.SIGNUP_EMAIL_FAILED })
    }
  }
}
/*  This will be where the logout <i>action<i> takes place. 
Can not be implemented and tested until I update with the MapViewHOC bug patch Tim made.

const logout = () => {

}

*/

export { getGeoLocation, signupWithEmail, autoLogin, showCommunityList, hideCommunityList };
