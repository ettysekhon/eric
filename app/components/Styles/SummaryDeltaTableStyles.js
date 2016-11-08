import {
  StyleSheet,
} from 'react-native';

import {
  normalize
} from '../../utils/size';

import { Colors } from '../../theme/';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'white',
    paddingTop: 5
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    borderRightWidth: 0.5,
    borderColor: 'white',
    paddingTop: 5
  },
  headerCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: normalize(5),
    letterSpacing: 1.125,
    color: Colors.grayMediumDark
  }
});
