/* 
    Day 47 - Code Wars Challenge
    Link : https://www.codewars.com/kata/576b93db1129fcf2200001e6/
    CLEAR !!
*/

function sumArray(array) {
  if (!array || array.length < 1) {
    return 0;
  }
  let sum = 0;
  for (const element of array) {
    sum += element;
  }
  return sum - Math.min(...array) - Math.max(...array);
}

// const sumArray = array => !array || array.length < 1 ? 0 : array.sort((a,b) => a-b).slice(1,-1).reduce((acc, curr) => acc + curr, 0)

console.log(sumArray([5, 3, 4, 2, 1, 1]));
