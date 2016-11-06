import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

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

export default (data = {}) => {
  return createStore(reducers, data, middleware);
};
//
//
// import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
// import objectAssign from 'object-assign';
// import reducers from '../reducers';
// import { getItem } from '../utils/storage';
//
// const thunk = ({ dispatch, getState }) => {
//   return (next) => {
//     return (action) => {
//       if (typeof action === 'function') {
//         return action(dispatch, getState);
//       }
//       return next(action);
//     };
//   };
// };
//
// const middleware = applyMiddleware(thunk, createLogger());
//
// const createAppStore = (data = {}) => {
//   return createStore(reducers, data, middleware);
// };
//
// export default (onComplete) => {
//   const emptyState = {
//     auth: {
//       error: false,
//       isLoading: false,
//       emailAddress: '',
//       loggedIn: false,
//       token: ''
//     },
//     summary: {
//       error: false,
//       isLoading: false,
//       data: {}
//     }
//   };
//   getItem('CREDENTIALS')
//     .then((item) => {
//       let credentials = {
//         emailAddress: '',
//         token: ''
//       };
//       if (item) {
//         credentials = JSON.parse(item);
//       }
//       const store = objectAssign({},
//         emptyState, {
//           auth: {
//             error: false,
//             isLoading: false,
//             emailAddress: credentials.emailAddress,
//             loggedIn: false,
//             token: credentials.token
//           }
//         });
//       onComplete(createAppStore(store));
//     })
//     .catch(() => {
//       onComplete(createAppStore(emptyState));
//     });
// };
