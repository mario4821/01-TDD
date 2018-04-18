'use strict';

const arithmetic = require('../lib/arithmetic');

describe('Test method for proper use', () => {
  test('Different ways to use the expect function', () => {
    const aNullValue = null;
    expect(aNullValue).toBeNull();


// test each method for proper use (invoked with number arguements)

// test each method for inproper use (invoked with one or more non-number arguments)