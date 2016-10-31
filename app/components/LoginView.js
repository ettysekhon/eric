import React, {
  Component,
  PropTypes
} from 'react';

import {
  Text,
  View
} from 'react-native';

import Orientation from 'react-native-orientation';

import { connect } from 'react-redux';

import BackgroundImage from './BackgroundImage';
import LinkObject from './LinkObject';
import styles from './Styles/SignupViewStyles';
import Logo from './Logo';
import FormControl from './FormControl';
import ButtonEric from './ButtonEric';
import routes from '../utils/routes';

import {
  login
} from '../actions/auth';

import {
  PasswordNumberTextInput
} from './TextInput';

import {
  TextMedium
} from './Text';

/* eslint-disable new-cap */
const TControl = FormControl(PasswordNumberTextInput);
/* eslint-enable new-cap */

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', canSubmit: false, orientation: 'PORTRAIT' };
    this.updateOrientation = this.updateOrientation.bind(this);
  }
  componentDidMount() {
    Orientation.addOrientationListener(this.updateOrientation);
  }
  componentDidUnMount() {
    Orientation.removeOrientationListener(this.updateOrientation);
  }
  updateOrientation(orientation) {
    /* eslint-disable react/no-set-state */
    this.setState({
      orientation
    });
    /* eslint-enable react/no-set-state */
  }
  render() {
    const error = this.props.error
      ? (
        <TextMedium
          style={styles.warningText}
        >{'ERROR: RE-ENTER PIN'}</TextMedium>
      )
      : null;
    const logo = this.state.orientation === 'PORTRAIT'
      ? (<Logo />)
      : null;
    return (
      <BackgroundImage>
        <View style={styles.content}>
          {
            logo
          }
          <View style={styles.form}>
            <TControl
              label={'ENTER THE PIN WE ASSIGNED FOR YOU'}
              onChangeText={(text) => {
                if (text.length > 4 || this.props.isLoading) {
                  return;
                }
                /* eslint-disable react/no-set-state */
                if (text.length === 4) {
                  this.setState({ text, canSubmit: true });
                } else {
                  this.setState({ text, canSubmit: false });
                }
                /* eslint-enable react/no-set-state */
              }}
              placeholder={'enter your pin'}
              style={styles.formControl}
              value={this.state.text}
            />
            <ButtonEric
              isDisabled={!this.state.canSubmit || this.props.isLoading}
              isLoading={this.props.isLoading}
              onPress={() => {
                /* eslint-disable react/no-set-state */
                this.setState({ canSubmit: false });
                /* eslint-enable react/no-set-state */
                this.props.login(this.state.text, this.props.navigator);
              }}
            >
              {'SUBMIT'}
            </ButtonEric>
            {
              error
            }
            <LinkObject
              onPress={() => {
                const { navigator } = this.props;
                if (navigator) {
                  requestAnimationFrame(() => {
                    return navigator.push({
                      route: routes.SIGNUP
                    });
                  });
                }
              }}
            >
              <Text
                style={styles.link}
              >GO BACK TO SIGNUP</Text>
            </LinkObject>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

LoginView.displayName = 'LoginView';

LoginView.propTypes = {
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  login: PropTypes.func,
  /* eslint-disable react/forbid-prop-types */
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    error: state.auth.error,
    isLoading: state.auth.isLoading,
    navigator: ownProps.navigator,
  };
}, (dispatch) => {
  return {
    login: (password, navigator) => {
      dispatch(login(password, navigator));
    }
  };
})(LoginView);
