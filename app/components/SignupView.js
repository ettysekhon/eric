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
  EmailTextInput
} from './TextInput';

/* eslint-disable new-cap */
const TControl = FormControl(EmailTextInput);
/* eslint-enable new-cap */

class SignupView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Hello' };
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
                this.setState({ text });
              }}
              placeholder={'Enter email address'}
              style={styles.formControl}
            />
            <ButtonEric
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
              {'Submit'}
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
