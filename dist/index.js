'use strict';

module.exports = function (array) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return array.map(function (object) {
    var reduced = {};
    var properties = args;

    if (Array.isArray(args[0])) {
      properties = args[0];
    }

    Object.keys(object).forEach(function (property) {
      if (properties.includes(property)) {
        reduced[property] = object[property];
      }
    });

    return reduced;
  });
};