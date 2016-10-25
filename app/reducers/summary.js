import objectAssign from 'object-assign';
import ActionTypes from '../actions/types';

// TODO: persist account on email success!
const blankState = {
  isLoading: false,
  data: {}
};

const reducer = (state = blankState, action) => {
  switch (action.type) {
  case ActionTypes.SUMMARY_REQUEST:
    return objectAssign({}, blankState, { isLoading: true });
  case ActionTypes.SUMMARY_FAILURE:
    return blankState;
  case ActionTypes.SUMMARY_SUCCESS:
    return objectAssign({}, blankState, { data: action.payload.summary });
  default:
    return state;
  }
};

export default reducer;
