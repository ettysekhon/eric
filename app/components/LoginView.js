import React, {
  Component,
  PropTypes
} from 'react';

import {
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';

import BackgroundImage from './BackgroundImage';
import LinkObject from './LinkObject';
import styles from './Styles/SigninViewStyles';
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

/* eslint-disable new-cap */
const TControl = FormControl(PasswordNumberTextInput);
/* eslint-enable new-cap */

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', canSubmit: false };
  }
  render() {
    let logo = null;
    let formStyle = {};
    if (this.props.orientation === 'PORTRAIT') {
      logo = (<Logo />);
      formStyle = {
        marginTop: 50
      };
    }
    return (
      <BackgroundImage>
        <View style={styles.content}>
          {
            logo
          }
          <View style={formStyle}>
            <TControl
              editable={!this.props.isLoading}
              label={'ENTER PIN TO CONTINUE'}
              maxLength={4}
              onChangeText={(text) => {
                /* eslint-disable react/no-set-state */
                if (text.length === 4) {
                  this.setState({ text, canSubmit: true });
                } else {
                  this.setState({ text, canSubmit: false });
                }
                /* eslint-enable react/no-set-state */
              }}
              placeholder={'****'}
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
            <LinkObject
              onPress={() => {
                const { navigator } = this.props;
                if (navigator) {
                  requestAnimationFrame(() => {
                    return navigator.push({
                      route: routes.SIGNIN
                    });
                  });
                }
              }}
            >
              <Text
                style={styles.link}
              >SIGNIN</Text>
            </LinkObject>
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
  orientation: PropTypes.string,
};

const select = (state, ownProps) => {
  return {
    error: state.app.error,
    isLoading: state.app.isLoading,
    navigator: ownProps.navigator,
    orientation: state.orientation.orientation
  };
};

export default connect(select, (dispatch) => {
  return {
    login: (password, navigator) => {
      dispatch(login(password, navigator));
    }
  };
})(LoginView);
