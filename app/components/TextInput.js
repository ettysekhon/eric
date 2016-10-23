import React from 'react';
import {
  TextInput as RNTextInput
} from 'react-native';

import styles from './Styles/TextInputStyles';

export const EmailTextInput = ({ style, ...props }) => {
  const newProps = {
    keyboardType: 'numeric',
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
    secureTextEntry: false,
    keyboardType: 'numeric',
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
