import React, {
  Component,
} from 'react';

import {
  BackAndroid,
  Platform,
  StyleSheet,
  Navigator
} from 'react-native';

import LoginView from './components/LoginView';
import SignupView from './components/SignupView';
import SummaryView from './components/SummaryView';

import routes from './utils/routes';
import { Colors } from './theme/';

// TODO: refactor navigator
const renderRoute = (route, navigator) => {
  console.log('route', route);
  switch (route.route) {
  case routes.LOGIN:
    return (
      <LoginView
        navigator={navigator}
      />
    );
  case routes.SIGNUP:
    return (
      <SignupView
        navigator={navigator}
      />
    );
  case routes.SUMMARY:
    return (
      <SummaryView
        navigator={navigator}
      />
    );
  default:
    return (
      <SignupView
        navigator={navigator}
      />
    );
  }
};

const handlers = [];

class AppNavigator extends Component {
  constructor() {
    super();
    this.handleBackButton = this.handleBackButton.bind(this);
  }
  getChildContext() {
    return {
      addBackButtonListener: this.addBackButtonListener,
      removeBackButtonListener: this.removeBackButtonListener,
    };
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton() {
    for (let i = handlers.length - 1; i >= 0; i -= 1) {
      if (handlers[i]()) {
        return true;
      }
    }

    const { navigator } = this;

    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }

    return false;
  }
  render() {
    return (
      <Navigator
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          return Navigator.SceneConfigs.PushFromRight;
        }}
        initialRoute={{
          route: routes.SUMMARY
        }}
        ref={(c) => { this.navigator = c; }}
        renderScene={renderRoute}
        style={styles.container}
      />
    );
  }
}

AppNavigator.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1
  },
});

export default AppNavigator;
