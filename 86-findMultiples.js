/* 
    Day 86 - Code Wars Challenge
    Link : https://www.codewars.com/kata/58ca658cc0d6401f2700045f
    CLEAR!!
*/


function findMultiples(integer, limit){
    let resArr = []
    for (let i = integer; i < limit; i+=integer) {
        resArr.push(i)
    }
    return resArr;
}

// const findMultiples = (integer, limit) => Array.from({ length: limit/integer }, (_, idx) => (idx + 1) * integer);

console.log(findMultiples(5, 25));
console.log(findMultiples(1, 10));
console.log(findMultiples(2, 20));
