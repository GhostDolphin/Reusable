'use strict';

const fn = () => {
  const obj1 = { name: 'Dan' };
  let obj2 = { name: 'Dan' };

  obj1.name = 'Ghost';
  obj2.name = 'Ghost';

  //obj1 = { name: 'Blabla' };
  obj2 = { name: 'Blabla' };
};

module.exports = { fn };
