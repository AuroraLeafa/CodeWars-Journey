/* 
    Kyu 7
    Day 44 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
    CLEAR!!
*/

// function solution(nums) {
//   return !nums ? [] : nums.sort((a, b) => a - b);
// }

const solution = (nums) => nums.length === 0 ? [] : nums.sort((a, b) => a - b);

console.log(solution([1, 2, 10, 50, 5]));
console.log(solution([]));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 91, 10]));
console.log(solution([-1, -2, -3, -4, -5, -7, -8, -91, -10]));
