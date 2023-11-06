// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar.js");

describe("caesar", () => {
  it("should return true if caesar is a function", () => {
    console.log(caesar, caesar.caesar)
    expect(caesar.caesar).to.be.a("function");
  });
  it("should return true if caesar returns the correct encoded message, no spaces, positive shift", () => {
    const expected = 'cd';
    const actual = caesar.caesar("za", 3);
    expect(actual).to.equal(expected);
  });
  it("should return true if caesar returns the correct encoded message, no spaces, negative shift", () => {
    const expected = 'za';
    const actual = caesar.caesar("cd", -3);
    expect(actual).to.equal(expected);
  });
  it("should return true if caesar returns the correct decoded message, no spaces", () => {
    const expected = 'thinkful';
    const actual = caesar.caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });
  it("should return true if caesar returns the correct message with spaces and characters", () => {
    const expected = 'bpqa qa i amkzmb umaaiom!';
    const actual = caesar.caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is a falsey value", () =>{
    const expected = false;
    const actual = caesar.caesar("thinkful");
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is greater than 25 or less than -25", () =>{
    const expected = false;
    const actual = caesar.caesar("thinkful", -26);
    expect(actual).to.equal(expected);
  });
});