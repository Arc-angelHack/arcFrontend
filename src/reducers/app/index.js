import * as types from '../../actionTypes/app';

const initialState = {
  coords: null,
  isLoading: false,
  auth: false,
  showList: true,
  loggedIn: false,
  token: null,
  userId: null,
  edit: false,
  medicalSettings: {
    blood_type: '',
    medication: '',
    insurance: '',
    allergies: '',
    emergency_name: '',
    emergency_phone: ''
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_COORDS_START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_COORDS_SUCCESS:
      const coords = action.payload.coords;
      return {
        ...state,
        coords,
        isLoading: false
      };
    case types.GET_COORDS_FAILED:
      return {
        ...state,
        isLoading: false
      };
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedIn: true,
        token: action.token,
        userId: ~~action.userId
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        loggedIn: false
      };
    case types.LOGOUT:
      return initialState;
    case types.SIGNUP_EMAIL_START:
      return {
        ...state,
        isLoading: true
      };
    case types.SIGNUP_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedIn: true,
        token: action.token,
        userId: ~~action.userId
      };
    case types.SIGNUP_EMAIL_FAILED:
      return {
        ...state,
        isLoading: false,
        loggedIn: false
      };
    case types.MEDICAL_SETTINGS_GET_START:
      return {
        ...state,
        isLoading: false
      };
    case types.MEDICAL_SETTINGS_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        medicalSettings: action.data
      };
    case types.MEDICAL_SETTINGS_GET_FAILED:
      return {
        ...state,
      };
    case types.MEDICAL_SETTINGS_PATCH_START:
      return {
        ...state,
        isLoading: false
      };
    case types.MEDICAL_SETTINGS_PATCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        medicalSettings: {
          ...state.medicalSettings,
          ...action.data
        }
      };
    case types.MEDICAL_SETTINGS_PATCH_FAILED:
      return {
        ...state,
      };
    case types.PERSONAL_SETTINGS_GET_START:
      return {
        ...state,
        isLoading: false
      };
    case types.PERSONAL_SETTINGS_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        personalSettings: action.data
      };
    case types.PERSONAL_SETTINGS_GET_FAILED:
      return {
        ...state,
      };
    case types.PERSONAL_SETTINGS_PATCH_START:
      return {
        ...state,
        isLoading: false
      };
    case types.PERSONAL_SETTINGS_PATCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        personalSettings: {
          ...state.personalSettings,
          ...action.data
        }
      };
    case types.PERSONAL_SETTINGS_PATCH_FAILED:
      return {
        ...state,
      };
    case types.SHOW_COMMUNITY_LIST:
      return {
        ...state,
        showList: true,
      }
    case types.HIDE_COMMUNITY_LIST:
      return {
        ...state,
        showList: false,
      }
    case types.EDIT_START:
      return {
        ...state,
        edit: true,
      }
    case types.EDIT_END:
      return {
        ...state,
        edit: false,
      }
    default:
      return state
  }
}