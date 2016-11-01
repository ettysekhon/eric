import {
  Component,
  PropTypes
} from 'react';

import Orientation from 'react-native-orientation';

import { connect } from 'react-redux';

import updateOrientation from '../actions/orientation';

class OrientationController extends Component {
  constructor() {
    super();
    this.updateOrientation = this.updateOrientation.bind(this);
  }

  componentDidMount() {
    Orientation.getInitialOrientation(this.updateOrientation);
    Orientation.addOrientationListener(this.updateOrientation);
  }
  componentDidUnMount() {
    Orientation.removeOrientationListener(this.updateOrientation);
  }
  updateOrientation(orientation) {
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

const actions = (dispatch) => {
  return {
    updateOrientation: (orientation) => {
      dispatch(updateOrientation(orientation));
    }
  };
};

export default connect(null, actions)(OrientationController);
