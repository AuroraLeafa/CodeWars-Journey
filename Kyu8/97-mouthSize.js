/* 
    Day 97 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
    CLEAR!!
*/

// function mouthSize(animal) {
//   if(animal.toLowerCase() === "alligator") return "small";
//   return "wide"
// }

const mouthSize = animal => animal.toLowerCase() === "alligator" ? "small" : "wide";

console.log(mouthSize("toucan"));
console.log(mouthSize("frog"));
console.log(mouthSize("alligator"));
console.log(mouthSize("cat"));
console.log(mouthSize("mouse"));