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
  return (dispatch) => {
    dispatch(signUpRequest());
    API.signUp(emailAddress)
    .then((payload) => {
      if (navigator) {
        requestAnimationFrame(() => {
          return navigator.push({
            route: routes.LOGIN
          });
        });
      }
      dispatch(signUpSuccess({
        emailAddress
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

export const login = (pinCode, navigator) => {
  return (dispatch) => {
    dispatch(loginRequest());
    API.signUp(pinCode)
    .then((payload) => {
      if (navigator) {
        requestAnimationFrame(() => {
          return navigator.push({
            route: routes.SUMMARY
          });
        });
      }
      dispatch(loginSuccess());
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