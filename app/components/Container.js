import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import styles from './Styles/ContainerStyles';

const Container = (props) => {
  return (
    <View style={styles.container}>
      {
        props.children
      }
    </View>
  );
};

Container.displayName = 'Container';

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
