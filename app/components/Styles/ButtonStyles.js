import {
  StyleSheet,
} from 'react-native';

import {
  normalize
} from '../../utils/size';

export default StyleSheet.create({
  button: {
    height: normalize(45),
    backgroundColor: '#9013FE',
    borderWidth: 0,
    borderRadius: 0
  },
  textStyle: {
    color: '#fff',
    fontSize: normalize(14),
    letterSpacing: 1.5,
    fontFamily: 'Montserrat-Regular'
  }
});
