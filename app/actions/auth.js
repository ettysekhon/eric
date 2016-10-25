import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';

const signUpRequest = createAction(ActionTypes.SIGNUP_REQUEST);
const signUpSuccess = createAction(ActionTypes.SIGNUP_SUCCESS);
const signUpFailure = createAction(ActionTypes.SIGNUP_FAILURE);

const loginRequest = createAction(ActionTypes.LOGIN_REQUEST);
const loginSuccess = createAction(ActionTypes.LOGIN_SUCCESS);
const loginFailure = createAction(ActionTypes.LOGIN_FAILURE);

export const signUp = (emailAddress) => {
  return (dispatch) => {
    dispatch(signUpRequest());
    API.signUp(emailAddress)
    .then((payload) => {
      dispatch(signUpSuccess({
        emailAddress
      }));
    }).catch((err) => {
      dispatch(signUpFailure(null, err));
    });
  };
};

export const login = (pinCode) => {
  return (dispatch) => {
    dispatch(loginRequest());
    API.signUp(pinCode)
    .then((payload) => {
      dispatch(loginSuccess());
    }).catch((err) => {
      dispatch(loginFailure(null, err));
    });
  };
};
