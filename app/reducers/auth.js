import ActionTypes from '../actions/types';

// TODO: persist account on email success!
const blankState = {
  isLoading: false,
  emailAddress: '',
  loggedIn: false,
  token: ''
};

const reducer = (state = blankState, action) => {
  switch (action.type) {
  case ActionTypes.SIGNUP_REQUEST:
    return { ...blankState, isLoading: true };
  case ActionTypes.SIGNUP_FAILURE:
    return blankState;
  case ActionTypes.SIGNUP_SUCCESS:
    return { ...blankState,
      emailAddress: action.payload.emailAddress,
      token: action.payload.token };
  case ActionTypes.LOGIN_REQUEST:
    return { ...state, isLoading: true, loggedIn: false, token: '' };
  case ActionTypes.LOGIN_FAILURE:
    return { ...state, isLoading: false, loggedIn: false, token: '' };
  case ActionTypes.LOGIN_SUCCESS:
    return { ...state,
      isLoading: false,
      loggedIn: true,
      token: action.payload.token };
  case ActionTypes.UPDATE_TOKEN:
    return { ...state, isLoading: false, loggedIn: true };
  default:
    return state;
  }
};

export default reducer;
