import {
  StyleSheet,
} from 'react-native';

import { Colors } from '../../theme/';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'white',
    backgroundColor: 'transparent'
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    borderRightWidth: 0.5,
    borderColor: 'white',
    paddingVertical: 10
  },
  gradient: {
    marginLeft: -20,
    marginRight: -20,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 10,
      width: 0
    }
  }
});
