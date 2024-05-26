/* 
    Kyu 8
    Day 105 - Code Wars Challenge
    Link : https://www.codewars.com/kata/545afd0761aa4c3055001386
    CLEAR!!
*/

// const take = (arr, n) => arr.slice(0, n);

const take = (arr, n) => arr.filter((_, i) => i < n)

console.log(take([5, 1, 2, 3, 4, 5, 6, 7], 3));
