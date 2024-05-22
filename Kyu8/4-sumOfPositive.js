/* 
    Day 4 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5715eaedb436cf5606000381
    CLEAR!!
*/

function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}

console.log(positiveSum([4,5,6,-2,-3,-4,5]));