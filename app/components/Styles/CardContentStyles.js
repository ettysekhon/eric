import {
  create,
} from './StyleSheet';

import {
  normalize
} from '../../utils/size';

export default create({
  content: {
    padding: normalize(15),
    android: {
      padding: normalize(18),
      backgroundColor: 'white',
      marginHorizontal: normalize(18)
    }
  }
});
