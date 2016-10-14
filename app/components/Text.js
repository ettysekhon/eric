import React from 'react';
import { Text as RNText} from 'react-native';
import styles from './Styles/TextStyles';

export const Text = ({style, ...props}) => {
  return <RNText style={[styles.font, styles.normal, style]} {...props} />;
};

export const Heading1 = ({style, ...props}) => {
  return <RNText style={[styles.font, styles.h1, style]} {...props} />;
};
