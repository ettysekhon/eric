import device from '../utils/device';
// TODO: remove this hack when fixed in later version of react-native
// http://stackoverflow.com/questions/38077273/react-native-fect-network-request-failed-not-using-localhost

const getEndpoint = (path) => {
  const test = false;
  const host = test === true
    ? 'http://localhost:8082/api/'
    : 'http://eric.kicks-ass.org/api/';
  return `${host}${path}`;
};

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const getJson = (response) => {
  return response.text().then((text) => {
    if (text === '' || text === 'OK' || typeof text === 'undefined') {
      return {};
    }
    return JSON.parse(text);
  });
};

const getPayload = (json) => {
  return typeof json.payload === 'undefined'
    ? json
    : json.payload;
};

/* eslint-disable no-unused-vars */
const get = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(status)
    .then(getJson)
    .then(getPayload)
    .then((payload) => {
      resolve(payload);
    })
    .catch((err) => {
      console.log('API error', err);
      reject(err);
    });
  });
};
/* eslint-enable no-unused-vars */

const post = (url, body) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        device,
        ...body
      })
    })
    .then(status)
    .then(getJson)
    .then(getPayload)
    .then((payload) => {
      resolve(payload);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

const signUp = (emailAddress, token) => {
  return post(getEndpoint('signup'), {
    emailAddress,
    token
  });
};

const login = (password, token) => {
  return post(getEndpoint('login'), {
    password,
    token
  });
};

const getSummary = (token) => {
  return post(getEndpoint('summary'), {
    token
  });
};

export default {
  signUp,
  login,
  getSummary
};
