# Lab 01 - TDD

**Author**: Mario Flores Jr.

**Version**: 1.0.0

##Overview
This lab introduces test-driven development to test out basic exported modules.

##Architecture
1. greet.js exports a single function that accepts a single parameter as a string, and returns 'hello' + string. If a string is not entered, null is returned. Correlated testing is done on greet.test.js.
2. arithmetic.js exports two functions: an add and sub function. Both functions accept two parameters that return sum responses. If the parameters aren't numbers, null is returned. Correlated testing is done on arithmetic.test.js.