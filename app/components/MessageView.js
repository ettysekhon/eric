import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {
  Heading3,
} from './Text';

import ButtonEric from './ButtonEric';
import { Colors } from '../theme/';

const MessageView = (props) => {
  const {
    alternateButtonOnPress,
    alternateButtonText,
    buttonIsDisabled,
    buttonIsLoading,
    buttonText,
    buttonOnPress,
    icon,
    message } = props;
  const alternateButton = alternateButtonOnPress
    ? (
      <ButtonEric
        onPress={alternateButtonOnPress}
        style={{
          backgroundColor: '#7ED321'
        }}
      >
        {alternateButtonText}
      </ButtonEric>)
    : null;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
      }}
    >
      <EvilIcons
        color={Colors.primary}
        name={icon}
        size={90}
        style={{
          marginTop: -100
        }}
      />
      <Heading3
        style={{
          paddingBottom: 20
        }}
      >{message}</Heading3>
      <ButtonEric
        isDisabled={buttonIsDisabled}
        isLoading={buttonIsLoading}
        onPress={buttonOnPress}
      >
        {buttonText}
      </ButtonEric>
      {
        alternateButton
      }
    </View>
  );
};

MessageView.displayName = 'MessageView';

MessageView.propTypes = {
  alternateButtonOnPress: PropTypes.func,
  alternateButtonText: PropTypes.string,
  buttonIsDisabled: PropTypes.bool,
  buttonIsLoading: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonOnPress: PropTypes.func,
  icon: PropTypes.string,
  message: PropTypes.string,
};

export default MessageView;
