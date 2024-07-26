/* 
    Kyu 7
    Day 48 - Code Wars Challenge
    Link : https://www.codewars.com/kata/511f11d355fe575d2c000001
    CLEAR!!
*/

function twoOldestAges(ages){
    return ages.sort((a, b) => a - b).slice(-2)
}

console.log(twoOldestAges([1, 2, 10, 8]));
console.log(twoOldestAges([18, 29, 46, 64]));
console.log(twoOldestAges([34, 72, 40, 38]));
