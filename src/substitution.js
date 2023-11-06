// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = [], encode = true) {
    // your solution code here
    if(alphabet.length !== 26) return false;
    for(let i = 0; i < alphabet.length; i++){
      for(let j = 0; j < alphabet.length; j++){
        if (alphabet[j] === alphabet[i] && i !== j) return false;
      } 
    }
    input = input.toLowerCase();
    console.log(input);
    let result = [];
    if(encode){
      for(let i = 0; i < input.length; i++){
        const character = input.charCodeAt(i) - 97;
        if(character < 0 || character > 26) {
          result.push(input[i]);
          continue;
        }
        result.push(alphabet[character]);
      }
    }
    else{
      const alphabetArray = alphabet.split('');
      for(let i = 0; i < input.length; i++){
        for(let j = 0; j < 26; j++){  
          if(input.charCodeAt(i) < 97 || input.charCodeAt(i) > 122){
            const specChar = alphabetArray.some((element) => input[i] === element);
            if (!specChar){
              result.push(input[i]); 
              break;
            } 
          } 
          if(input[i] === alphabet[j]){
            result.push(String.fromCharCode(j + 97));  
            break;
          }
        }
      }
    }
    result = result.join('');
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
