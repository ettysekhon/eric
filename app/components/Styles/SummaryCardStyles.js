import {
  StyleSheet,
} from 'react-native';

import { Colors } from '../../theme/';

export default StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.background
  },
  heading: {
    color: Colors.grayMediumDark
  },
  inner: {
    backgroundColor: Colors.grayLight,
  },
  content: {
    padding: 12,
  }
});
