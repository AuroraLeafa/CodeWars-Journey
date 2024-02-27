/* 
    Day 25 Pt. 2 - Code Wars Challenge
    Link : https://www.codewars.com/kata/53dc54212259ed3d4f00071c/
    CLEAR !!
*/

function sum(numbers){
    if (numbers === 0){
        return 0
    }
    let total = 0;
    for(const number of numbers){
        total += number
    }
    return total
}

const sum = numbers => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum([1,2,3,4,5]));
