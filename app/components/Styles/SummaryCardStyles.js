import {
  create,
} from './StyleSheet';

import { Colors } from '../../theme/';

import {
  normalize
} from '../../utils/size';

export default create({
  card: {
    paddingVertical: normalize(10),
    backgroundColor: Colors.background,
    ios: {
      paddingHorizontal: normalize(20)
    },
  },
  inner: {
    backgroundColor: Colors.background,
    ios: {
      backgroundColor: Colors.grayLight
    }
  }
});
