import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {
  Text
} from './Text';

import styles from './Styles/CardStyles';
import { Colors } from '../theme/';

const Card = ({ title }) => {
  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <Text style={styles.content}>{title}</Text>
        <LinearGradient
          start={[0.0, 0.0]} end={[1.0, 0.0]}
          colors={[
            Colors.secondaryGradientStart,
            Colors.secondaryGradientEnd
          ]}
          style={styles.data}
        >
          <View><Text>{'Some data'}</Text></View>
        </LinearGradient>
        <Text style={styles.content}>{title}</Text>
      </View>
    </View>
  );
};

Card.displayName = 'Card';

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
