/* 
    Day 25 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/
    CLEAR !!
*/

// function findAverage(array) {
//     if(array.length === 0){
//         return 0;
//     }
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total += array[i];
//     }
//     let avg = total / array.length;
//     return avg;
//   }

const findAverage = array => array.length === 0 ? 0 : array.reduce((acc, curr) => acc + curr) / array.length

  console.log(findAverage([1,5,1]));
  console.log(findAverage([1,2,4]));
  console.log(findAverage([1,1,0]));
  console.log(findAverage([]));