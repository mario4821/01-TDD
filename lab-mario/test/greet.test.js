'use strict';

const greet = require('../lib/greet');

describe('greet.hello', () => {
  test('Should return null if not string', () => {
    expect(greet.hello('')).toBeNull();
  });
  test('Should return hello world', () => {
    expect(greet.hello('world')).toEqual('hello world');
  });
});
