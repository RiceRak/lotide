// finds the first element of an array

const head = function(actual) {
  if (actual.length === 0) {
    return undefined;
  }
  return actual[0];
};



module.exports = head;