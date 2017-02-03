import { combineReducers } from 'redux';
import appReducer from './app';
import adobeReducer from './adobe';
import orientationReducer from './orientation';

export default combineReducers({
  adobe: adobeReducer,
  app: appReducer,
  orientation: orientationReducer
});
