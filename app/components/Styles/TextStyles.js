import {
  Platform,
  StyleSheet,
} from 'react-native';

import { Fonts, Colors } from '../../theme/';

const { h1, h2, h3, h4, regular, description, input, label } = Fonts.style;

const isAndroid = Platform.OS === 'android';

const addWeight = (style) => {
  const ret = {
    fontWeight: 'bold',
    ...style
  };
  if (isAndroid) return style;
  return ret;
};

export default StyleSheet.create({
  font: { fontFamily: Fonts.type.base },
  fontBold: { fontFamily: Fonts.type.base },
  regular: { ...regular, ...{ color: Colors.grayDark } },
  medium: { ...description, ...{ color: Colors.grayDark } },
  h1: { ...h1, ...addWeight({ color: Colors.grayDark }) },
  h2: { ...h2, ...addWeight({ color: Colors.grayDark }) },
  h3: { ...h3, ...addWeight({ color: Colors.grayDark }) },
  h4: { ...h4, ...addWeight({ color: Colors.grayDark }) }
});
