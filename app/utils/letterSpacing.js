export default (string, count = 1) => {
  if (typeof string === 'undefined') {
    return string;
  }
  const ret = string.split('').join(' '.repeat(count));
  return ret;
};
