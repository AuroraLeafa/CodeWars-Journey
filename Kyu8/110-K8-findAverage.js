/* 
    Kyu 8
    Day 110 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55d277882e139d0b6000005d
    CLEAR!!
*/

// function findAverage(nums){
//     let avg = 0;
//     for (let i = 0; i < nums.length; i++) {
//         avg += nums[i]
//     }
//     return avg / nums.length;
// }

const findAverage = (nums) => (nums.reduce((acc, el) => acc + el, 0)) / nums.length

console.log(findAverage([1,2,3,4,5]));