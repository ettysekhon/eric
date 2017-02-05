import {
  Component,
  PropTypes
} from 'react';

import {
  PushNotificationIOS
} from 'react-native';

import {
  connect
} from 'react-redux';

import {
  storeDeviceToken,
} from '../actions/notifications';

class PushNotificationController extends Component {
  constructor() {
    super();
    this.onRegistered = this.onRegistered.bind(this);
    this.onRegistrationError = this.onRegistrationError.bind(this);
  }
  componentWillMount() {
    PushNotificationIOS.addEventListener('register', this.onRegistered);
    PushNotificationIOS.removeEventListener('registrationError', this.onRegistrationError);
  }
  componentWillUnmount() {
    PushNotificationIOS.removeEventListener('register', this.onRegistered);
  }
  /* eslint-disable class-methods-use-this */
  onRegistered(deviceToken) {
    console.log(`Device Token: ${deviceToken}`);
    this.props.storeDeviceToken(deviceToken);
  }
  onRegistrationError(error) {
    console.log(`Error (${error.code}): ${error.message}`);
  }
  render() {
    return null;
  }
}

PushNotificationController.displayName = 'PushNotificationController';

PushNotificationController.propTypes = {
  storeDeviceToken: PropTypes.func.isRequired,
};

const select = (state, ownProps) => {
  return {
    notificationsEnabled: state.app.notificationsEnabled
  };
};

export default connect(select, (dispatch) => {
  return {
    storeDeviceToken: (token) => {
      dispatch(storeDeviceToken(token));
    }
  };
})(PushNotificationController);
