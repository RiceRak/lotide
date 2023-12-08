// createa function called "head"
// the head function should NOT return the first element as an array. It should return just the element.
// an emtpy array should return undefined
module.exports = head;

function head(actual) {
  if (actual.length === 0) {
    return undefined;
  }   
 return actual[0];
}