import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import throttle from 'lodash/throttle';
import { loadState, saveState } from '../utils/storage';
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

const middleware = applyMiddleware(thunk, createLogger());

export default (preloadedState = {}) => {
  const persistedState = loadState();
  const store = createStore(
    reducers,
    { ...preloadedState, ...persistedState },
    middleware
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};
