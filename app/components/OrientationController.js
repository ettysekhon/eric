import {
  Component,
  PropTypes
} from 'react';

import {
  Platform
} from 'react-native';

import Orientation from 'react-native-orientation';

import { connect } from 'react-redux';

import updateOrientation from '../actions/orientation';

// TODO: fix android hack!
class OrientationController extends Component {
  constructor() {
    super();
    this.updateOrientation = this.updateOrientation.bind(this);
  }

  componentDidMount() {
    if (OrientationController.isAndroid) {
      return;
    }
    Orientation.getInitialOrientation(this.updateOrientation);
    Orientation.addOrientationListener(this.updateOrientation);
  }
  componentDidUnMount() {
    if (OrientationController.isAndroid) {
      return;
    }
    Orientation.removeOrientationListener(this.updateOrientation);
  }
  updateOrientation(orientation) {
    console.log('orientationChange', orientation);
    if (OrientationController.isAndroid) {
      return;
    }
    if (orientation === 'PORTRAIT') {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    this.props.updateOrientation(orientation);
  }

  render() {
    return null;
  }
}

OrientationController.displayName = 'OrientationController';

OrientationController.propTypes = {
  updateOrientation: PropTypes.func.isRequired
};

OrientationController.isAndroid = Platform.OS === 'android';

const actions = (dispatch) => {
  return {
    updateOrientation: (orientation) => {
      dispatch(updateOrientation(orientation));
    }
  };
};

export default connect(null, actions)(OrientationController);
