'use strict';

const { describe, it } = require('mocha');
const { expect } = require('chai');
const only = require('../dist');

describe('Get Only Test Suite', () => {
  it('should reduce objects to given keys', () => {
    const data = [{
      firstname: 'Sadio',
      lastname: 'Mané',
      number: 19,
    }, {
      firstname: 'Mohamed',
      lastname: 'Salah',
      number: 11,
    }, {
      firstname: 'Roberto',
      lastname: 'Firmino',
      number: 9,
    }];

    expect(only(data, ['lastname', 'number'])).to.eql([{
      lastname: 'Mané',
      number: 19,
    }, {
      lastname: 'Salah',
      number: 11,
    }, {
      lastname: 'Firmino',
      number: 9,
    }]);

    expect(only(data, ['number'])).to.eql([{
      number: 19,
    }, {
      number: 11,
    }, {
      number: 9,
    }]);
  });

  it('should be variadic', () => {
    const data = [{
      firstname: 'Sadio',
      lastname: 'Mané',
      number: 19,
    }, {
      firstname: 'Mohamed',
      lastname: 'Salah',
      number: 11,
    }, {
      firstname: 'Roberto',
      lastname: 'Firmino',
      number: 9,
    }];

    expect(only(data, 'lastname', 'number')).to.eql([{
      lastname: 'Mané',
      number: 19,
    }, {
      lastname: 'Salah',
      number: 11,
    }, {
      lastname: 'Firmino',
      number: 9,
    }]);

    expect(only(data, 'number')).to.eql([{
      number: 19,
    }, {
      number: 11,
    }, {
      number: 9,
    }]);
  });
});
