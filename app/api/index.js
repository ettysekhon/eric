import device from '../utils/device';
// TODO: remove this hack when fixed in later version of react-native
// http://stackoverflow.com/questions/38077273/react-native-fect-network-request-failed-not-using-localhost

const getEndpoint = (path) => {
  const host = 'http://eric.kicks-ass.org/api/';
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

const post = (url, body) => {
  // const { auth } = store.getState();
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        // Authorization: auth.token,
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

const signUp = (emailAddress) => {
  return new Promise((resolve, reject) => {
    post(getEndpoint('signup'), {
      emailAddress
    })
    .then((response) => {
      resolve();
    })
    .catch((err) => {
      console.log('error getting products', err);
      reject(err);
    });
  });
};

const login = (pinCode) => {
  return new Promise((resolve, reject) => {
    post(getEndpoint('signup'), {
      pinCode
    })
    .then((response) => {
      resolve();
    })
    .catch((err) => {
      console.log('error getting products', err);
      reject(err);
    });
  });
};

const getSummary = () => {
  return new Promise((resolve, reject) => {
    get(getEndpoint('summary'))
      .then((response) => {
        const summary = response.summary;
        resolve(summary);
      })
      .catch((err) => {
        console.log('error getting summary', err);
        reject(err);
      });
  });
};

export default {
  signUp,
  login,
  getSummary
};
