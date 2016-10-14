import {
  Dimensions,
  StyleSheet,
} from 'react-native';

import { Fonts, Colors } from '../../theme/';

const { h1, h2, h3, h4, normal, description, input, label } = Fonts.style;

const getColor = (prop, color) => {
  const ret = {};
  ret[prop] = Colors[color];
  return ret;
}

console.log('normal', normal);
console.log('getColor', getColor('color', 'primary'));

export default StyleSheet.create({
  font: { fontFamily: Fonts.type.base },
  normal: { ...normal, ...getColor('color', 'primary') },
  h1: { ...h1, ...getColor('color', 'primary') }
});
