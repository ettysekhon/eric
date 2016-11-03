import React from 'react';
import {
  TextInput as RNTextInput
} from 'react-native';

import styles from './Styles/TextInputStyles';

export const EmailTextInput = ({ style, ...props }) => {
  const newProps = {
    keyboardType: 'email-address',
    autoCapitalize: 'none',
    placeholderTextColor: 'white'
  };
  return (
    <RNTextInput
      style={[styles.textInput, style]}
      {...props}
      {...newProps}
    />
  );
};

export const PasswordNumberTextInput = ({ style, ...props }) => {
  const newProps = {
    autoCorrect: false,
    enablesReturnKeyAutomatically: true,
    secureTextEntry: true,
    keyboardType: 'numeric',
    placeholderTextColor: 'white'
  };
  return (
    <RNTextInput
      style={[styles.textInput, styles.numberInput, style]}
      {...props}
      {...newProps}
    />
  );
};
