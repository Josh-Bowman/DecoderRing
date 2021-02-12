// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    // tests for: (1) does alphabet exist? (2) is alphabet === 26 chars? (3) does alphabet contain special chars? if not, return FALSE.
    if (!alphabet) {return false}; //test this
    if (alphabet.length !== 26) {return false}; //test this
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    //if (!specialChars.test(alphabet)) {return false}; //test this
        // this is a check for repeating letters/////////
        let letter = alphabet[0];
        let count = 0;
        for (let letters of alphabet) {
          if (letters == letter) {
            count++;
          }
        }
        if (count >= 2) return false;

    //intake alphabet, and assign it's chars crypto.beta, this will be the "key" for encoding/decoding.
    let cryptor = [
      {alpha: 'a', beta: ''},
      {alpha: 'b', beta: ''},
      {alpha: 'c', beta: ''},
      {alpha: 'd', beta: ''},
      {alpha: 'e', beta: ''},
      {alpha: 'f', beta: ''},
      {alpha: 'g', beta: ''},
      {alpha: 'h', beta: ''},
      {alpha: 'i', beta: ''},
      {alpha: 'j', beta: ''},
      {alpha: 'k', beta: ''},
      {alpha: 'l', beta: ''},
      {alpha: 'm', beta: ''},
      {alpha: 'n', beta: ''},
      {alpha: 'o', beta: ''},
      {alpha: 'p', beta: ''},
      {alpha: 'q', beta: ''},
      {alpha: 'r', beta: ''},
      {alpha: 's', beta: ''},
      {alpha: 't', beta: ''},
      {alpha: 'u', beta: ''},
      {alpha: 'v', beta: ''},
      {alpha: 'w', beta: ''},
      {alpha: 'x', beta: ''},
      {alpha: 'y', beta: ''},
      {alpha: 'z', beta: ''},
    ]
    //assign false alphabet into cryptor.beta // alphabet.split('').forEach((letter) => {}
    let coords = 0
    alphabet.split('').forEach((element) => {
        cryptor[coords].beta = element;
        coords += 1
    });// console.log(cryptor) //test this!!!

    //declarations before running the function
    input = input.toLowerCase();
    let temp = [];
    const result = [];
    //wrap encode and decode in an if/else statement, depending on the boolean of "encode".
    if (encode) {
      //encode is true
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {result.push(" ")}
        for (let j = 0; j <cryptor.length; j++) {
          if (input[i] === cryptor[j].alpha) {
            result.push(cryptor[j].beta)
          }
        }
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {result.push(" ")}
        for (let j = 0; j <cryptor.length; j++) {
          if (input[i] === cryptor[j].beta) {
            result.push(cryptor[j].alpha)
          }
        }
      }
    }return result.join('') //console.log(result)
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
