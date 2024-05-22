/* 
    Day 100 - Code Wars Challenge
    Link : https://www.codewars.com/kata/570a6a46455d08ff8d001002
    CLEAR!!
*/

  const noBoringZeros = n => isNaN(n) || n === null ? 0 : Number(n.toString().replace(/0+$/, ""));

  console.log(noBoringZeros("105000"));
  console.log(noBoringZeros(NaN));
  console.log(noBoringZeros("105"));