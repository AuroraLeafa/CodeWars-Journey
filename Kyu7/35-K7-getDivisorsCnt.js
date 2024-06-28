/* 
    Kyu 7
    Day 35 - Code Wars Challenge
    Link : https://www.codewars.com/kata/542c0f198e077084c0000c2e
    CLEAR!!
*/

// function getDivisorsCnt(n){
//     let count = 0;
//     for (let i = 0; i <= n; i++) {
//         if(n % i === 0) count++
//     }
//     return count;
// }

// const getDivisorsCnt = n => Array.from({length: n}, (_, i) => i+1).filter(num => n % num === 0).length

// Optimized Func (Needed to Clear this Kata)
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) count++;
    }
  }
  return count;
}

console.log(getDivisorsCnt(4));
