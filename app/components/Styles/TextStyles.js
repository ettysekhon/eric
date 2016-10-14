import {
  Dimensions,
  StyleSheet,
} from 'react-native';

import { Fonts, Colors } from '../../Themes/';

const { h1, h2, h3, h4, normal, description, input, label } = Fonts.styles;

const getColor = (prop, color) => {
  return {
    prop: Colors[color]
  }
}

export default StyleSheet.create({
  h1: { ...h1, ...getColor('color', 'grayDark') }
});
