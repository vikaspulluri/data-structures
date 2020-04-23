const merging = require('../../algos/merging');
const { incrementalArray, randomArray } = require('../helper/formArray');
const isSorted = require('../helper/isSorted');

test('it will merge two sorted arrays', () => {
  let a = incrementalArray(); let b = incrementalArray();
  const merged = merging(a,b);
  expect(merged.length).toEqual(a.length + b.length);
  expect(isSorted(merged)).toBeTruthy();
});
