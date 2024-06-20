/* 
    Kyu 7
    Day 28 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5949481f86420f59480000e7
    CLEAR!!
*/

function oddOrEven(array) {
    let sum = 0
    for (const iterator of array) {
        sum += iterator
    }
    return sum % 2 === 0 ? "even" : "odd"
}

// const oddOrEven = (array) => array.length === 0 ? 'even' : array.reduce((acc, curr) => acc + curr) % 2 === 0 ? "even" : "odd";

console.log(oddOrEven([]));
console.log(oddOrEven([1]));
console.log(oddOrEven([2]));
console.log(oddOrEven([1023, 1, 2]));
console.log(oddOrEven([1,1,1]));
