const tail = require('../tail')
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return [1, 2, 3] for [2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it('should return ["Yo Yo", "Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should return an empty array when argument array is also empty", () => {
    assert.deepEqual(tail([]), []);
  });
  it("should return an empty array when the argument array has one element", () => {
    assert.deepEqual(tail(['test']).length, 0);
  });
  it('should return "Lighthouse" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[0], "Lighthouse");
  });
});