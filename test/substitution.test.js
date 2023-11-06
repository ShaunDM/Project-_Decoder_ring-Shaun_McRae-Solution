// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

describe("substitution", () => {
  it("checks for the substitution function", () => {
    expect(substitution.substitution).to.be.a("function");
  });
  it("should return true if the alphabet is not 26 characters", () => {
    const expected = false;
    const actual = substitution.substitution("input");
    expect(actual).to.equal(expected);
  });
  it("should return true if the alphabet is not unique", () => {
    const expected = false;
    const actual = substitution.substitution("input", "qqwertyuiopasdfghjkklzxcvb");
    expect(actual).to.equal(expected);
  });
  it("should return true if the input is successfully encoded", () => {
    const expected = "zodt ol $$$";
    const actual = substitution.substitution("Time is $$$", "qwertyuiopasdfghjklzxcvbnm");
    expect(actual).to.equal(expected);
  });
  it("should return true if the input is successfully decoded", () => {
    const expected = "time a $$$";
    const actual = substitution.substitution("Zodt & $$$", "&wertyuiopasdfghjklzxcvbnm", false);
    expect(actual).to.equal(expected);
  });
});