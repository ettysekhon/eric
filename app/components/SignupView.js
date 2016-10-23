import React, {
  Component
} from 'react';

import {
  Text,
  View
} from 'react-native';

import BackgroundImage from './BackgroundImage';
import styles from './Styles/SignupViewStyles';
import Logo from './Logo';
import FormControl from './FormControl';
import ButtonEric from './ButtonEric';

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
                console.log('submit!');
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

export default SignupView;
