/* 
    Day 51 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57eaeb9578748ff92a000009/
    CLEAR !!
*/

function sumMix(x) {
  let newArr = [];
  for (let i = 0; i < x.length; i++) {
    newArr.push(+x[i]);
  }

    return newArr.reduce((acc, curr) => acc + curr, 0);
//   return sum;
}

console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
