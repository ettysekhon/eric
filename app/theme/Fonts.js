import {
  normalize
} from '../utils/size';

// TODO:
// 1. change to Montserrat
// 2. confirm if we need lineHeight property

const type = {
  base: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',
  emphasis: 'HelveticaNeue-Italic'
};

const size = {
  h1: normalize(28),
  h2: normalize(20),
  h3: normalize(14),
  h4: normalize(12),
  regular: normalize(14),
  medium: normalize(12)
};

const style = {
  h1: {
    letterSpacing: 1.25,
    fontSize: size.h1
  },
  h2: {
    letterSpacing: 1.25,
    fontSize: size.h2
  },
  h3: {
    letterSpacing: 1.25,
    fontSize: size.h3
  },
  h4: {
    letterSpacing: 1.25,
    fontSize: size.h4
  },
  regular: {
    fontSize: size.regular
  },
  description: {
    fontSize: size.medium
  },
  input: {
    fontSize: size.medium
  },
  label: {
    fontSize: size.medium
  }
};

export default {
  type,
  size,
  style
};
