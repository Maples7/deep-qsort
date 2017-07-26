'use strict';

const test = require('ava');
const deepSort = require('./index');

test('Deep quick sort a flatten number array', t => {
  t.plan(1);
  const ret = deepSort([4, 3, 25, 3, 9, -1, 0, 24, 2, 13, 11, -9]);
  t.deepEqual(ret, [-9, -1, 0, 2, 3, 3, 4, 9, 11, 13, 24, 25]);
});

test('Deep quick sort a flatten string array', t => {
  t.plan(1);
  const ret = deepSort(['a', 'd', 'b', 'c']);
  t.deepEqual(ret, ['a', 'b', 'c', 'd']);
});

test('Deep quick sort a deep number array', t => {
  t.plan(1);
  const ret = deepSort([4, 3, [25, 3, [9], [-1, 0], 24], 2, 13, 11, -9]);
  t.deepEqual(ret, [-9, 2, 3, 4, 11, 13, [3, 24, 25, [-1, 0], [9]]]);
});

test('Deep quick sort a deep number array', t => {
  t.plan(1);
  const ret = deepSort([4, 3, [25, 3, [9], [-1, 0], 24], 2, 13, 11, -9], false);
  t.deepEqual(ret, [[[-1, 0], [9], 3, 24, 25], -9, 2, 3, 4, 11, 13]);
});
