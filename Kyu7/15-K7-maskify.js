/* 
    Kyu 7
    Day 15 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5412509bd436bd33920011bc
    CLEAR!!
*/

function maskify(cc) {
  return cc.length <= 4 ? cc : "#".repeat(cc.length - 4) + cc.slice(-4);
}

console.log(maskify("My Name is Jeff"));
