import ActionTypes from '../actions/types';

// TODO: persist account on email success!
const blankState = {
  bootstrapped: false,
  error: false,
  isLoading: false,
  emailAddress: '',
  loggedIn: false,
  notificationsEnabled: false,
  token: ''
};

const reducer = (state = blankState, action) => {
  switch (action.type) {
  case ActionTypes.APP_BOOTSTRAP:
    return { ...blankState,
      emailAddress: action.payload.emailAddress,
      token: action.payload.token,
      notificationsEnabled: action.payload.notificationsEnabled,
      bootstrapped: true };
  case ActionTypes.NOTIFICATION_PERMISSION_CHANGE:
    return { ...state,
      notificationsEnabled: action.payload.notificationsEnabled };
  case ActionTypes.SIGNIN_REQUEST:
    return { ...state,
      isLoading: true,
      error: false,
      bootstrapped: true };
  case ActionTypes.SIGNIN_FAILURE:
    return { ...state,
      isLoading: false,
      error: false,
      bootstrapped: true };
  case ActionTypes.SIGNIN_SUCCESS:
    return { ...state,
      isLoading: false,
      emailAddress: action.payload.emailAddress,
      token: action.payload.token,
      bootstrapped: true };
  case ActionTypes.ADOBE_SUCCESS:
    return { ...state,
      isLoading: false,
      token: action.payload.token || state.token };
  case ActionTypes.LOGIN_REQUEST:
    return { ...state,
      isLoading: true,
      loggedIn: false,
      token: '',
      error: false,
      bootstrapped: true };
  case ActionTypes.LOGIN_FAILURE:
    return { ...state,
      isLoading: false,
      loggedIn: false,
      token: '',
      error: true,
      bootstrapped: true };
  case ActionTypes.LOGIN_SUCCESS:
    return { ...state,
      isLoading: false,
      loggedIn: true,
      token: action.payload.token,
      bootstrapped: true };
  default:
    return state;
  }
};

export default reducer;
