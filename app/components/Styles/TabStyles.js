import {
  create,
} from './StyleSheet';

import { Colors } from '../../theme/';

export default create({
  tabs: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  tab: {
    flex: 1,
    borderColor: Colors.background,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 10
  },
  text: {
    paddingVertical: 10,
    letterSpacing: 4,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    android: {
      textAlignVertical: 'center'
    }
  }
});
