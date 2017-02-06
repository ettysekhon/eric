import {
  Alert,
  Platform,
  PushNotificationIOS
} from 'react-native';
import objectAssign from 'object-assign';

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

const saveAppState = (state) => {
  setItem('APP_STATE', state);
};

// TODO: change to signUp
export const signIn = (emailAddress, navigator) => {
  return (dispatch, getState) => {
    const { app } = getState();
    dispatch(signInRequest());
    API.signIn(emailAddress, app.token)
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
      saveAppState(objectAssign({}, app, {
        emailAddress,
        token: payload.token
      }));
    }).catch((err) => {
      dispatch(signInFailure(null, err));
      saveAppState(objectAssign({}, app, {
        emailAddress: '',
        token: ''
      }));
      Alert.alert(
        'Error',
        'Looks like we have an issue signing you in. Please connect to the internet and try again.',
        [
          {
            text: 'OK',
            onPress: () => {
              if (navigator) {
                requestAnimationFrame(() => {
                  return navigator.push({
                    route: routes.SIGNIN
                  });
                });
              }
            }
          }
        ]
      );
    });
  };
};

export const login = (password, navigator) => {
  return (dispatch, getState) => {
    const { app } = getState();
    const { emailAddress } = app;
    dispatch(loginRequest());
    API.login(emailAddress, password, app.token)
    .then((payload) => {
      if (Platform.OS !== 'android') {
        setTimeout(() => {
          PushNotificationIOS.requestPermissions();
        }, 5000);
      }
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
              if (navigator) {
                requestAnimationFrame(() => {
                  return navigator.push({
                    route: routes.SIGNIN
                  });
                });
              }
            }
          }
        ]
      );
    });
  };
};
