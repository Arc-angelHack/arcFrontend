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

const setLogin = (userId, token) =>
  dispatch => {
    dispatch({ type: types.LOGIN_SUCCESS, userId, token, });
  }

const autoLogin = () =>
  async dispatch => {
    try {
      dispatch({ type: types.LOGIN_START })
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      if (token) {
        dispatch({ type: types.LOGIN_SUCCESS, token, userId, })
      } else {
        dispatch({ type: types.LOGIN_FAILED })
      }
    } catch (e) {
      console.error(e)
    }
  }

const manualLogin = (credentials) =>
  async dispatch => {
    try {
      dispatch({ type: types.LOGIN_START })
      const response = await fetch(`${baseURL}api/users/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (response.status === 200) {
        const token = JSON.parse(response._bodyText).token;
        const userId = JSON.parse(response._bodyText).id;
        console.log(token, userId);
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userId', `${userId}`);
        dispatch({ type: types.LOGIN_SUCCESS, token, userId });
      } else {
        dispatch({ type: types.LOGIN_FAILED });
      }
    } catch (e) {
      console.error(e);
      dispatch({ type: types.LOGIN_FAILED });
    }
  }

const signupWithEmail = (user) => {
  return async dispatch => {
    try {
      dispatch({ type: types.SIGNUP_EMAIL_START })
      const response = await fetch(`${baseURL}api/users/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (response.status === 201) {
        const token = JSON.parse(response._bodyText).token;
        const userId = JSON.parse(response._bodyText).id;
        console.log(token, userId);
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userId', `${userId}`);
        dispatch({ type: types.SIGNUP_EMAIL_SUCCESS, token, userId, })
      } else {
        dispatch({ type: types.SIGNUP_EMAIL_FAILED })
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: types.SIGNUP_EMAIL_FAILED })
    }
  }
}

const logout = () => {

}

export { getGeoLocation, signupWithEmail, autoLogin, manualLogin, showCommunityList, hideCommunityList, setLogin };
