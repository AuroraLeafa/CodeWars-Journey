/* 
    Kyu 8
    Day 104 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57e3f79c9cb119374600046b
    CLEAR!!
*/

const hello = name => `Hello, ${name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!" : "World!"}`

console.log(hello("joHn"));