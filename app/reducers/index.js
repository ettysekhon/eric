import { combineReducers } from 'redux';
import authReducer from './auth';
import summaryReducer from './summary';
import orientationReducer from './orientation';

export default combineReducers({
  auth: authReducer,
  orientation: orientationReducer,
  summary: summaryReducer
});
