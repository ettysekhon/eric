import {
  create,
} from './StyleSheet';

import {
  normalize
} from '../../utils/size';

export default create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'white',
    backgroundColor: 'transparent'
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    borderRightWidth: 0.5,
    borderColor: 'white',
    paddingVertical: normalize(10)
  },
  gradient: {
    ios: {
      marginLeft: normalize(-20),
      marginRight: normalize(-20)
    },
    elevation: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 10,
      width: 0
    }
  }
});
