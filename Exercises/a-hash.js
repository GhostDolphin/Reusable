'use strict';

const phonebook = {
  Dan: '+3801102281337',
  Alex: '+3801104531237',
  Harry: '+3801132132337',
  Drew: '+3801156731237',
  Austin: '+3801102278937',
  Chris: '+3801104876547'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
