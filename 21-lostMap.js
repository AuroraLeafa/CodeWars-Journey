/* 
    Day 21 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57f781872e3d8ca2a000007e/
    CLEAR !!
*/

// function maps(x){
//     let newArr = []
//     for (let i = 0; i < x.length; i++) {
//         newArr[i] = x[i] * 2
//     }
//     return newArr
// }

const maps = x => x.map(number => number * 2)

console.log(maps([1,2,3]));