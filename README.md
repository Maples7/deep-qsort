# deep-qsort
[![Build Status](https://travis-ci.org/Maples7/deep-qsort.svg?branch=master)](https://travis-ci.org/Maples7/deep-qsort)
[![Coverage Status](https://coveralls.io/repos/github/Maples7/deep-qsort/badge.svg?branch=master)](https://coveralls.io/github/Maples7/deep-qsort?branch=master)
[![npm version](https://badge.fury.io/js/deep-qsort.svg)](https://badge.fury.io/js/deep-qsort)           
[![NPM](https://nodei.co/npm/deep-qsort.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/deep-qsort/)
[![NPM](https://nodei.co/npm-dl/deep-qsort.png?months=6&height=3)](https://nodei.co/npm/deep-qsort/)

A node module who does recursive quick sort over a nested array.

## Usage

### Installation
`npm i deep-qsort --save`

### Example
```js
const deepSort = require('deep-qsort');

const ret = deepSort([4, 3, [25, 3, [9], [-1, 0], 24], 2, 13, 11, -9]);
// output: 
// [ -9, 2, 3, 4, 11, 13, [ 3, 24, 25, [ -1, 0 ], [ 9 ] ] ]
console.log(ret); 
```

### API
```js
deepSort(
  // Array wait to be sorted
  arr,
  // A tiny question in this problem is where we 
  // put deep arrays —— at the beginning or the end. 
  // With this param, you have choice. It means 
  // that when an array is compared with other non-array 
  // items, whether the array is always bigger. 
  // Default to `true`
  arrayIsBigger = true 
)
```

## LICENSE
[MIT](LICENSE)
