import {
  StyleSheet,
} from 'react-native';

import {
  normalize
} from '../../utils/size';

export default StyleSheet.create({
  label: {
    backgroundColor: 'transparent',
    color: 'white',
    paddingBottom: normalize(5),
    letterSpacing: normalize(1.5)
  }
});
