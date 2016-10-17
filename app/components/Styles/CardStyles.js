import {
  StyleSheet,
} from 'react-native';

import { Colors } from '../../theme/';

export default StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Colors.background
  },
  inner: {
    backgroundColor: 'white',
  },
  content: {
    padding: 10,
  },
  data: {
    backgroundColor: 'transparent',
    marginLeft: -10,
    marginRight: -10,
  }
});
