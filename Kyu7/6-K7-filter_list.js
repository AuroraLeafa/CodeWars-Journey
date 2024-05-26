/* 
    Kyu 7
    Day 6 - Code Wars Challenge
    Link : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
    CLEAR!!
*/

const filter_list = l => l.filter((param) => typeof param === "number");

console.log(filter_list([1, 2, 3, 4, "a", "b", "c", 5, 6, 7]));
