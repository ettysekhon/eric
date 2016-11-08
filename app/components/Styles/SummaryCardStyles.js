import {
  StyleSheet,
} from 'react-native';

import { Colors } from '../../theme/';

import {
  normalize
} from '../../utils/size';

export default StyleSheet.create({
  card: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
    backgroundColor: Colors.background
  },
  heading: {
    color: Colors.grayMediumDark,
  },
  inner: {
    backgroundColor: Colors.grayLight,
  },
  content: {
    padding: normalize(12),
  }
});
