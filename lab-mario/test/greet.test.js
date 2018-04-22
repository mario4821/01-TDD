'use strict';

const greet = require('../lib/greet');

describe('greet.js', () => {
  test('Should return null if not string', () => {
    expect(greet()).toBeNull();
  });
  test('Should return hello world', () => {
    expect(greet('world')).toEqual('hello world!');
  });
});
