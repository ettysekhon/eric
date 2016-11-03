import {
  Alert
} from 'react-native';

import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';
import routes from '../utils/routes';
import { setItem } from '../utils/storage';

const signUpRequest = createAction(ActionTypes.SIGNUP_REQUEST);
const signUpSuccess = createAction(ActionTypes.SIGNUP_SUCCESS);
const signUpFailure = createAction(ActionTypes.SIGNUP_FAILURE);

const loginRequest = createAction(ActionTypes.LOGIN_REQUEST);
const loginSuccess = createAction(ActionTypes.LOGIN_SUCCESS);
const loginFailure = createAction(ActionTypes.LOGIN_FAILURE);

const saveEmailAddress = (emailAddress) => {
  setItem('EMAIL_ADDRESS', emailAddress);
};

export const signUp = (emailAddress, navigator) => {
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(signUpRequest());
    API.signUp(emailAddress, auth.token)
    .then((payload) => {
      if (navigator) {
        dispatch(signUpSuccess({
          emailAddress,
          token: payload.token
        }));
        requestAnimationFrame(() => {
          return navigator.push({
            route: routes.LOGIN
          });
        });
      }
      saveEmailAddress(emailAddress);
    }).catch((err) => {
      dispatch(signUpFailure(null, err));
      saveEmailAddress('');
      Alert.alert(
        'Error',
        'Looks like we have an issue signing you up. Please connect to the internet and try again.',
        [
          {
            text: 'OK',
            onPress: () => {
              return console.log('OK Pressed!');
            }
          }
        ]
      );
    });
  };
};

export const login = (password, navigator) => {
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(loginRequest());
    API.login(password, auth.token)
    .then((payload) => {
      if (navigator) {
        dispatch(loginSuccess({
          token: payload.token
        }));
        requestAnimationFrame(() => {
          return navigator.push({
            route: routes.SUMMARY
          });
        });
      }
    }).catch((err) => {
      dispatch(loginFailure(null, err));
      Alert.alert(
        'Error',
        'Looks like we have an issue logging you in. Please connect to the internet and check your PIN.',
        [
          {
            text: 'OK',
            onPress: () => {
              return console.log('OK Pressed!');
            }
          }
        ]
      );
    });
  };
};
