// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  /*const polyObjects = [
    {char: 'a', code: '11'},
    {char: 'b', code: '21'},
    {char: 'c', code: '31'},
    {char: 'd', code: '41'},
    {char: 'e', code: '51'},
    {char: 'f', code: '12'},
    {char: 'g', code: '22'},
    {char: 'h', code: '32'},
    //NOTE: i and j have the same code
    {char: 'i', code: '42'},
    {char: 'j', code: '42'},
    // see? ^^^^^^^^^^^^^^
    {char: 'k', code: '52'},
    {char: 'l', code: '13'},
    {char: 'm', code: '23'},
    {char: 'n', code: '33'},
    {char: 'o', code: '43'},
    {char: 'p', code: '53'},
    {char: 'q', code: '14'},
    {char: 'r', code: '24'},
    {char: 's', code: '34'},
    {char: 't', code: '44'},
    {char: 'u', code: '54'},
    {char: 'v', code: '15'},
    {char: 'w', code: '25'},
    {char: 'x', code: '35'},
    {char: 'y', code: '45'},
    {char: 'z', code: '55'},
  ]
//  const polybiusGrid = []
    /*11: "a", 21: "b", 31: "c", 41: "d",  51: "e",
    12: "f", 22: "g", 32: "h", 42: "i/j",52: "k",
    13: "l", 23: "m", 33: "n", 43: "o",  53: "p",
    14: "q", 24: "r", 34: "s", 44: "t",  54: "u",
    15: "v", 25: "w", 35: "x", 45: "y",  55: "z",
    */
//]
/*
  const output = "";
  function polybius(input, encode = true) {
    // your solution code here
    //let bit = {char}
    let encodedStr = []
    let decodedStr = []
    if (encode === true) {
      input.split('').forEach((bit) => {
        //if bit matches a character
        if (bit.match(/[a-z]/i)) {
          for (let object of polyObjects) {
            (object.char === bit) ? encode = encodedStr.push(object.code) : encodedStr = encodedStr;
            //console.log
          }
        }
        //if bit matches a space " "
        if (bit.match(" ")) {
          encodedStr.push(" ")
        }
      });
   } else {
      //see if valid input to decrypt
      if (input.length % 2) {
        return false;
      }
      //split numeric input into bits of 2 numbers, so that we can match them with letters
      let pairs = (input.match(/.{2}/g))
      console.log(pairs)
      pairs.join('')
      console.log(pairs)
    } return encodedStr.join('')
  }
*/


//my above code got WAY too messy for me to fix, bellow is a new, cleaned version
function polybius(input, encode = true) {
  //create table for polybius square
  const conversionTable = [
    { letter: "a", number: "11" },
    { letter: "f", number: "12" },
    { letter: "l", number: "13" },
    { letter: "q", number: "14" },
    { letter: "v", number: "15" },
    { letter: "b", number: "21" },
    { letter: "g", number: "22" },
    { letter: "m", number: "23" },
    { letter: "r", number: "24" },
    { letter: "w", number: "25" },
    { letter: "c", number: "31" },
    { letter: "h", number: "32" },
    { letter: "n", number: "33" },
    { letter: "s", number: "34" },
    { letter: "x", number: "35" },
    { letter: "d", number: "41" },
    { letter: "(i/j)", number: "42" },
    { letter: "o", number: "43" },
    { letter: "t", number: "44" },
    { letter: "y", number: "45" },
    { letter: "e", number: "51" },
    { letter: "k", number: "52" },
    { letter: "p", number: "53" },
    { letter: "u", number: "54" },
    { letter: "z", number: "55" },
  ];
  //floor input
  input = input.toLowerCase();
  //create holding variables
  let temp = "";
  const result = [];
  //check if encoding or decoding
  if (encode) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] >= "a" && input[i] <= "z") {
        temp = conversionTable.find((index) => index.letter.includes(input[i]));
        temp = temp.number;
        result.push(temp);
      } else {
        result.push(input[i]);
      }
    }
  } else {
    //check if length of string (without spaces) is even - if not, exit function
    for (let i = 0; i < input.length; i++) {
      if (!(input[i] == " ")) {
        temp += input[i];
      }
    }
    if (temp.length % 2) {
      return false;
    }
    for (let i = 0; i < input.length; ) {
      //check if current char is a space - if not, decode (current index + next index) & increment i by 2
      if (!(input[i] == " ")) {
        const currNum = input[i] + input[i + 1];
        temp = conversionTable.find((index) => index.number.includes(currNum));
        temp = temp.letter;
        i += 2;
      }
      //if current char is a space, increment i by 1
      else {
        temp = input[i];
        i++;
      }
      result.push(temp);
    }
  }
  return result.join("");
}

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
