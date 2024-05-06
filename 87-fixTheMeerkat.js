/* 
    Day 87 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56f699cd9400f5b7d8000b55
    CLEAR!!
*/

// function fixTheMeerkat(arr) {
//   let temp = [];
//   temp = arr[2];
//   arr[2] = arr[0];
//   arr[0] = temp;
//   return arr;
// }

// const fixTheMeerkat = arr => [arr[2], arr[1], arr[0]]

const fixTheMeerkat = arr => arr.reverse();

console.log(fixTheMeerkat(["tail", "body", "head"]));
console.log(fixTheMeerkat(["tails", "body", "heads"]));
console.log(fixTheMeerkat(["bottom", "middle", "top"]));
