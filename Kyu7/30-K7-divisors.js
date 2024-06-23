/* 
    Kyu 7
    Day 30 - Code Wars Challenge
    Link : https://www.codewars.com/kata/544aed4c4a30184e960010f4
    CLEAR!!
*/

// function divisors(integer) {
//   let res = [];
//   for (let i = 2; i <= integer / 2; i++) {
//     if (integer % i === 0) res.push(i);
//   }
//   return res.length === 0 ?  `${integer} is a prime number` : res;
// }

const divisors = (int) => {
  const res = Array.from({ length: int / 2 }, (_, i) => i + 2).filter(
    (num) => int % num === 0
  );
  return res.length === 0 ?  `${int} is prime` : res;
};

console.log(divisors(15));
console.log(divisors(10));
console.log(divisors(12));
console.log(divisors(13));
