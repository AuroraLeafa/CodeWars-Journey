/* 
    Kyu 8
    Day 103 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55eca815d0d20962e1000106
    CLEAR!!
*/

function generateRange(min, max, step){
    let result = [];
    for (let i = min; i <= max; i += step) {
        result.push(i)
    }
    return result
}

console.log(generateRange(0, 10, 2));