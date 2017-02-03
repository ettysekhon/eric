import objectAssign from 'object-assign';
import ActionTypes from './types';
import createAction from './createAction';
import { setItem } from '../utils/storage';
import API from '../api';

const saveAppState = (state) => {
  setItem('APP_STATE', state);
};

export const setNotificationEnabled = (notificationsEnabled) => {
  return {
    type: ActionTypes.NOTIFICATION_PERMISSION_CHANGE,
    payload: { notificationsEnabled }
  };
};

const storeToken = createAction(ActionTypes.STORE_DEVICE_TOKEN);

export const storeDeviceToken = (deviceToken) => {
  console.log('storeDeviceToken', deviceToken);
  return (dispatch, getState) => {
    const { app } = getState();
    API.notificationDevice(deviceToken)
    .then((payload) => {
      console.log('success sending notification device token');
    })
    .catch((err) => {
      console.log('error sending notification device token');
    });
    saveAppState(objectAssign({}, app, {
      deviceToken
    }));
    dispatch(storeToken({
      deviceToken
    }));
  };
};

export const receivePushNotification = (notification) => {
  console.log('receivePushNotification', notification);
};
