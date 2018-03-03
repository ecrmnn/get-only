'use strict';

module.exports = (array, ...args) => array.map((object) => {
  const reduced = {};
  let properties = args;

  if (Array.isArray(args[0])) {
    properties = args[0];
  }

  Object.keys(object).forEach((property) => {
    if (properties.includes(property)) {
      reduced[property] = object[property];
    }
  });

  return reduced;
});
