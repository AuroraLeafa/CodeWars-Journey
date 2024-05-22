/* 
    Day 78 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
    CLEAR!!
*/

// function twoSort(s) {
//     return s.sort()[0].split('').join('***')
// }

const twoSort = s => [...s.sort()[0]].join('***')

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));