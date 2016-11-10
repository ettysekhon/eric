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
    letterSpacing: normalize(2),
    fontSize: normalize(14),
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular'
  }
});
