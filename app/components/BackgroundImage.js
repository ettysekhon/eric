import React, {
  PropTypes,
} from 'react';

import {
  Image
} from 'react-native';

import styles from './Styles/BackgroundImageStyles';
import images from '../theme/Images';

const BackgroundImage = ({ children }) => {
  return (
    <Image
      source={images.background}
      style={styles.container}
    >
      {
        children
      }
    </Image>
  );
};

BackgroundImage.displayName = 'BackgroundImage';

BackgroundImage.propTypes = {
  children: PropTypes.node
};

export default BackgroundImage;
