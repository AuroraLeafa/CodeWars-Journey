/* 
    Kyu 7
    Day 13 - Code Wars Challenge
    Link : https://www.codewars.com/kata/554e4a2f232cdd87d9000038
    CLEAR!!
*/

function dnaStrand(dna) {
  let change = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna.replace(/[ATGC]/g, (m) => change[m]);
}

console.log(dnaStrand("AAAA"));
console.log(dnaStrand("TTTT"));
console.log(dnaStrand("GGGG"));
console.log(dnaStrand("CCCC"));
console.log(dnaStrand("ATGC"));
console.log(dnaStrand("CGTA"));
