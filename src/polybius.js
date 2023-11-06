// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function convertValueToString(value, factor){
    const tens = (value % 5 + 1) * 10;
    const singles = parseInt(value / 5 + 1);
    value = tens + singles;
    //console.log(value, tens, singles);
    const char = value.toString();
    return char;
  }
  function convertNumberPairToChar(numberPair){
    const column = parseInt(numberPair / 10);//handles singles place for charCode
    const row = (parseInt(numberPair.charAt(1)) - 1) * 5;//handles tens place for charCode
    let result = row + column;
    if (result === 9) return "(i/j)";
    if (result > 9) result++; 
    //console.log(result, column, row);
    const char = String.fromCharCode(result + 96);
    return char;
  }
  function polybius(input, encode = true) {
    // your solution code here
    console.log(input);
    let result = []; 
    if(!encode){//decoding
      const evenTest = input.split(" ");
      for(let i = 0; i < evenTest.length; i++)
      {
        if(evenTest[i].length % 2) return false;
      }
      for(let i = 0; i < input.length; i += 2)
        {
          if(input[i] === " ") {
            result.push(" ");
            i--;
          }
          else {
            const char = convertNumberPairToChar(`${input[i]}${input[i + 1]}`);
            result.push(char);
          }
        }
      result = result.join('');
    }//decoding
    else{
    input = input.toLowerCase();
    console.log(input);
    for (let i = 0; i < input.length; i++){
       //console.log(input.charAt(i), input.charCodeAt(i) - 96);
      let value = input.charCodeAt(i) - 97;
      let char = " ";
      if(value > 8) --value;
      switch(value){
        case 0:
          
        case 1: 
          
        case 2:
  
        case 3:
          
        case 4:
          
        case 5:
          char = convertValueToString(value, 11);
          result.push(char);
          break;
        case 6:
        
        case 7:
        
        case 8:  
        
        case 9:
        
        case 10: 
          char = convertValueToString(value, 21);
          result.push(char);
          break;
        case 11:
          
        case 12:
  
        case 13:
          
        case 14:
          
        case 15:
          char = convertValueToString(value, 31);
          result.push(char);
          break;
        case 16:
        
        case 17:
        
        case 18:  
        
        case 19:
        
        case 20:
          char = convertValueToString(value, 41);
          result.push(char);
          break;  
        case 21:
          
        case 22:
          
        case 23:
          
        case 24:
          
        case 25:
          char = convertValueToString(value, 51);
          result.push(char);
          break; 
        default:
          result.push(char);
          break;
      }
      console.log(value, result);
    }
    result = result.join("");
    }//encoding
    console.log(result);
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
