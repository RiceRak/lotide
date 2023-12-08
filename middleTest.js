const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);