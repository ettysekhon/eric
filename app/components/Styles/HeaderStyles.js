import {
  Platform,
  StyleSheet,
} from 'react-native';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 54 + STATUS_BAR_HEIGHT : 66 + STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    paddingTop: STATUS_BAR_HEIGHT,
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
