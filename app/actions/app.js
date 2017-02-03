import ActionTypes from './types';
import createAction from './createAction';
import { getItem } from '../utils/storage';
import routes from '../utils/routes';

const appBootstrap = createAction(ActionTypes.APP_BOOTSTRAP);

export default (navigator) => {
  return (dispatch) => {
    // get some initial state from storage
    getItem('APP_STATE')
      .then((item) => {
        let appState = {
          credentials: {
            emailAddress: '',
            token: ''
          },
          notifications: {
            enabled: false
          },
          deviceToken: {}
        };
        if (item && item.notifications && item.credentials) {
          appState = JSON.parse(item);
        }
        dispatch(appBootstrap({
          emailAddress: appState.credentials.emailAddress,
          token: appState.credentials.token,
          notificationsEnabled: appState.notifications.enabled
        }));
        const nextRoute = appState.credentials.emailAddress
          ? routes.LOGIN
          : routes.SIGNIN;
        if (navigator) {
          requestAnimationFrame(() => {
            return navigator.push({
              route: nextRoute
            });
          });
        }
      });
  };
};
