import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';

const summaryRequest = createAction(ActionTypes.SUMMARY_REQUEST);
const summarySuccess = createAction(ActionTypes.SUMMARY_SUCCESS);
const summaryFailure = createAction(ActionTypes.SUMMARY_FAILURE);

const getSummary = (emailAddress) => {
  return (dispatch, getState) => {
    const { auth } = getState();
    dispatch(summaryRequest());
    API.getSummary(auth.token)
    .then((payload) => {
      dispatch(summarySuccess({
        summary: payload.summary
      }));
    }).catch((err) => {
      dispatch(summaryFailure(null, err));
    });
  };
};

export default getSummary;
