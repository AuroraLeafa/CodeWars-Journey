/* 
    Kyu 7
    Day 12 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
    CLEAR!!
*/

// function findShort(s) {
//   return s.split(" ").sort((a,b)=> a.length-b.length)[0].length;
// }

const findShort = s => Math.min(...s.split(" ").map(s => s.length))

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
