import {
  Dimensions
} from 'react-native';

// landscape 667
// portrait 375
const scale = Dimensions.get('window').width / 375;

export const normalize = (size) => {
  return Math.round(scale * size);
};
