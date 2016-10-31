import React, {
  Component,
  PropTypes
} from 'react';

import {
  View
} from 'react-native';

import Orientation from 'react-native-orientation';

import { connect } from 'react-redux';

import BackgroundImage from './BackgroundImage';
import styles from './Styles/SignupViewStyles';
import Logo from './Logo';
import FormControl from './FormControl';
import ButtonEric from './ButtonEric';

import {
  signUp
} from '../actions/auth';

import {
  EmailTextInput
} from './TextInput';

/* eslint-disable new-cap */
const TControl = FormControl(EmailTextInput);
/* eslint-enable new-cap */

const validateEmail = (emailAddress) => {
  /* eslint-disable max-len */
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /* eslint-enable max-len */
  const validEmail = emailAddress === '' || emailRegEx.test(emailAddress);
  const isEmpty = emailAddress === '';
  return !(isEmpty || !validEmail);
};

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.state = { emailAddress: '', canSubmit: false, orientation: 'PORTRAIT' };
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
    const logo = this.state.orientation === 'PORTRAIT'
      ? (<Logo />)
      : null;
    return (
      <BackgroundImage>
        <View style={styles.content}>
          {
            logo
          }
          <View>
            <TControl
              label={'ACCOUNT EMAIL'}
              onChangeText={(text) => {
                if (this.props.isLoading) {
                  return;
                }
                const canSubmit = validateEmail(text);
                const state = { ...this.state, emailAddress: text, canSubmit };
                /* eslint-disable react/no-set-state */
                this.setState(state);
                /* eslint-enable react/no-set-state */
              }}
              placeholder={'enter email address'}
              style={styles.formControl}
              value={this.state.emailAddress}
            />
            <ButtonEric
              isDisabled={!this.state.canSubmit || this.props.isLoading}
              isLoading={this.props.isLoading}
              onPress={() => {
                this.props.signUp(this.state.emailAddress, this.props.navigator);
              }}
            >
              {'SUBMIT'}
            </ButtonEric>
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

SignupView.displayName = 'SignupView';

SignupView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  /* eslint-disable react/forbid-prop-types */
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  signUp: PropTypes.func,
};

export default connect((state, ownProps) => {
  return {
    isLoading: state.auth.isLoading,
    navigator: ownProps.navigator,
  };
}, (dispatch) => {
  return {
    signUp: (emailAddress, navigator) => {
      dispatch(signUp(emailAddress, navigator));
    }
  };
})(SignupView);
