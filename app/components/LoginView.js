import React, {
  Component,
  PropTypes
} from 'react';

import {
  View
} from 'react-native';

import BackgroundImage from './BackgroundImage';
import styles from './Styles/SignupViewStyles';
import Logo from './Logo';
import FormControl from './FormControl';
import ButtonEric from './ButtonEric';
import routes from '../utils/routes';

import {
  PasswordNumberTextInput
} from './TextInput';

/* eslint-disable new-cap */
const TControl = FormControl(PasswordNumberTextInput);
/* eslint-enable new-cap */

class SignupView extends Component {
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
                if (text.length > 4) {
                  return;
                }
                if (text.length === 4) {
                  this.setState({ text, canSubmit: true });
                } else {
                  this.setState({ text, canSubmit: false });
                }
              }}
              placeholder={'enter your pin'}
              style={styles.formControl}
              value={this.state.text}
            />
            <ButtonEric
              isDisabled={!this.state.canSubmit}
              onPress={() => {
                const { navigator } = this.props;
                if (navigator) {
                  requestAnimationFrame(() => {
                    return navigator.push({
                      route: routes.SUMMARY
                    });
                  });
                }
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
  /* eslint-disable react/forbid-prop-types */
  navigator: PropTypes.object.isRequired
  /* eslint-enable react/forbid-prop-types */
};

export default SignupView;
