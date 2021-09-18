'use strict';

const range = (start, end) => {
  const arr = new Array();
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

module.exports = { range };
