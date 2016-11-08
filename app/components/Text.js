import React from 'react';
import { Text as RNText } from 'react-native';
import styles from './Styles/TextStyles';

export const Text = ({ style, ...props }) => {
  return (
    <RNText
      style={[styles.font, styles.regular, style]}
      {...props}
    />
  );
};

export const TextMedium = ({ style, ...props }) => {
  return (
    <RNText
      style={[styles.font, styles.medium, style]}
      {...props}
    />
  );
};

export const Heading1 = ({ style, ...props }) => {
  return (
    <RNText
      style={[styles.fontBold, styles.h1, style]}
      {...props}
    />
  );
};

export const Heading2 = ({ style, ...props }) => {
  return (
    <RNText
      style={[styles.fontBold, styles.h2, style]}
      {...props}
    />
  );
};

export const Heading3 = ({ style, ...props }) => {
  return (
    <RNText
      style={[styles.fontBold, styles.h3, style]}
      {...props}
    />
  );
};

export const Heading4 = ({ style, ...props }) => {
  return (
    <RNText
      style={[styles.fontBold, styles.h4, style]}
      {...props}
    />
  );
};
