import React, {
  Component,
  PropTypes
} from 'react';

import {
  View
} from 'react-native';

import { connect } from 'react-redux';

import BackgroundImage from './BackgroundImage';
import ModalSpinner from './ModalSpinner';
import styles from './Styles/SigninViewStyles';
import Logo from './Logo';
import bootstrap from '../actions/app';

class LoadingAppView extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.bootstrap(this.props.navigator);
    }, 500);
  }
  render() {
    return (
      <BackgroundImage>
        <ModalSpinner
          visible={!this.props.bootstrapped}
        />
        <View style={styles.content}>
          <Logo />
        </View>
      </BackgroundImage>
    );
  }
}

LoadingAppView.displayName = 'LoadingAppView';

LoadingAppView.propTypes = {
  bootstrap: PropTypes.func.isRequired,
  bootstrapped: PropTypes.bool.isRequired,
  /* eslint-disable react/forbid-prop-types */
  navigator: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    bootstrapped: state.auth.bootstrapped,
    navigator: ownProps.navigator,
  };
}, (dispatch) => {
  return {
    bootstrap: (navigator) => {
      dispatch(bootstrap(navigator));
    }
  };
})(LoadingAppView);
