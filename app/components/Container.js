import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import { Colors } from '../theme/';

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
}

export default Container;
