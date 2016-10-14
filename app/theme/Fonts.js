import { Dimensions } from 'react-native';

const scale = Dimensions.get('window').width / 375;

const normalize = (size) => {
  return Math.round(scale * size);
};

// TODO:
// 1. change to Montserrat
// 2. confirm if we need lineHeight property

const type = {
  base: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
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
    fontFamily: type.base,
    fontWeight: 'bold',
    fontSize: size.h1,
    letterSpacing: -1,
  },
  h2: {
    fontFamily: type.base,
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  }
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  input: {
    fontFamily: type.base,
    fontWeight: 'bold',
    fontSize: size.medium
  },
  label: {
    fontFamily: type.base,
    fontWeight: 'bold',
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}
