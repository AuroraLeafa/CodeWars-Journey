/* 
    Day 38 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
    CLEAR !!
*/

const countSheep = num => {
  let sheep = "";
  for (let i = 1; i <= num; i++) {
    sheep += `${i} sheep...`
  }
  return sheep;
};

console.log(countSheep(3));
