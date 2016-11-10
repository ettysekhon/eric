import {
  create,
} from './StyleSheet';

import {
  normalize
} from '../../utils/size';

export default create({
  textInput: {
    height: normalize(50),
    fontSize: normalize(16),
    padding: normalize(10),
    color: 'white',
    ios: {
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'black',
      opacity: 0.5,
      color: 'gray',
    }
  },
  numberInput: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    android: {
      textAlignVertical: 'center'
    }
  }
});
