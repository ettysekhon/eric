import ActionTypes from '../actions/types';

// TODO: persist account on email success!

const blankState = {
  signedUp: false,
  emailAddress: '',
  loggedIn: false
};

const app = (state = blankState, action) => {
  switch (action.type) {
  case ActionTypes.LOGOUT:
    return { ...blankState };
  default:
    return state;
  }
};

export default app;
