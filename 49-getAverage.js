/* 
    Day 49 - Code Wars Challenge
    Link : https://www.codewars.com/kata/563e320cee5dddcf77000158/
    CLEAR !!
*/

const getAverage = marks => {
    let avg = 0;
    for (let i = 0; i < marks.length; i++) {
        avg += marks[i]
    }
    return Math.floor(avg / marks.length)
}

// const getAverage = marks => Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length)

console.log(getAverage([1, 2, 3, 4, 5]));
