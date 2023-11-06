// Write your tests here!
const expect = require("chai").expect
const polybius = require("../src/polybius.js");

describe("polybius", () => {
  it("should return true if polybius is a function", () => {
    console.log(polybius, polybius.polybius)
    expect(polybius.polybius).to.be.a("function");
  });
  it("should return true if the message is successfully encoded", () => {
    const expected = '4251131343 2542241341';
    const actual = polybius.polybius("Jello wirld");
    expect(actual).to.equal(expected);
  });
  it("should return true if the message is successfully decoded", () => {
    const expected = "th(i/j)nkful world";
    const actual = polybius.polybius("4432423352125413 2543241341", false);
    expect(actual).to.equal(expected);
  });
  it("should return true if the decoding input is invalid", () => {
    const expected = false;
    const actual = polybius.polybius("44352423352125413 2543241341", false);
    expect(actual).to.equal(expected);
  });
});