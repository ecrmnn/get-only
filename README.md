# get-only
> Filter keys in an array of objects

[![travis](https://img.shields.io/travis/ecrmnn/get-only/master.svg?style=flat-square)](https://travis-ci.org/ecrmnn/get-only/builds)
[![npm version](https://img.shields.io/npm/v/get-only.svg?style=flat-square)](http://badge.fury.io/js/get-only)
[![npm downloads](https://img.shields.io/npm/dm/get-only.svg?style=flat-square)](http://badge.fury.io/js/get-only)
[![npm license](https://img.shields.io/npm/l/get-only.svg?style=flat-square)](http://badge.fury.io/js/get-only)
[![prs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![eslint](https://img.shields.io/badge/code_style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

### Installation
```bash
npm install get-only --save
```

### Usage
```javascript
const only = require('get-only');

const players = [{
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

only(players, ['lastname', 'number']);

//=> [{
//=>   lastname: 'Mané',
//=>   number: 19,
//=> }, {
//=>   lastname: 'Salah',
//=>   number: 11,
//=> }, {
//=>   lastname: 'Firmino',
//=>   number: 9,
//=> }];
```

### Related
- [collect.js](https://github.com/ecrmnn/collect.js) - Dependency free wrapper for working with arrays and objects

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)
