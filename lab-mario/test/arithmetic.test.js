'use strict';

const arithmetic = require('../lib/arithmetic');

describe('Test method for proper use', () => {
  describe('arithmetic.add', () => {
    test('proper use', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
    });
    test('non-number test', () => {
      expect(arithmetic.add()).toBeUndefined();
    });
  });
  describe('arithmetic.sub', () => {
    test('proper use', () => {
      expect(arithmetic.sub(8, 3)).toEqual(5);
    });
    test('non-number test', () => {
      expect(arithmetic.sub()).toBeUndefined();
    });
  });
});
