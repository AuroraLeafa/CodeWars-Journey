/* 
    Kyu 8
    Day 132 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
    CLEAR!!
*/

function differenceInAges(ages) {
  return [
    Math.min(...ages),
    Math.max(...ages),
    Math.max(...ages) - Math.min(...ages),
  ];
}


console.log(differenceInAges([32,32,22,9,19,35,64]));