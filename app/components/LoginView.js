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
  login
} from '../actions/auth';

import {
  PasswordNumberTextInput
} from './TextInput';

/* eslint-disable new-cap */
const TControl = FormControl(PasswordNumberTextInput);
/* eslint-enable new-cap */

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <BackgroundImage>
        <View style={styles.content}>
          <Logo />
          <View style={styles.form}>
            <TControl
              autoFocus
              label={'ENTER PIN SENT TO YOU VIA EMAIL'}
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
              isDisabled={!this.state.canSubmit}
              isLoading={this.props.isLoading}
              onPress={() => {
                /* eslint-disable react/no-set-state */
                this.setState({ canSubmit: false });
                /* eslint-enable react/no-set-state */
                this.props.login(this.state.pinCode, this.props.navigator);
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

LoginView.displayName = 'LoginView';

LoginView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  login: PropTypes.func,
  /* eslint-disable react/forbid-prop-types */
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    isLoading: state.auth.isLoading,
    navigator: ownProps.navigator,
  };
}, (dispatch) => {
  return {
    login: (pinCode, navigator) => {
      dispatch(login(pinCode, navigator));
    }
  };
})(LoginView);
