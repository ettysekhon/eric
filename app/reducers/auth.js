import ActionTypes from '../actions/types';

// TODO: persist account on email success!
const blankState = {
  error: false,
  isLoading: false,
  emailAddress: '',
  loggedIn: false,
  token: ''
};

const reducer = (state = blankState, action) => {
  switch (action.type) {
  case ActionTypes.SIGNIN_REQUEST:
    return { ...blankState, isLoading: true, error: false };
  case ActionTypes.SIGNIN_FAILURE:
    return { ...blankState, error: false };
  case ActionTypes.SIGNIN_SUCCESS:
    return { ...blankState,
      emailAddress: action.payload.emailAddress,
      token: action.payload.token };
  case ActionTypes.LOGIN_REQUEST:
    return { ...state, isLoading: true, loggedIn: false, token: '', error: false };
  case ActionTypes.LOGIN_FAILURE:
    return { ...state, isLoading: false, loggedIn: false, token: '', error: true };
  case ActionTypes.LOGIN_SUCCESS:
    return { ...state,
      isLoading: false,
      loggedIn: true,
      token: action.payload.token };
  default:
    return state;
  }
};

export default reducer;
