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
  form: {
    paddingTop: 50,
  },
  formControl: {
    marginBottom: 10
  },
  link: {
    color: Colors.primary,
    letterSpacing: normalize(3),
    marginBottom: 10,
    alignSelf: 'center'
  },
  warningText: {
    color: 'red',
    alignSelf: 'center',
  }
});
