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

const Header = ({ title, subTitle }) => {
  return (
    <View style={styles.header}>
      <Heading1>{title}</Heading1>
      <Text>{subTitle}</Text>
    </View>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default Header;
