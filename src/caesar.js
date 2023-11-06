// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift < -25 || shift > 25) return false;
    if(!encode) shift *= -1;
    input = input.toLowerCase();
    let inputArray = [];
    for (let i = 0; i < input.length; i++)
      {
        if (input.charCodeAt(i) < 97 || input.charCodeAt(i) > 122) {
          inputArray.push(input[i]);
          continue;
        }
        let letterCode = input.charCodeAt(i) + shift;
        //console.log(input.charCodeAt(i), letterCode);
        if(letterCode > 122 ) letterCode = 96 + letterCode - 122;
        else if (letterCode  < 97) letterCode = 123 - ( -letterCode + 97);
        inputArray.push(String.fromCharCode(letterCode));
      }
    input = inputArray.join('');
    console.log(input);
    return input;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
