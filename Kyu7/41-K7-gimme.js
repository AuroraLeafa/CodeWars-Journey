/* 
    Kyu 7
    Day 41 - Code Wars Challenge
    Link : https://www.codewars.com/kata/545a4c5a61aa4c6916000755
    CLEAR!!
*/

const gimme = triplet => triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);

console.log(gimme([2, 3, 1])); // Should Equal : 0
console.log(gimme([5, 10, 14])); // Should Equal : 1
console.log(gimme([5, 19, 14])); // Should Equal : 2

console.log(gimme([2.1, 3.2, 1.4])); // Should Equal : 0
console.log(gimme([5.9, 10.4, 14.2])); // Should Equal : 1

console.log(gimme([-2, -3, -1])); // Should Equal : 0
console.log(gimme([-5, -10, -14])); // Should Equal : 1

console.log(gimme([-2, -3.2, 1])); // Should Equal : 0
console.log(gimme([-5.2, -10.6, 14])); // Should Equal : 0

