import React, {
  PropTypes
} from 'react';

import {
  Text
} from './Text';

import styles from './Styles/LabelStyles';

const Label = ({ text }) => {
  return (
    <Text
      style={styles.label}
    >{ text }</Text>
 );
};

Label.propTypes = {
  text: PropTypes.string
};

export default Label;
