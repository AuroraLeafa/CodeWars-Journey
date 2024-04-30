/* 
    Day 81 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57f6ad55cca6e045d2000627
    CLEAR!!
*/

function squareOrSquareRoot(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    Math.sqrt(array[i]) % 1 === 0 ? newArr.push(Math.sqrt(array[i])) : newArr.push(array[i]**2)
  }
  return newArr;
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));