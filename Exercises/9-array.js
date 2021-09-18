'use strict';

const phonebook = [
  {
    name: 'Marcus',
    phone: '+380445554433'
  },
  {
    name: 'Dan',
    phone: '911'
  },
  {
    name: 'Alex',
    phone: '+380441337228'
  },
  {
    name: 'Sarah',
    phone: '123'
  },
  {
    name: 'Drew',
    phone: '+380410002525'
  },
  {
    name: 'Claire',
    phone: '100'
  }
];

const findPhoneByName = (name) => {
  for (const i of phonebook) {
    if (i.name === name) return i.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
