const tail = require('../tail')
const assertEqual = require('../assertEqual')

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse") // first element of returned array should be second element of argument array
assertEqual(tail(words).length, words.length - 1) // tail should have one element less than its input
assertEqual(tail(["test"]).length, 0) // tail of array with one element only should be empty
assertEqual(tail([]).length, 0) // tail of an empty array should also be empty