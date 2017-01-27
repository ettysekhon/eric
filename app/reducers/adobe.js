import objectAssign from 'object-assign';
import ActionTypes from '../actions/types';

// TODO: persist account on email success!
const blankState = {
  error: false,
  isLoading: false,
  summary: {},
  top10: []
};

const reducer = (state = blankState, action) => {
  switch (action.type) {
  case ActionTypes.ADOBE_REQUEST:
    return objectAssign({}, blankState, { isLoading: true });
  case ActionTypes.ADOBEFAILURE:
    return objectAssign({}, blankState, { error: true });
  case ActionTypes.ADOBE_SUCCESS:
    return objectAssign({}, blankState, {
      summary: action.payload.summary,
      top10: action.payload.top10
    });
  default:
    return state;
  }
};

export default reducer;
