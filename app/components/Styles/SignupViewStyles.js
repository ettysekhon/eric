import {
  StyleSheet,
} from 'react-native';

import {
  normalize
} from '../../utils/size';

import { Colors } from '../../theme/';

export default StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: normalize(25),
  },
  formControl: {
    marginBottom: 10
  },
  link: {
    color: Colors.grayLight,
    letterSpacing: normalize(3),
    marginBottom: 10,
    alignSelf: 'center'
  },
  warningText: {
    color: Colors.warning,
    alignSelf: 'center',
    marginBottom: 5,
  }
});
