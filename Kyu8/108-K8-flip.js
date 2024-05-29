/* 
    Kyu 8
    Day 108 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
    CLEAR!!
*/

const flip = (d, a) => {
  return d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);
};

console.log(flip("L", [1,4,5,3,2,5]));
