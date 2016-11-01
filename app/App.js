import React from 'react';

import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import Navigator from './Navigator';
import OrientationController from './components/OrientationController';

const App = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'rgba(0, 0, 0, 0.2)'}
        barStyle={'default'}
        translucent
      />
      <Navigator />
      <OrientationController />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
