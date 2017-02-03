import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';

const adobeRequest = createAction(ActionTypes.ADOBE_REQUEST);
const adobeSuccess = createAction(ActionTypes.ADOBE_SUCCESS);
const adobeFailure = createAction(ActionTypes.ADOBE_FAILURE);

const getAdobe = (emailAddress) => {
  return (dispatch, getState) => {
    const { app } = getState();
    dispatch(adobeRequest());
    API.getAdobe(app.token)
    .then((payload) => {
      dispatch(adobeSuccess({
        summary: payload.summary,
        top10: payload.top10,
        token: payload.token
      }));
    }).catch((err) => {
      dispatch(adobeFailure(null, err));
    });
  };
};

export default getAdobe;
