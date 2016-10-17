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
  h1: normalize(25),
  h2: normalize(20),
  h3: normalize(12),
  h4: normalize(10),
  regular: normalize(12),
  medium: normalize(10)
}

const style = {
  h1: {
    fontWeight: 'bold',
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontWeight: 'bold',
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
