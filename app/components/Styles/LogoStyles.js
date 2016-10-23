import {
  StyleSheet,
} from 'react-native';

import {
  normalize
} from '../../utils/size';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: normalize(120),
    height: normalize(120)
  }
});
