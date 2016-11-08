import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import {
  Heading1,
  Text
} from './Text';

import styles from './Styles/HeaderStyles';
import applyLetterSpacing from '../utils/letterSpacing';

const Header = ({ title, subTitle }) => {
  return (
    <View style={styles.header}>
      <Heading1 style={styles.title}>{applyLetterSpacing(title, 1)}</Heading1>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default Header;
