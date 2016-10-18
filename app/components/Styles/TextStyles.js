import {
  StyleSheet,
} from 'react-native';

import { Fonts, Colors } from '../../theme/';

const { h1, h2, h3, h4, regular, description, input, label } = Fonts.style;

const getColor = (prop, color) => {
  const ret = {};
  ret[prop] = Colors[color];
  return ret;
}

export default StyleSheet.create({
  font: { fontFamily: Fonts.type.base },
  regular: { ...regular, ...getColor('color', 'grayMediumDark') },
  medium: { ...description, ...getColor('color', 'grayMediumDark') },
  h1: { ...h1, ...getColor('color', 'grayDark') },
  h2: { ...h2, ...getColor('color', 'grayDark') },
  h3: { ...h3, ...getColor('color', 'grayMediumDark') },
  h4: { ...h4, ...getColor('color', 'grayDark') }
});
