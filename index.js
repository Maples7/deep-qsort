'use strict';

const assert = require('assert');

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function compare(a, b, arrayIsBigger) {
  const flag = `${+Array.isArray(a)}${+Array.isArray(b)}`;
  switch (flag) {
    case '10':
      return !arrayIsBigger;
    case '01':
      return arrayIsBigger;
    default:
      return a <= b;
  }
}

function quickSort(arr, lo = 0, hi = arr.length, arrayIsBigger) {
  function partition(lo, hi) {
    swap(arr, lo, Math.round(Math.random() * (hi - lo) + lo));
    const pivot = arr[lo];
    while (lo < hi) {
      while (lo < hi && compare(pivot, arr[hi], arrayIsBigger)) hi--;
      arr[lo] = arr[hi];
      while (lo < hi && compare(arr[lo], pivot, arrayIsBigger)) lo++;
      arr[hi] = arr[lo];
    }
    arr[lo] = pivot;
    return lo;
  }
  if (hi - lo < 2) return arr;
  const mi = partition(lo, hi - 1);
  quickSort(arr, lo, mi, arrayIsBigger);
  quickSort(arr, mi + 1, hi, arrayIsBigger);
  return arr;
}

function deepSort(arr, arrayIsBigger = true) {
  assert(Array.isArray(arr));
  arr.map(item => (Array.isArray(item) ? deepSort(item, arrayIsBigger) : item));
  return quickSort(arr, 0, arr.length, arrayIsBigger);
}

module.exports = deepSort;
