/* 
    Kyu 7
    Day 4 - Code Wars Challenge
    Link : https://www.codewars.com/kata/554b4ac871d6813a03000035
    CLEAR!!
*/
function highAndLow(numbers) {
  let num = numbers.split(" ");
  return [Math.max(...num), Math.min(...num)].join(" ");
}

console.log(highAndLow("14 16 15 2 24 -1 -2 -4 -4 -33 100"));