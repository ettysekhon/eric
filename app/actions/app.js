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
          emailAddress: '',
          token: '',
          notificationsEnabled: {}
        };
        if (item) {
          appState = JSON.parse(item);
        }
        dispatch(appBootstrap({
          emailAddress: appState.emailAddress,
          token: appState.token,
          notificationsEnabled: appState.notificationsEnabled
        }));
        const nextRoute = appState.emailAddress
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
