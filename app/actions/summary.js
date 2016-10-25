import ActionTypes from './types';
import createAction from './createAction';
import API from '../api';

const summaryRequest = createAction(ActionTypes.SUMMARY_REQUEST);
const summarySuccess = createAction(ActionTypes.SUMMARY_SUCCESS);
const summaryFailure = createAction(ActionTypes.SUMMARY_FAILURE);

const getSummary = (emailAddress) => {
  return (dispatch) => {
    dispatch(summaryRequest());
    API.getSummary()
    .then((payload) => {
      dispatch(summarySuccess(payload));
    }).catch((err) => {
      dispatch(summaryFailure(null, err));
    });
  };
};

export default getSummary;
