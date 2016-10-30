import {
  Alert
} from 'react-native';

import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';
import routes from '../utils/routes';

const signUpRequest = createAction(ActionTypes.SIGNUP_REQUEST);
const signUpSuccess = createAction(ActionTypes.SIGNUP_SUCCESS);
const signUpFailure = createAction(ActionTypes.SIGNUP_FAILURE);

const loginRequest = createAction(ActionTypes.LOGIN_REQUEST);
const loginSuccess = createAction(ActionTypes.LOGIN_SUCCESS);
const loginFailure = createAction(ActionTypes.LOGIN_FAILURE);

export const signUp = (emailAddress, navigator) => {
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(signUpRequest());
    API.signUp(emailAddress, auth.token)
    .then((payload) => {
      if (navigator) {
        requestAnimationFrame(() => {
          return navigator.push({
            route: routes.LOGIN
          });
        });
      }
      dispatch(signUpSuccess({
        emailAddress,
        token: payload.token
      }));
    }).catch((err) => {
      dispatch(signUpFailure(null, err));
      Alert.alert(
        'Howdy!',
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
        requestAnimationFrame(() => {
          return navigator.push({
            route: routes.SUMMARY
          });
        });
      }
      dispatch(loginSuccess({
        token: payload.token
      }));
    }).catch((err) => {
      dispatch(loginFailure(null, err));
      Alert.alert(
        'Howdy!',
        'Looks like we have an issue logging you in. Please connect to the internet and try again.',
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
