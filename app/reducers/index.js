import { combineReducers } from 'redux';
import authReducer from './auth';
import adobeReducer from './adobe';
import orientationReducer from './orientation';

export default combineReducers({
  adobe: adobeReducer,
  auth: authReducer,
  orientation: orientationReducer
});
