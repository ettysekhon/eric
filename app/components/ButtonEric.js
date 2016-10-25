import React, {
  PropTypes,
} from 'react';

import {
  Text
} from 'react-native';

import Button from './Button';
import styles from './Styles/ButtonStyles';

const ButtonEric = (props) => {
  return (
    <Button
      activityIndicatorColor={'#FFF'}
      isDisabled={props.isDisabled}
      isLoading={props.isLoading}
      onPress={props.onPress}
      style={[styles.button, props.style]}
      textStyle={[styles.textStyle, props.textStyle]}
    >
      { props.children }
    </Button>
  );
};

ButtonEric.displayName = 'ButtonEric';

ButtonEric.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  style: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  textStyle: Text.propTypes.style,
};

export default ButtonEric;
