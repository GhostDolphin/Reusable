'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const result = new Array();
  for (let i = 0; i <= 9; i++) {
    result.push(average(square(i), cube(i)));
  }
  return result;
};

module.exports = { square, cube, average, calculate };
