/* 
    Kyu 7
    Day 47 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57cc981a58da9e302a000214
    CLEAR!!
*/

// function smallEnough(a, limit) {
//     return a.every((num) => num <= limit);
// }

const smallEnough = (a, limit) => Math.max(...a) <= limit

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([36, 121], 250));
console.log(smallEnough([96, 104, 105, 102], 100));