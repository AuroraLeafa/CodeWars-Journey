/* 
    Kyu 7
    Day 36 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
    CLEAR!!
*/

function sortByLength(array) {
  return array.sort((a,b) => a.length - b.length)
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));