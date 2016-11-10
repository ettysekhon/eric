import {
  create,
} from './StyleSheet';

import { Colors } from '../../theme/';

import {
  normalize
} from '../../utils/size';

export default create({
  heading: {
    color: Colors.grayMediumDark
  },
  iconContainer: {
    position: 'absolute',
    top: normalize(10),
    left: normalize(5),
    ios: {
      top: normalize(5),
      left: normalize(-15),
    }
  },
  icon: {
    width: normalize(7.2),
    height: normalize(32.4)
  }
});
