/* 
    Day 45 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
    CLEAR !!
*/

// function arrayPlusArray(arr1, arr2) {
//   const sum1 = arr1.reduce((curr, acc) => curr + acc);
//   const sum2 = arr2.reduce((curr, acc) => curr + acc);
//   return sum1 + sum2; //something went wrong
// }

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((curr, acc) => curr + acc);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
