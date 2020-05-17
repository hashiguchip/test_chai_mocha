var assert = require("assert");
const { expect } = require("chai");
var { testFunction } = require("../index");
describe("testFunction testing...", function () {
  it("it testFunction", function () {
    expect(testFunction(1, 2)).to.equal(3);
  });
});
