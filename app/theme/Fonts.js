import { Dimensions } from 'react-native';

const scale = Dimensions.get('window').width / 375;

const normalize = (size) => {
  return Math.round(scale * size);
};

// TODO:
// 1. change to Montserrat
// 2. confirm if we need lineHeight property

const type = {
  base: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: normalize(28),
  h2: normalize(20),
  h3: normalize(14),
  h4: normalize(12),
  regular: normalize(14),
  medium: normalize(12)
}

const style = {
  h1: {
    fontWeight: 'bold',
    fontSize: size.h1,
    letterSpacing: 4
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontWeight: 'bold',
    fontSize: size.h3,
    letterSpacing: 1.25
  },
  h4: {
    fontWeight: 'bold',
    fontSize: size.h4,
    letterSpacing: 1.25
  },
  regular: {
    fontSize: size.regular
  },
  description: {
    fontSize: size.medium
  },
  input: {
    fontWeight: 'bold',
    fontSize: size.medium
  },
  label: {
    fontWeight: 'bold',
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}
