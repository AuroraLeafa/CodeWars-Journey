/* 
    Kyu 7
    Day 21 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
    CLEAR!!
*/

function validatePIN(pin) {
  return pin.length === 4 || pin.length === 6 ? /^\d+$/.test(pin) : false
}

console.log(validatePIN("-1234"));
console.log(validatePIN("-a234"));
console.log(validatePIN("a234"));
console.log(validatePIN("1234"));
console.log(validatePIN("123456"));
console.log(validatePIN("1"));
console.log(validatePIN("12"));
