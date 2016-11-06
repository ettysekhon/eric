import ActionTypes from './types';
import createAction from './createAction';
import { getItem } from '../utils/storage';
import routes from '../utils/routes';

const appBootstrap = createAction(ActionTypes.APP_BOOTSTRAP);

export default (navigator) => {
  return (dispatch) => {
    getItem('CREDENTIALS')
      .then((item) => {
        let credentials = {
          emailAddress: '',
          token: ''
        };
        if (item) {
          credentials = JSON.parse(item);
        }
        dispatch(appBootstrap({
          emailAddress: credentials.emailAddress,
          token: credentials.token
        }));
        const nextRoute = credentials.emailAddress
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
