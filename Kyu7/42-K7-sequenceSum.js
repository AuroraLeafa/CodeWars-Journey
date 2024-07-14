/* 
    Kyu 7
    Day 42 - Code Wars Challenge
    Link : https://www.codewars.com/kata/586f6741c66d18c22800010a
    CLEAR!!
*/

const sequenceSum = (begin, end, step) => {
    // let sum = 0;
    // for (let i = begin; i <= end; i += step) {
    //     sum += i;
    // }
    // return sum;

    return Array.from({length : (end - begin) / step + 1}, (_, i) => i * step + begin).reduce((acc, curr) => acc + curr, 0)
};

console.log(sequenceSum(2, 6, 2)); //12
console.log(sequenceSum(1, 5, 1)); //15
console.log(sequenceSum(1, 5, 3)); //5
