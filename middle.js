const middle = function(arr) {
  let noMid = []
  let midElement = [];
  let midIndex = 0;
  if (arr.length < 3) {
    return noMid;
  }
  else if (arr.length % 2 === 0) {
    midIndex = Math.floor(arr.length / 2);
    midElement.push(arr[midIndex - 1]);
    midElement.push(arr[midIndex]);
  } else {
    midIndex = Math.floor(arr.length / 2);
    midElement.push(arr[midIndex]);
  }
  return midElement;
};

module.exports = middle;