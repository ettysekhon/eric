import React, {
  Component,
  PropTypes
} from 'react';

import {
  View
} from 'react-native';

import Label from './Label';

const fcHOC = (InputComponent) => {
  class FormControl extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '' };
    }
    render() {
      const { label, style, ...props } = this.props;
      return (
        <View
          style={style}
        >
          <Label text={label} />
          <InputComponent {...props} />
        </View>
      );
    }
  }
  FormControl.propTypes = {
    label: PropTypes.string,
    style: PropTypes.number
  };
  return FormControl;
};

export default fcHOC;
