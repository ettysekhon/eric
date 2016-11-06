import {
  Alert
} from 'react-native';

import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';
import routes from '../utils/routes';
import { setItem } from '../utils/storage';

const signInRequest = createAction(ActionTypes.SIGNIN_REQUEST);
const signInSuccess = createAction(ActionTypes.SIGNIN_SUCCESS);
const signInFailure = createAction(ActionTypes.SIGNIN_FAILURE);

const loginRequest = createAction(ActionTypes.LOGIN_REQUEST);
const loginSuccess = createAction(ActionTypes.LOGIN_SUCCESS);
const loginFailure = createAction(ActionTypes.LOGIN_FAILURE);

const saveItem = (key, value) => {
  setItem(key, value);
};

export const signIn = (emailAddress, navigator) => {
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(signInRequest());
    API.signIn(emailAddress, auth.token)
    .then((payload) => {
      if (navigator) {
        requestAnimationFrame(() => {
          return navigator.push({
            route: routes.LOGIN
          });
        });
        dispatch(signInSuccess({
          emailAddress,
          token: payload.token
        }));
      }
      saveItem('CREDENTIALS', {
        emailAddress,
        token: payload.token
      });
    }).catch((err) => {
      dispatch(signInFailure(null, err));
      saveItem('CREDENTIALS', {
        emailAddress: '',
        token: ''
      });
      Alert.alert(
        'Error',
        'Looks like we have an issue signing you in. Please connect to the internet and try again.',
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
        requestAnimationFrame(() => {
          return navigator.push({
            route: routes.SUMMARY
          });
        });
        dispatch(loginSuccess({
          token: payload.token
        }));
      }
    }).catch((err) => {
      dispatch(loginFailure(null, err));
      Alert.alert(
        'Error',
        'Looks like we have an issue logging you in. Please connect to the internet and check your PIN or sign in again.',
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
