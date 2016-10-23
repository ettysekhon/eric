import React from 'react';
import {
  Image
} from 'react-native';
import images from '../theme/Images';
import styles from './Styles/LogoStyles';

const Logo = () => {
  return (
    <Image
      source={images.logo}
      style={styles.container}
    />
  );
};

export default Logo;
