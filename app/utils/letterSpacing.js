import {
  Platform
} from 'react-native';

const isAndroid = Platform.OS === 'android';

export default (string, count = 1) => {
  if (typeof string === 'undefined') {
    return string;
  }
  if (isAndroid) {
    return string.split('').join(' '.repeat(count));
  }
  return string;
};
