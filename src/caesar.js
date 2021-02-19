// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//const caesarModule = (function () {
  // you can add any code you want within this function scope
  //const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  /*
  let inputString = ""
  let inputArray = []
  let outputArray = []
  let outputString = ""
  */
  /*function caesar(input, shift, encode = true) {
    // your solution code here
    //return false if invalid shift argument
    if ((!shift) || (shift === 0) || (shift < -25) || (shift > 25)) return false;
    //converting to lowercase string
    inputString = input.toString();
    inputString = input.toLowerCase();
    //loop to push characters and spaces into the array
    for (let i=0;i<inputString.length;i++) {
      if (inputString[i] = " ") {
        inputArray.push(" ");
      }
      if (alphabet.includes(inputString[i])) {
        inputArray.push(inputString[i]);
      }
      //if shift exists,
    } if (shift) {
      for (let j=0;j<inputArray.length;j++) {
        outputArray.push(input[j+shift]);
      }
    outputString = outputArray.toString();
    }
    return outputString;
  }
  */
 function caesar(word, shift, encode = true) {
  if (!shift || shift === 0 || shift > 25 || shift < -25) {
    return false;
  }
  const encodedStr = [];
  if (encode === true) {
    word.split('').forEach((letter) => {
      if (letter.match(/[a-z]/i)) {
        encoded = letter.toLowerCase().charCodeAt() + shift;
        //console.log(encoded);
        if (encoded < 97) {
          encoded = encoded + 26;
          encodedStr.push(String.fromCharCode(encoded));
        } else if (encoded > 122) {
          encoded = encoded - 26;
          encodedStr.push(String.fromCharCode(encoded));
        } else {
          encodedStr.push(String.fromCharCode(encoded));
        }
      } else {
        encodedStr.push(letter);
      }
    });
  } else {
    word.split('').forEach((letter) => {
      if (letter.match(/[a-z]/i)) {
        encoded = letter.toLowerCase().charCodeAt() - shift;
        if (encoded > 122) {
          encoded = encoded - 26;
          encodedStr.push(String.fromCharCode(encoded));
        } else if (encoded < 97) {
          encoded = encoded + 26;
          encodedStr.push(String.fromCharCode(encoded));
        } else {
          encodedStr.push(String.fromCharCode(encoded));
        }
      } else {
        encodedStr.push(letter);
      }
    });
  }
  return encodedStr.join('');
  
  
};

module.exports = caesar;
