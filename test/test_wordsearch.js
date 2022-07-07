const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
  
  
  
  
  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'N', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'K', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'], 
      ['H', 'M', 'J', 'F', 'E', 'V', 'R', 'G'], // FRANK
      ['W', 'H', 'C', 'R', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'A', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'E', 'N', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'D', 'K', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'A', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isTrue(result);
  });

  it("should return false if the word is present over two columns", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'N', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'K', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'], 
      ['H', 'M', 'J', 'F', 'E', 'V', 'R', 'G'], 
      ['W', 'H', 'C', 'R', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'F', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'F', 'H', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'R', 'H', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'A', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });
});
