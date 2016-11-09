import React, {
  PropTypes,
} from 'react';

import {
  View,
  TouchableHighlight
} from 'react-native';


import styles from './Styles/CardContentStyles';

const CardContent = ({ children, onPress }) => {
  const props = onPress ? {
    onPress,
    underlayColor: 'transparent'
  } : null;
  return (
    <TouchableHighlight
      {...props}
    ><View style={styles.content}>{children}</View></TouchableHighlight>
  );
};

CardContent.displayName = 'CardContent';

CardContent.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node
};

export default CardContent;
