import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import reducers from '../reducers';

const thunk = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
      return next(action);
    };
  };
};


const createAppStore = applyMiddleware(thunk, createLogger())(createStore);

export default (onComplete = () => { return null; }) => {
  const store = autoRehydrate()(createAppStore)(reducers);
  persistStore(store, { storage: AsyncStorage }, onComplete);
  return store;
};
