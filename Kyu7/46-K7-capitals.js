/* 
    Kyu 7
    Day 46 - Code Wars Challenge
    Link : https://www.codewars.com/kata/539ee3b6757843632d00026b
    CLEAR!!
*/

const capitals = (word) => {
  let array = word.split("");
  let res = [];
  for (let i = 0; i < word.length; i++) {
    if (array[i] === array[i].toUpperCase()) res.push(i);
  }
  return res;
};

console.log(capitals("TeStinG"));
console.log(capitals("ReFFszZ"));
