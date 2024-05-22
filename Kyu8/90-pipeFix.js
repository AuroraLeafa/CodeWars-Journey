/* 
    Day 90 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56b29582461215098d00000f
    CLEAR!!
*/


function pipeFix(numbers) {
  let newArr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    newArr.push(i)
  }
  return newArr;
}

console.log(pipeFix([1, 3, 4, 7]));
