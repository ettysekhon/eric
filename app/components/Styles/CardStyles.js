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
  inner: {
    backgroundColor: Colors.grayLight,
  },
  content: {
    padding: 10,
  }
});
