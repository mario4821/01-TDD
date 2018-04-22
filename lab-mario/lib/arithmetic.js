'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return undefined; 
  return a + b;
};

arithmetic.sub = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') return undefined; 
  return a - b;
};
