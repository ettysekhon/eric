import {
  StyleSheet,
} from 'react-native';

import {
  normalize
} from '../../utils/size';

export default StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: normalize(25),
  },
  form: {
    paddingTop: 100,
  },
  formControl: {
    marginBottom: 10
  }
});
