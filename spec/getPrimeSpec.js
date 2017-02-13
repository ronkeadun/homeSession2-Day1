var val = require("../app/getPrime.js");
'use strict'
describe("Get prime numbers", function() {
  it("should return [] as prime numbers for 0", function() {
    expect(val.getPrimes(0) == []);
  })
  it("should return [ 2, 3, 5] as prime numbers for 25", function() {
    expect(val.getPrimes(5) == [ 2, 3, 5]);
  })
  it("should return [2, 3, 5, 7, 11, 13] as prime numbers for 17", function() {
    expect(val.getPrimes(17) == [ 2, 3, 5, 7, 11, 13 ]);
  })
  it("should return [2, 3, 5, 7] as prime numbers for 8", function() {
    expect(val.getPrimes(8) == [ 2, 3, 5, 7]);
  })
  it("should return [] as prime numbers for 1", function() {
    expect(val.getPrimes(1) == []);
  })
  it("should return [2] as prime numbers for 2", function() {
    expect(val.getPrimes(2) == [ 2]);
  })
})