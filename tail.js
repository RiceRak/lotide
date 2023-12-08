function tail(actual) {
  myArr = actual.slice(1);
  return myArr;
}

module.exports = tail;

// Test Case: Check the original array -- moved to /test/tailTest.js