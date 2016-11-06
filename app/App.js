import React, {
  Component,
  PropTypes
} from 'react';


import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import { connect } from 'react-redux';

import Navigator from './Navigator';

import updateOrientation from './actions/orientation';

class App extends Component {
  constructor() {
    super();
    this.onLayout = this.onLayout.bind(this);
  }
  onLayout(e) {
    const { width, height } = e.nativeEvent.layout;
    const orientation = (width > height) ? 'LANDSCAPE' : 'PORTRAIT';
    this.props.updateOrientation(orientation);
  }
  render() {
    return (
      <View
        onLayout={this.onLayout}
        style={styles.container}
      >
        <StatusBar
          backgroundColor={'rgba(0, 0, 0, 0.2)'}
          barStyle={'default'}
          translucent
        />
        <Navigator />
      </View>
    );
  }
}

App.displayName = 'App';

App.propTypes = {
  updateOrientation: PropTypes.func.isRequired
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

const actions = (dispatch) => {
  return {
    updateOrientation: (orientation) => {
      dispatch(updateOrientation(orientation));
    }
  };
};

export default connect(null, actions)(App);
