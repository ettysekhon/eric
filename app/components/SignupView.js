import React, {
  Component,
  PropTypes
} from 'react';

import {
  View
} from 'react-native';

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

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.state = { emailAddress: '', canSubmit: false };
  }
  render() {
    return (
      <BackgroundImage>
        <View style={styles.content}>
          <Logo />
          <View style={styles.form}>
            <TControl
              autoFocus
              label={'ACCOUNT EMAIL'}
              onChangeText={(text) => {
                if (this.props.isLoading) {
                  return;
                }
                /* eslint-disable max-len */
                const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                /* eslint-enable max-len */
                const state = { ...this.state, emailAddress: text };
                const validEmail = state.emailAddress === '' || emailRegEx.test(state.emailAddress);
                const isEmpty = state.emailAddress === '';
                state.canSubmit = !(isEmpty || !validEmail);
                /* eslint-disable react/no-set-state */
                this.setState(state);
                /* eslint-enable react/no-set-state */
              }}
              placeholder={'enter email address'}
              style={styles.formControl}
              value={this.state.emailAddress}
            />
            <ButtonEric
              isDisabled={!this.state.canSubmit}
              isLoading={this.props.isLoading}
              onPress={() => {
                /* eslint-disable react/no-set-state */
                this.setState({ canSubmit: false });
                /* eslint-enable react/no-set-state */
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
