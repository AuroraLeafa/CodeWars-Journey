/* 
    Kyu 8
    Day 111 - Code Wars Challenge
    Link : https://www.codewars.com/kata/588417e576933b0ec9000045
    CLEAR!!
*/

const seatsInTheater = (nCols, nRows, col, row) => (nCols - (col - 1)) * (nRows - row);

console.log(seatsInTheater(16, 11, 5, 3));