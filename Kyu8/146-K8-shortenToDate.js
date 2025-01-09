/* 
    Kyu 8
    Day 146 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/
    CLEAR!!!
*/

// function shortenToDate(longDate) {
//   return longDate.split(" ").slice(0, 3).join(" ").replace(",", "");
// }

const shortenToDate = longDate => longDate.split(",")[0];

console.log(shortenToDate("Friday May 2, 9am"));
console.log(shortenToDate("Wednesday May 6, 10am"));
console.log(shortenToDate("Sunday January 1, 5am"));
