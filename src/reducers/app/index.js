import * as types from '../../actionTypes/app';

const initialState = {
  coords: null,
  isLoading: false,
  auth: false,
  showList: true,
  loggedIn: false,
  token: null,
  userId: null
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
    default:
      return state
  }
}