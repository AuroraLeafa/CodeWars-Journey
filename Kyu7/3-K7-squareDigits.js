/* 
    Kyu 7
    Day 3 - Code Wars Challenge
    Link : https://www.codewars.com/kata/546e2562b03326a88e000020
    CLEAR!!
*/

function squareDigits(num) {
    let x = [], nums = num.toString();
    for (let i = 0; i < nums.length; i++) {
        x.push(nums[i]**2)
    }
    return +x.join('')
}

// const squareDigits = num => +num.toString().split('').map((x) => x ** 2).join('')

console.log(squareDigits('555'));
console.log(squareDigits(555));