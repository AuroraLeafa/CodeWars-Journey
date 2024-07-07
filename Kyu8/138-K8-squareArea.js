/* 
    Kyu 8
    Day 138 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5748838ce2fab90b86001b1a
    CLEAR!!
*/


function squareArea(a){
    const radius = (2 * a) / Math.PI
    const area = radius * radius
    return parseFloat(area.toFixed(2))
}

console.log(squareArea(14.05));