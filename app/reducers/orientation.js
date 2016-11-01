import ActionTypes from '../actions/types';

const blankState = {
  orientation: 'PORTRAIT'
};

const reducer = (state = blankState, action) => {
  switch (action.type) {
  case ActionTypes.ORIENTATION_CHANGE:
    return { orientation: action.payload.orientation };
  default:
    return state;
  }
};

export default reducer;
