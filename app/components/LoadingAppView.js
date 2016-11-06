import React from 'react';

import {
  View
} from 'react-native';

import BackgroundImage from './BackgroundImage';
import ModalSpinner from './ModalSpinner';
import styles from './Styles/SigninViewStyles';
import Logo from './Logo';

const LoadingAppView = () => {
  return (
    <BackgroundImage>
      <ModalSpinner
        visible
      />
      <View style={styles.content}>
        <Logo />
      </View>
    </BackgroundImage>
  );
};

LoadingAppView.displayName = 'LoadingAppView';

export default LoadingAppView;
