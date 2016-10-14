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
  h1: normalize(50),
  h2: normalize(40),
  h3: normalize(24),
  h4: normalize(20),
  regular: normalize(24),
  medium: normalize(20)
}

const style = {
  h1: {
    fontWeight: 'bold',
    fontSize: size.h1,
    letterSpacing: -1,
  },
  h2: {
    fontSize: size.h2
  },
  h3: {
    fontSize: size.h3
  },
  h4: {
    fontSize: size.h4
  },
  normal: {
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
