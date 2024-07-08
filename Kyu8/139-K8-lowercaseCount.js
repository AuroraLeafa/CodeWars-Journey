/* 
    Kyu 8
    Day 139 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56a946cd7bd95ccab2000055
    CLEAR!!
*/

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length;
}

// const lowercaseCount = (str) => str.split("").filter((char) => /[a-z]/.test(char)).length;

console.log(lowercaseCount("abcABCDE"));
console.log(lowercaseCount("ABCDE"));
console.log(lowercaseCount("abcABC123"));
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"));
