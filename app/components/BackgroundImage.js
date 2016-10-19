import React, {
  PropTypes,
} from 'react';

import {
  Image
} from 'react-native';

import styles from './Styles/BackgroundImageStyles';

const BackgroundImage = ({ children }) => {
  return (
    <Image
      source={require('../../assets/images/background.jpg')}
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
  children: PropTypes.node,
}

export default BackgroundImage;
