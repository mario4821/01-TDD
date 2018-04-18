'use strict';

const greet = module.exports = {};

greet.hello = (input) => {
  if (input === '' || typeof input !== 'string') {
    return null;
  }
  if (input === 'world') {
    return 'hello world';
  }
  return `hello ${input}!`;
};
