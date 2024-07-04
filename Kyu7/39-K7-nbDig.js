/* 
    Kyu 7
    Day 39 - Code Wars Challenge
    Link : https://www.codewars.com/kata/566fc12495810954b1000030
    CLEAR!!
*/

function nbDig(n, d) {
    // return Array.from({ length: n+1}, (_, i) => (i * i)).join("").match(RegExp(d, 'g')).length
    return Array.from({ length: n+1}, (_, i) => (i * i)).join("").split(d).length-1
}

console.log(nbDig(20, 1));

console.log(nbDig(5750, 0)); //Expected: 4700
console.log(nbDig(11011, 2)); //Expected: 9481
console.log(nbDig(12224, 8)); //Expected: 7733