// takes in an array and returns everything except the first element

const tail = function(actual) {
  console.log('actual', actual);
  const myArr = actual.slice(1);
  return myArr;
};

module.exports = tail;