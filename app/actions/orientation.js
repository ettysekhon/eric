import ActionTypes from './types';
import createAction from './createAction';

const orientationChangeAction = createAction(ActionTypes.ORIENTATION_CHANGE);

export default (orientation) => {
  return orientationChangeAction({ orientation });
};
