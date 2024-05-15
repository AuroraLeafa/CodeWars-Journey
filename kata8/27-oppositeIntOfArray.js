/* 
    Day 27 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/
    CLEAR !!
*/

// function invert(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= -1;
//   }
//   return array;
// }

const invert = array => array.map(x => x * -1);
 
console.log(invert([1, 2, 3, 4, 5]));
