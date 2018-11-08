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
  return async dispatch => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: types.LOGOUT });
  }
}

//Medical
const createMedicalSettings = () => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      const response = await fetch(`${baseURL}profile/medical/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          blood_type: '',
          allergies: '',
          medication: '',
          insurance: '',
          emergency_name: '',
          emergency_phone: ''
        })
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

const getMedicalSettings = () => {
  return async dispatch => {
    dispatch({ type: types.MEDICAL_SETTINGS_GET_START })
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      const response = await fetch(`${baseURL}profile/medical/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      const settings = JSON.parse(response._bodyText)
      if (Object.keys(settings).length === 0 && settings.constructor === Object) {
        dispatch({ type: types.MEDICAL_SETTINGS_GET_FAILED })
        console.log('Initiating default medical settings');
        dispatch(createMedicalSettings());
      }
      console.log(settings.data);
      const { data } = settings;
      dispatch({ type: types.MEDICAL_SETTINGS_GET_SUCCESS, data })
    } catch (error) {
      dispatch({ type: types.MEDICAL_SETTINGS_GET_FAILED })
      console.log(error);
    }
  }
}

const updateMedicalSettings = () => {

}

// PERSONAL

const createPersonalSettings = () => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      const response = await fetch(`${baseURL}profile/personal/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          birth_date: '',
          city: '',
          state: '',
          phone: '',
          gps: false,
        })
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

const getPersonalSettings = () => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      const response = await fetch(`${baseURL}profile/personal/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
      console.log(response)
      const settings = JSON.parse(response._bodyText)
      if (Object.keys(settings).length === 0 && settings.constructor === Object) {
        console.log('Initiating default personal settings');
        dispatch(createPersonalSettings());
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const startEdit = () => {
  return async dispatch => {
    dispatch({ type: types.EDIT_START });
  }
}

const endEdit = () => {
  return async dispatch => {
    dispatch({ type: types.EDIT_END });
  }
}

export {
  getGeoLocation,
  signupWithEmail,
  autoLogin,
  manualLogin,
  showCommunityList,
  hideCommunityList,
  setLogin,
  logout,
  getPersonalSettings,
  getMedicalSettings,
  startEdit,
  endEdit
};
