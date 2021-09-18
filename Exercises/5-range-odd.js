'use strict';

const rangeOdd = (start, end) => {
  const arr = new Array();
  for (let i = start; i <= end; i++) {
    if ((i % 2) === 0) continue;
    arr.push(i);
  }
  return arr;
};

module.exports = { rangeOdd };
